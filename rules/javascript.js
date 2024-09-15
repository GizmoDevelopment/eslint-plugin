// Plugins
const stylistic = require("@stylistic/eslint-plugin");

// Rules
const js = require("@eslint/js");

module.exports = [
	js.configs.recommended,
	{
		plugins: {
			"@stylistic": stylistic
		},
		rules: {

			// Disabled rules
			"@stylistic/eol-last": "off",
			"@stylistic/no-tabs": "off",
			"@stylistic/one-var": "off",

			// ESlint rules
			"no-redeclare": [ "error" ],
			"prefer-const": "error",
			"eqeqeq": [ "error", "always" ],
			"template-curly-spacing": [ "error", "never" ],
			"array-bracket-spacing": [ "error", "always", {
				"objectsInArrays": false,
				"arraysInArrays": false
			}],

			// Stylistic rules
			"@stylistic/quotes": [ "error" ],
			"@stylistic/semi": [ "error" ],
			"@stylistic/indent": [ "error", "tab", {
				"SwitchCase": 1,
				"offsetTernaryExpressions": true
			}],
			"@stylistic/space-infix-ops": [ "error" ],
			"@stylistic/brace-style": [ 2, "1tbs", {
				"allowSingleLine": true
			}],
			"@stylistic/space-before-function-paren": [ "error" ],
			"@stylistic/padded-blocks": "off",
			"@stylistic/comma-spacing": [ "error", {
				"before": false,
				"after": true
			}],
			"@stylistic/function-call-spacing": [ "error", "never" ],
			"@stylistic/object-curly-spacing": [ "error", "always" ],
			
		}
	}
];
