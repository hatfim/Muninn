const config = require('./base.cjs')
const { OFF, WARN, ERROR } = require('./constants.cjs')

const configTs = {
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'import'],
      parserOptions: {
        allowAutomaticSingleRunInference: true,
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 2022,
        sourceType: 'module',
        project: ['./tsconfig.json'],
        warnOnUnsupportedTypeScriptVersion: true
      },
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript'
      ],
      // Set ESLint rule to "never" if TypeScript overrides
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': OFF,
        '@typescript-eslint/no-empty-function': OFF,
        '@typescript-eslint/no-explicit-any': OFF,
        '@typescript-eslint/no-non-null-assertion': OFF,
        '@typescript-eslint/no-redeclare': ERROR,
        '@typescript-eslint/no-unsafe-argument': OFF, // @todo(lint) move to error
        '@typescript-eslint/no-unsafe-assignment': OFF,
        '@typescript-eslint/no-unsafe-call': OFF,
        '@typescript-eslint/no-unsafe-member-access': OFF,
        '@typescript-eslint/no-unsafe-return': OFF,
        '@typescript-eslint/no-unused-vars': ERROR,
        '@typescript-eslint/no-var-requires': WARN,
        '@typescript-eslint/member-delimiter-style': [
          ERROR,
          {
            multiline: {
              delimiter: 'comma',
              requireLast: false
            },
            singleline: {
              delimiter: 'comma',
              requireLast: false
            }
          }
        ],
        '@typescript-eslint/restrict-template-expressions': OFF
      }
    }
  ]
}

module.exports = {
  ...config,
  ...configTs
}
