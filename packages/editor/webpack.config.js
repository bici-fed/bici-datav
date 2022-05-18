const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
  mode: "production", // development || production
  // devtool: 'inline-source-map',
  entry: "./src/index.ts",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "lib"),
    library: "datavEditor",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(less|css)$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                modifyVars: {
                  "@ant-prefix": "v-editor",
                },
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.m?jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(png|jpeg|gif|svg|jpg)$/,
        use:[{
          loader: "url-loader",
          options: {
            limit: 12000,
            name: 'img/[name].[hash:8].[ext]',
          },
        }],
      },
      {
        test: /\.(png|jpeg|gif|svg|jpg)$/,
        use:[{
          loader: "file-loader",
          options: {
            name: '[name].[ext]?[hash]',
            outputPath: 'img/'
          }
        }],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "source", to: "dest" },
        { from: "other", to: "public" },
      ],
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx','.ts', '.tsx'],
  },
  externals: ["react", "react-dom", "lodash", "bici-transformers", "axios","antd"],
};
