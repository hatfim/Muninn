const { OFF, WARN, ERROR } = require('./constants.cjs')

const baseConfig = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: ['prettier', 'plugin:import/errors', 'plugin:import/warnings'],
  ignorePatterns: ['**/.next/*', '**/dist/*', '**/node_modules/*'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    requireConfigFile: false
  },
  plugins: ['import', 'typescript-sort-keys'],
  root: true,
  rules: {
    'comma-dangle': ERROR,
    indent: OFF,
    quotes: [ERROR, 'single', 'avoid-escape'],
    'linebreak-style': [ERROR, 'unix'],
    semi: [ERROR, 'never'],
    'space-before-function-paren': [
      ERROR,
      { anonymous: 'always', named: 'never', asyncArrow: 'ignore' }
    ],
    'keyword-spacing': [ERROR, { after: true }],
    'jsx-quotes': [ERROR, 'prefer-single'],
    'brace-style': [ERROR, '1tbs', { allowSingleLine: true }],
    'object-curly-spacing': [ERROR, 'always'],
    curly: ERROR,
    'no-fallthrough': OFF,
    'comma-spacing': ERROR,
    'comma-style': [ERROR, 'last'],
    'no-irregular-whitespace': [ERROR],
    eqeqeq: [ERROR, 'smart'],
    'no-spaced-func': ERROR,
    'array-bracket-spacing': [ERROR, 'never'],
    'key-spacing': [ERROR, { beforeColon: false, afterColon: true }],
    'no-console': OFF,
    'no-unused-vars': [
      ERROR,
      { args: 'none', vars: 'all', varsIgnorePattern: '[rR]eact' }
    ],
    'space-in-parens': [ERROR, 'never'],
    'space-unary-ops': [ERROR, { words: true, nonwords: false }],
    'spaced-comment': [
      ERROR,
      'always',
      { exceptions: ['*', '#__PURE__'], markers: ['/'] }
    ],
    'max-depth': [WARN, 4],
    radix: [ERROR, 'always'],
    'react/jsx-uses-react': WARN,
    'eol-last': ERROR,
    'arrow-spacing': ERROR,
    'space-before-blocks': [ERROR, 'always'],
    'space-infix-ops': ERROR,
    'no-new-wrappers': ERROR,
    'no-self-compare': ERROR,
    'no-nested-ternary': ERROR,
    'no-multiple-empty-lines': ERROR,
    'no-unneeded-ternary': ERROR,
    'no-duplicate-imports': ERROR,

    // Import
    'import/default': OFF,
    'import/named': OFF,
    'import/namespace': OFF,
    'import/no-unresolved': OFF,
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '~**/**',
            group: 'sibling',
            position: 'before'
          }
        ]
      }
    ]
  }
}

module.exports = baseConfig
