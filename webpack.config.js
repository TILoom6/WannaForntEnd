/* eslint "flowtype/require-valid-file-annotation": 0 */
/* eslint "import/no-commonjs": 0 */

const path = require("path");
const webpack = require("webpack");
const bodyParser = require("body-parser");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const BASE_PLUGINS = [
  new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
  })
];

module.exports = {
  entry:
    process.env.NODE_ENV === "production"
      ? ["babel-polyfill", "./src/index.js"]
      : [
          "babel-polyfill",
          "react-hot-loader/patch",
          "webpack-dev-server/client?http://localhost:8080",
          "webpack/hot/only-dev-server",
          "./src/index.js"
        ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
    publicPath: "/"
  },
  devServer: {
    contentBase: "public/",
    historyApiFallback: true,
    port: 8080,
    hot: true,
    before: function(app) {
      app.use(bodyParser());

      const db = [];
      for (let i = 0; i < 30; i++) {
        db.push({
          wannnatagId: i,
          title: "example title",
          body: "example body\n".repeat(10),
          username: "exampleUser",
          postDate: new Date().getTime() + i * 10000,
          isOwner: i % 3 === 0
        });
      }
      app.get("/wannatags", (req, res) => {
        res.json(db);
      });
      app.post("/wannatag", (req, res) => {
        const data = Object.assign(
          {
            wannnatagId: db.length + 10000,
            postDate: new Date().getTime(),
            // temporaly
            isOwner: true
          },
          req.body
        );
        db.push(data);
        res.send(200);
      });
    }
  },
  plugins:
    process.env.NODE_ENV === "production"
      ? BASE_PLUGINS.concat([new UglifyJsPlugin()])
      : BASE_PLUGINS.concat([
          new webpack.NamedModulesPlugin(),
          new webpack.NoEmitOnErrorsPlugin(),
          new webpack.HotModuleReplacementPlugin()
        ]),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, "node_modules"), "node_modules"]
  }
};
