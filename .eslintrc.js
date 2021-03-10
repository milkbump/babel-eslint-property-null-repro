module.exports = {
    parser: "@babel/eslint-parser",
    parserOptions: {
        requireConfigFile: false,
        sourceType: "module",
    },
    env: {
        es6: true,
        browser: true,
    },
    plugins: ["@babel"],
    extends: ["eslint:recommended"],
    rules: {
        // uncomment for error 1
        "template-curly-spacing": "error",

        // uncomment for error 2
        //"indent": ["error", 4]
    },
};
