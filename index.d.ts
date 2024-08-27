// Types
import type { Linter } from "eslint";

interface Configs {
	js: Readonly<Linter.RulesRecord[]>,
	ts: Readonly<Linter.RulesRecord[]>,
	vue: Readonly<Linter.RulesRecord[]>
}

export declare const configs: Configs;
