const path = require("path");
const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  context: __dirname,
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: { importLoaders: 1 }
            },
            {
                loader: "less-loader",
                options: {
                    lessOptions: {
                        modifyVars: {
                            "@ant-prefix": "antdv4",
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        ]
      },
      {
        test: /\.(woff|eot|ttf|svg|png|jpg)$/,
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit: '10240' ,
                    name: '[name].[hash:4].[ext]'
                }
            },
        ]
      },
    ]
  },
  resolve: {
      extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
      alias:{
          '@': path.resolve(__dirname, './src'),
      },
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
    hot: true,
    historyApiFallback: true,
  },
//   plugins: [new webpack.HotModuleReplacementPlugin()]
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ].filter(Boolean),
};
