module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unnecessary-type-constraint': 'off',
    'import/order': [
      'error',
      {
        // groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type'],
        // pathGroups: [
        //   {
        //     pattern: '{react,react-dom/**,react-router-dom}',
        //     group: 'builtin',
        //     position: 'before',
        //   },
        //   {
        //     pattern: '@src/**',
        //     group: 'parent',
        //     position: 'before',
        //   },
        // ],
        // pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
        },
        // 'newlines-between': 'always',
      },
    ],
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
  },
  ignorePatterns: ['node_modules', '**/dist/**/*', 'build'],
}
