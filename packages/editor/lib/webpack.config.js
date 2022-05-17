var path = require("path");
module.exports = {
    mode: "production",
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
                                    "@ant-prefix": "antdv4",
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
                use: [{
                        loader: "url-loader",
                        options: {
                            limit: 12000,
                            name: 'img/[name].[hash:8].[ext]',
                        },
                    }],
            },
            {
                test: /\.(png|jpeg|gif|svg|jpg)$/,
                use: [{
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]?[hash]',
                            outputPath: 'img/'
                        }
                    }],
            },
        ],
    },
    plugins: [],
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src/components'),
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    externals: ["react", "react-dom", "lodash", "bici-transformers", "axios", "antd"],
};
//# sourceMappingURL=webpack.config.js.map