const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpackConfig = {
    // other config...
    context: __dirname, // to automatically find tsconfig.json
    output: {
        path: `${__dirname}/bin`,
        filename: "js/[name].js"
    },
    entry: {
        pixi: "./node_modules/pixi.js",
        main: "./src/index.ts"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: "awesome-typescript-loader",
                        options: {
                            configFileName: "tsconfig.json"
                            /*compilerOptions: {
                                outDir: tsConfigoutDir,
                            }*/
                        }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre",
                exclude: /node_modules/
            }

        ]
    },
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            inlineSource: ".(js|css)$", // embed all javascript and css inline
            template: "template/index.html",
            filename: "index.html",
            hash: false,
            title: "Playground",
        }),
    ]
};
module.exports = () => webpackConfig;