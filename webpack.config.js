const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode : 'production',
  devtool : 'source-map',
  entry : {
    app : './src/app.js',
  },
  stats : {
    colors : true,
  },
  plugins : [
    new CleanWebpackPlugin(),
  ],
  optimization : {
    minimizer : [ new UglifyJsPlugin() ],
  },
  output : {
    filename : '[name].bundle.js',
    path : path.resolve(__dirname, 'dist'),
  },
  module : {
    rules : [
      {
        test : /\.m?js$/,
        exclude : /(node_modules|bower_components)/,
        use : {
          loader : 'babel-loader',
          options : {presets : [ '@babel/preset-env' ]}
        }
      },
      {
        parser : {
          amd : false,
        },
      }
    ],
  },
};
