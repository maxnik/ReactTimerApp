const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './app/app.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Timer: 'app/components/Timer.jsx',
      Countdown: 'app/components/Countdown.jsx',
      Clock: 'app/components/Clock.jsx',
      CountdownForm: 'app/components/CountdownForm.jsx',
      Controls: 'app/components/Controls.jsx'
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.s[ac]ss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: function () {
                  return [
                    require('precss'),
                    require('autoprefixer')
                  ];
                }
              }
            },
            {
              loader: 'sass-loader'
            }
          ],
          //['css-loader', 'sass-loader'],
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ],
  devtool: 'cheap-module-eval-source-map',
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
};