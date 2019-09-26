const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/public/index.html",
  filename: "./index.html"
});

module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
            test: /\.css$/i,
            use: ['css-loader'],
        }
      ]
    },
    plugins: [htmlPlugin],
    devServer: {
      
        host: 'localhost',
        port: 3000
        
      }
      
  };