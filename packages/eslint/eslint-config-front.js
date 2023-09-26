/* eslint-env node */
module.exports = {
  env: {
    browser: true
  },
	extends: [
		'plugin:react/recommended',
		// typescript
		'airbnb-typescript',
		// react-hooks
		'airbnb/hooks'
	],
  plugins: ['react-refresh'],
	rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-refresh/only-export-components': 'off',
    'react/function-component-definition': [2, {
      namedComponents: 'arrow-function'
    }],
    'no-restricted-imports': ['error', {
      patterns: [
        '@/features/*/*',
        '!@/features/**/routes'
      ]
    }],
    '@typescript-eslint/no-misused-promises': [2, {
      'checksVoidReturn': {
        'attributes': false
      }
    }]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};