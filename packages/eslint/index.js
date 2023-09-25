/* eslint-env node */
module.exports = {
	root: true,
	plugins: ['@typescript-eslint', 'import'],
	extends: [
		// eslintの推奨設定
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		// prettier
		'prettier'
	],
	parser: '@typescript-eslint/parser',
	// 除外ファイル
	ignorePatterns: [
		'**/dist/*',
		'**/settings.json',
		'**/vite-env.d.ts',
		'**/.eslintrc.cjs',
		'**/vite.config.ts',
		'**/*.hbs'
	],
	rules: {
		'import/no-unused-modules': 'off',
		// import時のルール無視 path-alias設定してるのでこれ
		'import/extensions': 'off',
		// improt{}内並び替え
		'sort-imports': [
      'error',
      {
        'allowSeparatedGroups': true,
        'ignoreCase': true,
        'ignoreDeclarationSort': true,
        'ignoreMemberSort': false,
        'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single']
      }
    ],
		// import並び替え
		'import/order': [
			'warn',
			{
				groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'object',
          'type',
          'index'
        ],
				pathGroups: [
					{
            'pattern': '@monorepo/**',
            'group': 'internal',
            'position': 'before'
          },
					{
            'pattern': '@apps/**',
            'group': 'internal',
            'position': 'before'
          },
					{
            'pattern': '@/**',
            'group': 'internal',
            'position': 'before'
          },
				],
				pathGroupsExcludedImportTypes: ['builtin'],
				alphabetize: {
          order: 'asc',
        },
				'newlines-between': 'always',
			}
		],
		'import/first': 'error',
	},
	settings: {
    'import/resolver': {
			typescript: {},
		}
  }
};