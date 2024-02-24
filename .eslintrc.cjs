/* eslint-disable */

module.exports = {
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "plugins": [
        "@typescript-eslint",
        "react"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
        // "airbnb"
    ],
    "env": {
        "browser": true,
        "es2021": true
    },
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "no-constant-condition": "error",
        "import/prefer-default-export": "off"
    }
}
