module.exports = {
    root: true,
    ignorePatterns: ['**/node_modules/**', '**/dist/**', 'webpack.config.js'],
    parser: '@typescript-eslint/parser',
    env: {
        es6: true,
        browser: true,
    },
    plugins: ['@typescript-eslint', 'react', 'react-hooks'],
    rules: {
        'max-len': [
            'error',
            {
                code: 120,
                ignoreStrings: true,
                ignoreUrls: true,
                ignoreRegExpLiterals: true,
            },
        ],
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parserOptions: {
                project: ['./tsconfig.json'],
            },
        },
    ],
};
