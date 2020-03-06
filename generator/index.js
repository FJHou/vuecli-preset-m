module.exports = (api, options, rootOptions) => {
  // 复制并用 ejs 渲染 `./template` 内所有的文件
  api.render('../template');
  // 修改 `package.json` 里的字段
  api.extendPackage({
    dependencies: {
      axios: '^0.19',
      'register-service-worker': '^1.6.2',
      'vue-router': '^3.0.3',
      vuex: '^3.0.1'
    },
    devDependencies: {
      'git-cz': '^2.0.0',
      'filemanager-webpack-plugin': '^2.0.5',
      'vconsole-webpack-plugin': '^1.4.2',
      commitizen: '^4.0.3',
      'conventional-changelog-cli': '^2.0.31',
      'cz-conventional-changelog': '^3.1.0',
      'postcss-aspect-ratio-mini': '^1.0.1',
      'postcss-import': '^12.0.1',
      'postcss-preset-env': '^3.5.0',
      'postcss-px-to-viewport': '^1.1.1',
      'postcss-url': '^8.0.0',
      'postcss-viewport-units': '^0.1.6',
      'postcss-write-svg': '^3.0.1',
      prettier: '^1.18.2'
    },
    scripts: {
      testing: 'vue-cli-service build --mode testing',
      commit: 'git cz',
      build: 'vue-cli-service build --mode production',
      changelog:
        'conventional-changelog -p angular -i CHANGELOG.md -s && git add CHANGELOG.md'
    },
    config: {
      commitizen: {
        path: 'cz-conventional-changelog'
      }
    },
    gitHooks: {
      'pre-commit': 'lint-staged'
    },
    'lint-staged': {
      '*.{js, vue}': ['npm run lint --fix', 'git add']
    }
  });
};
