import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import vue from 'eslint-plugin-vue'

export default createConfigForNuxt({
  features: {
    stylistic: true,
  },
  files: ['*.vue'],
  plugins: {
    vue,
  },
}).append({
  rules: {
    // vue/script-indent はベースインデントを 0 に（script setup は core indent に任せる）
    'vue/script-indent': ['error', 'tab', {
      baseIndent: 0,
      switchCase: 1,
      ignores: [],
    }],

    // core の indent を有効にする（setup内のネスト構造もカバー）
    'indent': ['error', 'tab', {
      SwitchCase: 1,
    }],
  },
})
