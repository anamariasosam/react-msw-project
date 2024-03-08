module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'prettier',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh'],
	rules: {
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'interface',
				format: ['PascalCase'],
			},
			{
				selector: 'typeLike',
				format: ['PascalCase'],
			},
			{
				selector: 'enum',
				format: ['PascalCase'],
				prefix: ['E'],
			},
			{
				selector: 'class',
				format: ['PascalCase'],
			},
			{
				selector: 'memberLike',
				modifiers: ['private'],
				format: ['camelCase'],
				leadingUnderscore: 'require',
			},
		],
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		'@typescript-eslint/no-unused-vars': 'error',
		'require-await': 'error',
	},
}
