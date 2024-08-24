// Modules
import globals from "globals";

// Local presets
import jsRules from "./rules/javascript.js";

export default [
	...jsRules,
	{
		files: [ "**/*.js" ],
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: "module",
			globals: {
				...globals.node
			}
		},
	}
];
