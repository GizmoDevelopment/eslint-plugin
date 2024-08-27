// Modules
import globals from "globals";

// Local rules
import jsRules from "./rules/javascript.js";
import tsRules from "./rules/typescript.js";

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
	},
	{
		files: [ "**/*.d.ts" ],
		...tsRules
	}
];
