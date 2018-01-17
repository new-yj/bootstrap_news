var ExtractTextPlugin = require("extract-text-webpack-plugin");
var packCSS = new ExtractTextPlugin('./css/[name].min.css');
require('./dist/css/bootstrap.min.css');

module.exports = {
	entry: {

	},
	output: {
		filename: '[name].bundle.js',
		path: __dirname + '/dist/js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: ['style', 'css'],
				include: APP_PATH
			}
		]
	},
	postcss: function () {
		return [autoprefixer, cssnext, precss, cssnano]
	},
	plugins: [
		packCSS
	]
}