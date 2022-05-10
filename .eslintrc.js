module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/standard'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        // 设置在开发环境中允许使用console和debugger
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'vue/multi-word-component-names': ['error', {
            ignores: ['index']
        }],
        'no-unused-vars': 0,
        'no-undef': 0
    }
}
