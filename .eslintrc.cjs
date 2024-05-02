module.exports = {
    extends: [
        // By extending from a plugin config, we can get recommended rules without having to add them manually.
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:import/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:@typescript-eslint/recommended",
        "eslint-config-prettier",
        "plugin:react-hooks/recommended",
    ],
    settings: {
        react: {
            // Tells eslint-plugin-react to automatically detect the version of React to use.
            version: "detect",
        },
        // Tells eslint how to resolve imports
        "import/resolver": {
            node: {
                paths: ["src"],
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
    },
    rules: {
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
        "@typescript-eslint/no-empty-function": "off",
        "prefer-const": "warn",
        "react/display-name": "off",
        "@typescript-eslint/no-unused-vars": "warn",
    },
};
