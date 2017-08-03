var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var fs = require("fs");

var compiler = webpack({
  // configuration
});
var server = new WebpackDevServer(compiler, {
  proxy: {
    "**": "http://localhost:9090"
  }
});