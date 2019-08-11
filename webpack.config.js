const path = require('path');

// const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
entry:["babel-polyfill","./src/js/index.js"],
output:{
    path:path.resolve(__dirname, "dist"),
    filename:'js/bundle.js'
},
devServer:{
    contentBase:'./dist'
},
// plugins:[
    //This is for injecting a html file to the index.html file
// new HtmlWebpackPlugin({
//     filename:'index.html',
//     template:'./src/index.html'
// })
// ],
module:{
rules:[{
    test:/\.(js|jsx)$/,
    exclude:/node_modules/,
    use:{
        loader:'babel-loader'
    }
}]
}

} 