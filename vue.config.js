const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // 解决打包白屏问题
  devServer: {
    port: 8888, //端口号
    host: "localhost", //
    open: true,
    https: false, //是否开启加密协议
    proxy: {
      //在 devServer 对象里设置跨域
      [process.env.VUE_APP_BASE_API]: {
        // 代理标识, 如果出现了这个就代表需要代理
        target: process.env.VUE_APP_SERVICE_URL,
        cgangeOrigin: true,
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: "", // 重写路由, 把想替换掉的路由地址替换为空或者别的
        },
      },
    },
  },
});
