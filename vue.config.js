module.exports = {
  publicPath: "./",
  devServer: {
    proxy: {
      '/api': {
        // 实际代理的地址
        // target: 'http://localhost:9090/',
        target: 'http://192.144.186.134:9090/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
