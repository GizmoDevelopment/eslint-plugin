// Types
import type { Linter } from "eslint";

module.exports = {
	configs: {
		js: Readonly<Linter.RulesRecord[]>,
		ts: Readonly<Linter.RulesRecord[]>,
		vue: Readonly<Linter.RulesRecord[]>
	}
};
