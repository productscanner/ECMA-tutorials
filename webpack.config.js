module.exports = {
	entry:'./script.js',
	output:{filename:'bundle.js'},
	module:{
		loaders:[
		{test: /\.js?/,loader:'babel-loader',exclude:/node_modules/}
		]
	}
};

/* var server = {
    target: 'node',
    entry: './script.js',
    output: {
        filename: 'server.js'
    }
};

var client = {
    target: 'web',
    entry: './index.js',
    output: {
        filename: 'client.js'
    }
};

module.exports = [client, server]; */