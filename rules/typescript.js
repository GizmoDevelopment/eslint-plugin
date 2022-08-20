// Rules
const javascript = require("./javascript");

module.exports = {
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
	],
	"plugins": [
		"@typescript-eslint"
	],
	"rules": {

		// Since ESLint is a bitch with relative paths
		...javascript.rules,

		// Disabled rules
		"indent": "off",
		"semi": "off",
		"quotes": "off",
		"space-infix-ops": "off",
		"camelcase": "off",
		"space-before-function-paren": "off",
		"padded-blocks": "off",
		"no-unused-vars": "off",
		"no-redeclare": "off",

		// TSLint replacement rules
		"@typescript-eslint/indent": [ "error", "tab", {
			"SwitchCase": 1,
			"offsetTernaryExpressions": true
		}],
		"@typescript-eslint/semi": [ "error" ],
		"@typescript-eslint/quotes": [ "error" ],
		"@typescript-eslint/space-infix-ops": [ "error" ],
		"@typescript-eslint/space-before-function-paren": [ "error" ],
		"@typescript-eslint/no-redeclare": [ "error" ],

		// Enforced rules
		"@typescript-eslint/naming-convention": [ "error",
			{
				"selector": [ "variableLike", "function" ],
				"format": [ "camelCase", "UPPER_CASE" ],
				"leadingUnderscore": "allow"
			},
			{
				"selector": "memberLike",
				"modifiers": [ "private" ],
				"format": [ "camelCase" ],
				"leadingUnderscore": "require"
			},
			{
				"selector": "typeLike",
				"format": [ "PascalCase" ]
			}
		],
		"@typescript-eslint/member-delimiter-style": [ "error", {
			"multiline": {
				"delimiter": "semi"
			},
			"singleline": {
				"delimiter": "semi"
			}
		}],
		"@typescript-eslint/member-ordering": [ "error", {
			"classExpressions": {
				"order": "alphabetically"
			}
		}],
		"@typescript-eslint/no-unused-vars": [ "error" ],

		// Typing rules
		"@typescript-eslint/consistent-type-imports": [ "error" ],
		"@typescript-eslint/consistent-type-exports": [ "error" ],
		"@typescript-eslint/type-annotation-spacing": [ "error", {
			"overrides": {
				"colon": {
					"before": false,
					"after": true
				},
				"arrow": {
					"before": true,
					"after": true
				}
			}
		}],
		"@typescript-eslint/explicit-function-return-type": [ "error", {
			"allowExpressions": true
		}]

	}
};