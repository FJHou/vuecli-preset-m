module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  globals: {
    wx: true
  },
  rules: {
    // Rules List: http://eslint.cn/docs/rules/
    // 0-关闭规则
    // 1-开启规则作为警告（不会影响退出代码）
    // 2-将规则作为错误打开（触发时退出代码为1）
    'no-var': 2, // 禁止var
    eqeqeq: 2, // 要求必须使用全等
    'no-unused-vars': 2, // 不能有声明后未被使用的变量或参数
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-dupe-keys': 1, // 禁止对象中出现重复的key
    'no-irregular-whitespace': 1, // 禁止不规则的空格
    'no-unreachable': 1, // return后禁止出现代码
    'init-declarations': 1, // 要求或禁止var声明中的初始化
    camelcase: 1, // 强制使用驼峰命名
    'max-len': ['error', { code: 80 }],
    'no-underscore-dangle': 1, // 标识符不能以_开头或结尾
    'no-mixed-spaces-and-tabs': 1, // 禁止空格和tab的混合缩进
    'no-multi-spaces': 1, // 不能用多余的空格
    semi: 0, // 关闭语句强制分号结尾
    'max-statements': [0, 12], // 函数内最多有几个声明
    'no-multiple-empty-lines': [0, { max: 50 }], // 空行最多不能超过50行
    'keyword-spacing': 1, // 确保字符前后空格的一致性
    'no-redeclare': 1, // 不允许重复声明
    'no-trailing-spaces': 1, // 不允许在语句后存在多余的空格
    'spaced-comment': 1, // 注释前需要一个空格
    'no-extra-boolean-cast': 0,
    'vue/no-use-v-if-with-v-for': 0,
    'no-eval': 1, // 禁止使用eval
    'no-implied-eval': 2, // 禁止使用隐式eval
    'no-class-assign': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)'],
      env: {
        jest: true
      }
    }
  ]
};
