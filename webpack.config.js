const path = require('path');
const cpy = require('copy-webpack-plugin');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
    entry: {
        contentJs: "./src/content.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname,'dist')
    },
    mode: "production",
    // watch: true,
    plugins: [
        new cpy({
            patterns: [{ from: 'static'}]
        }),
        new NodePolyfillPlugin()
    ]
}