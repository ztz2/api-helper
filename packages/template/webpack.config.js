const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const packageJSON = require('./package.json');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'api-helper-template.js',
    path: path.resolve(__dirname, ''),
    library: 'apihTemplate',
    libraryTarget: 'umd',
    environment: {
      // 关闭输出头部代码使用const关键字
      const: false,
      // 关闭输出头部代码使用箭头函数
      arrowFunction: false
    }
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(process.cwd(), './src'),
      '@root': path.resolve(process.cwd(), './')
    },
    fallback: {
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify')
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          compilerOptions: {
            target: 'ES5',
          }
        }
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        // 不将注释提取到单独的文件中
        extractComments: false,
      }),
    ],
  },
  plugins: [
    new webpack.BannerPlugin(
      `${packageJSON.name} v${packageJSON.version}
(c) 2023-present ${packageJSON.author.name}
Released under the MIT License.`
    ),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
          // 在浏览器环境中，process.env 属性可能并不存在，因此您可以手动定义这些属性：
          APP_ENV: JSON.stringify('browser')
        }
      }
    })
  ]
};
