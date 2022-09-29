const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 解决打包白屏问题
  devServer:{
    prop:8888,//端口号
    host:"localhost",//
    open:true,
    https:false,//是否开启加密协议

  },
  lintOnSave:false,//关闭严格模式
  productionSourceMap:false,
})
