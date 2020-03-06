const VConsolePlugin = require('vconsole-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
// const { name } = require('./package.json');

module.exports = {
  configureWebpack: config => {
    config.plugins.push(
      new VConsolePlugin({
        enable: !isProd
      }),
      // 打包完后
      new FileManagerPlugin({
        onEnd: {
          archive: [{ source: `./dist`, destination: `./dist.zip` }]
        }
      })
    );
  }
  // publicPath: '/'
  // outputDir: name
};
