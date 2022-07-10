module.exports = {
	"extends": [
		"eslint:recommended"
	],
	"rules": {

		// Disabled rules
		"eol-last": "off",
		"no-tabs": "off",
		"one-var": "off",

		// Enforced rules
		"quotes": [ "error" ],
		"semi": [ "error" ],
		"indent": [ "error", "tab", {
			"SwitchCase": 1,
			"offsetTernaryExpressions": true
		}],
		"space-infix-ops": [ "error" ],
		"camelcase": [ "error", {
			"properties": "always"
		}],
		"brace-style": [ 2, "1tbs", {
			"allowSingleLine": true
		}],
		"prefer-const": "error",
		"eqeqeq": [ "error", "always" ],
		"template-curly-spacing": [ "error", "never" ],
		"space-before-function-paren": [ "error" ],
		"padded-blocks": "off",
		"array-bracket-spacing": [ "error", "always", {
			"objectsInArrays": false,
			"arraysInArrays": false
		}],

	}
};