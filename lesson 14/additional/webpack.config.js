let path = require('path');

let conf = {
	entry: './js/script.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'main.js',
		publicPath: 'dist/'
	},
	devServer: {
		overlay: true
	}
}

module.exports = conf;