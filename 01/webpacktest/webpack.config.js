const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')//自动生成html文件的插件
// const CleanWebpackPlugin =require('clean-webpack-plugin');//清除之前打包的文件
const  { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: "development", 
  entry: './src/js/entry.js',//入口文件（让webpack知道从哪个文件开始编译）
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve:{//配置路径别名 和自动查找文件后缀
      extensions:['.js','.vue','.css','.json'],
      alias:{
        'vue$':"vue/dist/vue.esm.js",
        '@':path.resolve('src'),
      }
  },
  module: {
         rules: [
          {
           test: /\.css$/,
             use: [
               'style-loader',
               'css-loader'
             ]
           },
           {
          test: /\.(png|svg|jpg|gif)$/,
            use: [
             'file-loader'
               ]
            },
            {
                test: /\.(png|jpg|gif|svg)(\?.*)$/,
                use: ['url-loader'
                  // {
                  //   loader: 'url-loader',
                  //   options: {
                  //     limit: 8192
                  //   }
                  // }
                ]
              } , 
              {
                test:/\.vue$/,
                use:['vue-loader']
              },
              {
                test: /\.(html)$/,
                use: {
                  loader: 'html-loader',
                  options: {
                    attrs: [':data-src']
                  }
                }
              },
              {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            },
            {
              test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
              use:['url-loader']
          },
          {
              test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
              use:['url-loader']
          }
         ]
       },
       plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin(),
        new HtmlWebpackPlugin({  // Also generate a test.html
          // filename: 'test.html',
          template: './index.html'
        })
      ],
  devServer: {
       contentBase: './dist'
       },
      //  plugins:[new HtmlwebpackPlugin({template:'dist/js/index.html'}),]
    // new CleanWebpackPlugin(),
  }