# deli-version-webpack-plugin

> 自动给得力e+应用增加版本文件


## Install

```
$ npm install deli-version-webpack-plugin -D
```


## Usage

```js
const DeliVersionPlugin = require('deli-version-webpack-plugin');

module.exports = {
	plugins: [
		new DeliVersionPlugin({
			name: 'version.txt',
			content: '0.0.1'
		})
	]
};
```


## API

### DeliVersionPlugin(options)

#### options.name

Type: `string`

Relative file path for the asset.

#### options.content

Type: `string`

Asset content.

