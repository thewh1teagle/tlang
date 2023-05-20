import { ModelLangToLangId } from './types';
import { ModelOperations } from './modelOperations';


async function main() {
    const modelOperations = new ModelOperations();
    await modelOperations.loadModel();
    const modelResults = await modelOperations.runModel(`
    from time import sleep
    
    def main():
        sleep(3)
        print('Hello world!')
    
    `);
    const result = modelResults?.[0];
    console.log(result)
}

main()