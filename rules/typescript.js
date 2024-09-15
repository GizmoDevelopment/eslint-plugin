// Plugins
const stylistic = require("@stylistic/eslint-plugin");

// Rules
const js = require("@eslint/js");
const ts = require("typescript-eslint");

// Local Rules
const jsLocal = require("./javascript.js");

module.exports = ts.config(
	js.configs.recommended,
	...ts.configs.recommended,
	{
		plugins: {
			"@stylistic": stylistic
		},
		rules: {

			// JS rules
			...jsLocal[jsLocal.length - 1].rules,

			// Disabled rules
			"no-unused-vars": "off",
			"no-redeclare": "off",

			// TSLint replacement rules
			"@typescript-eslint/no-redeclare": [ "error" ],
			"@typescript-eslint/no-unused-vars": [ "error" ],
	
			// Stylistic rules
			"@stylistic/member-delimiter-style": [ "error", {
				"multiline": {
					"delimiter": "semi"
				},
				"singleline": {
					"delimiter": "semi"
				}
			}],
			"@stylistic/type-annotation-spacing": [ "error", {
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
			"@typescript-eslint/member-ordering": [ "error", {
				"classExpressions": {
					"order": "alphabetically"
				}
			}],
			"@typescript-eslint/consistent-type-imports": [ "error" ],
			"@typescript-eslint/consistent-type-exports": [ "error" ],
			"@typescript-eslint/explicit-function-return-type": [ "error", {
				"allowExpressions": true
			}]

		}
	}
);
