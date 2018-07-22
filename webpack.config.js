"use strict";

const path = require('path');

module.exports = {

    mode: "production",
    devtool: "source-map",
    entry: "./front-end/app.js",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname , "public/js")
    },
    watch: true

};