var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
		template:  './public/js/reactApps/app1/index.html',
		filename: 'index.html',
		inject: 'body'
});

module.exports = {
	entry: __dirname + '\\public\\js\\reactApps\\app1\\indexApp.js',
	module : {
		loaders: [
			{
				test: /\.js/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	output:{
		filename: 'indexAppTransformed.js',
		path: __dirname + '/public/js/transformedApps/app1'
	},
	plugins: [HTMLWebpackPluginConfig]
};