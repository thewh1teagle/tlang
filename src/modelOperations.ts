
// import '@tensorflow/tfjs';
import * as tf from '@tensorflow/tfjs-node'
import '@tensorflow/tfjs-backend-cpu';
import { InMemoryIOHandler } from './inMemoryIOHandler';
import { ModelLangToLangId, ModelResult } from './types';
// Adds the CPU backend to the global backend registry.


export class ModelOperations {
    static modelCache: tf.GraphModel | undefined;

    public async loadModel() {
        if (ModelOperations.modelCache) {
            return;
        }
        await tf.setBackend('cpu');
        ModelOperations.modelCache = await tf.loadGraphModel(new InMemoryIOHandler());
    }

    public async runModel(content: string): Promise<Array<ModelResult>> {
        if (!content) {
            return [];
        }
    
        // call out to the model
        const predicted = await ModelOperations.modelCache!.executeAsync(tf.tensor([content]));
    
        const langs: Array<keyof typeof ModelLangToLangId> = (predicted as tf.Tensor<tf.Rank>[])[0].dataSync() as any;
        const probabilities = (predicted as tf.Tensor<tf.Rank>[])[1].dataSync() as Float32Array;
    
        const objs: Array<ModelResult> = [];
        for (let i = 0; i < langs.length; i++) {
            objs.push({
                languageId: ModelLangToLangId[langs[i]],
                confidence: probabilities[i],
            });
        }
    
        let maxIndex = 0;
        for (let i = 0; i < probabilities.length; i++) {
            if (probabilities[i] > probabilities[maxIndex]) {
                maxIndex = i;
            }
        }
    
        return objs.sort((a, b) => {
            return b.confidence - a.confidence;
        });
    }

    public dispose() {
        ModelOperations.modelCache?.dispose();
    }
}