export enum ModelLangToLangId {
	bat = 'bat',
	btm = 'bat',
	c = 'c',
	cc = 'cpp',
	cmd = 'bat',
	coffee = 'coffeescript',
	cpp = 'cpp',
	cs = 'csharp',
	css = 'css',
	erl = 'erlang',
	es6 = 'javascript',
	go = 'go',
	hrl = 'erlang',
	hs = 'haskell',
	html = 'html',
	ipynb = 'jupyter',
	java = 'java',
	js = 'javascript',
	lhs = 'haskell',
	lua = 'lua',
	m = 'objective-c',
	matlab = 'matlab',
	md = 'markdown',
	mm = 'objective-c',
	php = 'php',
	pl = 'perl',
	pm = 'perl',
	ps1 = 'powershell',
	py = 'python',
	r = 'r',
	rb = 'ruby',
	rda = 'r',
	rdata = 'r',
	rds = 'r',
	rs = 'rust',
	scala = 'scala',
	sh = 'shellscript',
	sql = 'sql',
	swift = 'swift',
	tex = 'tex',
	ts = 'typescript',
	tsx = 'typescriptreact',
    asm = 'assembly',
    bas = 'vb',
    csv = 'csv',
    dart = 'dart',
    groovy = 'groovy',
    ini = 'ini',
    jenkins = 'groovy',
    jenkinsfile = 'groovy',
    jl = 'julia',
    json = 'json',
    kt = 'kotlin',
    kts = 'kotlin',
    pa = 'pascal',
    pas = 'pascal',
    pp = 'pascal',
    s = 'assembly',
    toml = 'toml',
    vb = 'vb',
    vba = 'vb',
    xml = 'xml',
    yaml = 'yaml',
    yml = 'yaml',
};

export interface ModelResult {
	languageId: ModelLangToLangId;
	confidence: number;
}