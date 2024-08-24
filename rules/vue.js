// Rules
const vue = require("eslint-plugin-vue");

module.exports = [
	...vue.configs["flat/essential"],
	{
		rules: {
			"vue/script-indent": [ "error", "tab", {
				"baseIndent": 1,
				"switchCase": 1
			}],
			"vue/html-indent": [ "error", "tab" ],
			"vue/singleline-html-element-content-newline": "off",
			"vue/max-attributes-per-line": [ "error", {
				"singleline": 3
			}],
			"vue/script-setup-uses-vars": "off",
			"vue/eqeqeq": [ "error", "always" ],
			"vue/component-api-style": [ "error", [ "options", "composition" ]],
			"vue/no-useless-mustaches": [ "error" ],
			"vue/no-useless-v-bind": [ "error" ],
			"vue/no-lone-template": [ "error" ],
			"vue/no-use-computed-property-like-method": [ "error" ],
			"vue/multi-word-component-names": "off",
			"vue/no-child-content": [ "error" ],
			"vue/no-expose-after-await": [ "error" ],
			"vue/component-options-name-casing": [ "error", "PascalCase" ]
		},
	},
	{
		files: [ "*.vue" ],
		rules: {
			"indent": "off",
			"@typescript-eslint/indent": "off"
		}
	}
];
