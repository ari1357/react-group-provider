/* eslint-env node */
module.exports = {
	extends: [
    // front
    '@monorepo/custom/eslint-config-front.js',
    // base 
    '@monorepo/custom'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  },
};