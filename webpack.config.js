const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/js/app.ts',
	output: {
		path: "C:\\Users\\Neel\\canvas_TS_Skeleton\\dist",
		filename: "bundle.js",
	},
	mode: "development",
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
    devServer: {
		contentBase: './dist'
	},
	module: {
		rules: [
			{
				test: /\.ts?$/,
				exclude: /node_modules/,
				use: [
					{ loader: "ts-loader" }
				]
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					"style-loader",
					"css-loader"
				]
			},
			{
				test: /\.mp3$/,
				exclude: /node_modules/,
				use: [
					{ loader: 'file-loader' }
				]
			}
		]
	},
	plugins: [
    new HtmlWebpackPlugin({
			template: './src/index.html'
		})
  ],
}
