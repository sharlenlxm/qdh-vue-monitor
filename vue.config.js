const path = require('path')
const webpack = require('webpack')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CopyWebpackPlugin = require('copy-webpack-plugin')
// const mapjson = require('src/views/dp/firstdp/map/chinamaincity')
function resolve(dir) {
  return path.join(__dirname, dir)
}

// vue.config.js
module.exports = {

  outputDir: 'securit-monitor', // 生成打包文件名
  publicPath: "/chqdh/", //前端访问项目名
  /*
    Vue-cli3:
    Crashed when using Webpack `import()` #2463
    https://github.com/vuejs/vue-cli/issues/2463
   */
  /*
  pages: {
    index: {
      entry: 'src/main.js',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  */

  configureWebpack: {
    plugins: [
      // Ignore all locale files of moment.js
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      // new BundleAnalyzerPlugin(),
      new CopyWebpackPlugin([{
          from: 'node_modules/@liveqing/liveplayer/dist/component/crossdomain.xml'
        },
        {
          from: 'node_modules/@liveqing/liveplayer/dist/component/liveplayer.swf'
        },
        {
          from: 'node_modules/@liveqing/liveplayer/dist/component/liveplayer-lib.min.js',
          to: 'js/'
        }
      ])
    ],
    externals: {
      'vue': 'Vue',
      'ant-design-vue': 'antd',
      'BMap': 'BMap'
    }
  },

  chainWebpack: (config) => {
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('@api', resolve('src/api'))
      .set('@assets', resolve('src/assets'))
      .set('@comp', resolve('src/components'))
      .set('@views', resolve('src/views'))
      .set('@layout', resolve('src/layout'))
      .set('@static', resolve('src/static'))
      .set('@utils', resolve('src/utils'))
  },

  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          /* less 变量覆盖，用于自定义 ant design 主题 */

          /*
          'primary-color': '#F5222D',
          'link-color': '#F5222D',
          'border-radius-base': '4px',
          */
          'font-size-base': '13px'
        },
        javascriptEnabled: true
      }
    }
  },

  devServer: {
    https: false,
    disableHostCheck: true,
    proxy: {
      '/chqdh-server/': {
        // target: 'https://61.153.144.212:8403',
        // target: 'https://61.153.144.212:8403',
        // target: 'http://192.168.0.137:7777',  //光耀
        // target: 'http://192.168.0.149:8082/chqdh', //詹加州
        target: 'http://192.168.0.132:8084/jztz', //彭清
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/chqdh-server': ''
        }
      },
      '/gisServer': { //百度地图配置代理
        // target: 'http://10.136.122.7:5088/gisServer', //科技公司内网地址
        target: 'http://115.236.28.75:18080/gisServer', //旦电内网地址
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/gisServer': ''
        }
      }
    },
    open: true,
    port: 10005,
  },
  lintOnSave: false,
  productionSourceMap: false
}
