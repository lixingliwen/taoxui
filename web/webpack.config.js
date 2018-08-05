const path = require('path')
const webpack = require('webpack')

// HtmlWebpackPlugin 
// 用于把webpack编译到内存里 网页加载时动态的把编译好的css插入到html里面
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    //entry:'./src/main.js', // 入口文件（让webpack知道从哪个文件开始编译）
    // output:{ // 输出
    //     path:path.resolve('dist'), // 输出到哪个目录(绝对路径)
    //     filename:"bundle.js" // 输出的文件名称
    // },
    entry:{
        mian:'./src/main.js',
        app:'./app/index.js'
    },
    output:{
        path:path.resolve('dist'),  // 输出目录
        filename:'[name].js', // name(变量)就是entry的key 作为文件名称
        library:"Bvue",
        libraryTarget:"umd"        // 模块的模式 （闭包）
    },
    resolve: { // 配置路径别名 和 自动查找文件后缀
        extensions: ['.js', '.vue','.css','.less' , '.json'], // 自动查找文件后缀
        alias: { // 配置路径别名
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve('src'),
            '%': path.resolve('test')
        }
    },
    module:{ // 添加模块处理器loader
        rules:[ // 什么模块使用什么规则处理（正则表达式）
            {
                test:/\.css$/, //正则匹配文件后缀
                use: ['style-loader','css-loader'] // 使用什么loader来处理这个后缀名称的文件
            },
            {
                test:/\.vue$/,
                use:['vue-loader']
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            },
            {
                test:/\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use:['url-loader']
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                use:['url-loader']
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use:['url-loader']
            },
        ]
    },
    devServer:{ // 配置 webpack-dev-server 启动命令的参数
        port:8080,  // 配置服务的端口号
        contentBase:path.resolve(), // 配置web服务器的根目录
        open:true,      // 自动打开网页
        progress:true, // 显示打包进度
        compress: true //启用gzip 压缩
        // inline: true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html', // 指定加载的模板(html的模板文件)
        })
    ],
    mode: 'development' // 指定编译模式 开发模式development  生产production
}
