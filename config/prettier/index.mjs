/** @typedef {import('prettier').Config} PrettierConfig */

const config = {
    plugins: ['prettier-plugin-tailwindcs'],
    printWidth: 80,
    tabWidth: 2,
    usetabs: false,
    semi: false,
    singleQuote: true,
    quotePorps: 'as-needed',
    jsxSingleQUote: false,
    trailingComma: 'es5',
    bracketSpacing: true,
    arrowParens: 'always',
    endOfLine: 'auto',
    bracketSameLine: false,
}

export default config