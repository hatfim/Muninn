const { OFF, WARN, ERROR } = require('./constants.cjs')
const config = require('./typescript.cjs')

const reactConfig = {
  ...config,
  plugins: [...config.plugins, 'react', 'jsx-a11y', 'react-hooks'],
  rules: {
    ...config.rules,
    'react/display-name': OFF,
    'react/jsx-curly-spacing': [ERROR, 'never'],
    'react/jsx-indent-props': [ERROR, 2],
    'react/jsx-no-duplicate-props': ERROR,
    'react/jsx-no-literals': OFF,
    'react/jsx-no-undef': ERROR,
    'react/jsx-quotes': OFF,
    'react/jsx-sort-prop-types': OFF,
    'react/jsx-sort-props': OFF,
    'react/jsx-uses-vars': ERROR,
    'react/no-danger': OFF,
    'react/no-did-mount-set-state': OFF,
    'react/no-did-update-set-state': ERROR,
    'react/no-multi-comp': OFF,
    'react/no-set-state': OFF,
    'react/no-unknown-property': [ERROR, { ignore: ['prefix'] }],
    'react/react-in-jsx-scope': ERROR,
    'react/require-extension': OFF,
    'react/jsx-equals-spacing': ERROR,
    'react/jsx-max-props-per-line': [ERROR, { when: 'multiline' }],
    'react/jsx-closing-bracket-location': [ERROR, 'after-props'],
    'react/jsx-tag-spacing': ERROR,
    'react/jsx-indent': [ERROR, 2],
    'react/jsx-wrap-multilines': ERROR,
    'react/jsx-boolean-value': ERROR,
    'react/jsx-first-prop-new-line': [ERROR, 'multiline'],
    'react/self-closing-comp': ERROR,

    // hooks
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': WARN,

    // jsx-a11y rules
    'jsx-a11y/accessible-emoji': ERROR,
    'jsx-a11y/alt-text': ERROR,
    'jsx-a11y/anchor-has-content': ERROR,
    'jsx-a11y/anchor-is-valid': ERROR,
    'jsx-a11y/aria-activedescendant-has-tabindex': ERROR,
    'jsx-a11y/aria-props': ERROR,
    'jsx-a11y/aria-proptypes': ERROR,
    'jsx-a11y/aria-role': ERROR,
    'jsx-a11y/aria-unsupported-elements': ERROR,
    'jsx-a11y/click-events-have-key-events': ERROR,
    'jsx-a11y/heading-has-content': ERROR,
    'jsx-a11y/html-has-lang': ERROR,
    'jsx-a11y/iframe-has-title': ERROR,
    'jsx-a11y/img-redundant-alt': ERROR,
    'jsx-a11y/interactive-supports-focus': [
      ERROR,
      {
        tabbable: [
          'button',
          'checkbox',
          'link',
          'searchbox',
          'spinbutton',
          'switch',
          'textbox'
        ]
      }
    ],
    'jsx-a11y/label-has-associated-control': [
      ERROR,
      {
        assert: 'either',
        depth: 3
      }
    ],
    'jsx-a11y/media-has-caption': ERROR,
    'jsx-a11y/mouse-events-have-key-events': ERROR,
    'jsx-a11y/no-access-key': ERROR,
    'jsx-a11y/no-distracting-elements': ERROR,
    'jsx-a11y/no-interactive-element-to-noninteractive-role': ERROR,
    'jsx-a11y/no-noninteractive-element-interactions': [
      WARN,
      {
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp'
        ]
      }
    ],
    'jsx-a11y/no-noninteractive-element-to-interactive-role': [
      ERROR,
      {
        ul: [
          'listbox',
          'menu',
          'menubar',
          'radiogroup',
          'tablist',
          'tree',
          'treegrid'
        ],
        ol: [
          'listbox',
          'menu',
          'menubar',
          'radiogroup',
          'tablist',
          'tree',
          'treegrid'
        ],
        li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
        table: ['grid'],
        td: ['gridcell', 'columnheader', 'rowheader'],
        th: ['columnheader', 'rowheader']
      }
    ],
    'jsx-a11y/no-noninteractive-tabindex': [
      ERROR,
      {
        tags: [],
        roles: ['alertdialog', 'dialog', 'tabpanel']
      }
    ],
    'jsx-a11y/no-redundant-roles': ERROR,
    'jsx-a11y/no-static-element-interactions': [
      ERROR,
      {
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp'
        ]
      }
    ],
    'jsx-a11y/role-has-required-aria-props': ERROR,
    'jsx-a11y/role-supports-aria-props': ERROR,
    'jsx-a11y/scope': ERROR,
    'jsx-a11y/tabindex-no-positive': ERROR
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}

module.exports = reactConfig
