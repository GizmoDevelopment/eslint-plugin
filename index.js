// Rules
const javascript = require("./rules/javascript");
const typescript = require("./rules/typescript");
const vue = require("./rules/vue");

module.exports = {
	configs: {
		javascript,
		typescript,
		vue
	}
};