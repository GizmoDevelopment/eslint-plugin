# Installation

```
npm i -D @gizmo-dev/eslint-plugin
```
And in your ESLint config file, import the module:
```js
import { configs } from "@gizmo-dev/eslint-plugin";
```


# Importing specific configs

### JavaScript
```js
export default [
	...configs.js,
	// The rest of your config
];
```

### TypeScript
```js
export default [
	...configs.ts,
	// The rest of your config
];
```

### Vue 3
```js
export default [
	...configs.vue,
	// The rest of your config
];
```
