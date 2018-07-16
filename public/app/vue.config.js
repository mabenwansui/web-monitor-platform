const path = require('path');
const resolve = dir => path.join(__dirname, dir);
module.exports = {
  outputDir: 'dist',
  productionSourceMap: false,
  chainWebpack: config=>{
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@views', resolve('src/views'))
      .set('@components', resolve('src/components'))
      .set('@common', resolve('src/common'))
      .set('@css', resolve('src/assets/css'))
      .set('@images', resolve('src/assets/images'))
      .set('@font', resolve('src/assets/font'))
  }
}