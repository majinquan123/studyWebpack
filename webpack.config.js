
// node中路径处理方法
const {resolve} = require('path')
module.exports = {
  // webpack配置
  // 入口起点
  entry: './src/index.js',
  // 输出
  output: {
    // 文件名
    filename: 'builts.js',
    // 输出路径 __dirname代表当前文件的绝对路径  
    path: resolve(__dirname, 'build')
  },
  //
  module: {
    rules: [
      // 详细loader 配置
      {
        // 匹配哪些文件 正则
        test: /\.css$/,
        // 使用哪些loader进行处理
        use: [
          // 从后往前执行，顺序不能变
          // ②创建style标签，将js中的css样式资源插入进去，添加到head中生效
          'style-loader',
          // ①将css文件变成commonjs模块,加载到js中 里面内容是样式字符串
          'css-loader',
        ]
      },
      {  
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          // 将less文件转成css文件 要安装less  或者sass
          "less-loader"
        ]
      },
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options:{
          "presets": ["@babel/preset-env"]
        }
      }
    ]
  },
  // plugins的配置
  plugins: [

  ], 
  // 模式
  mode: 'development',
  // mode: 'production' 
  // 
}