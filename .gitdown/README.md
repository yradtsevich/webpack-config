{"gitdown": "badge", "name": "npm-version"}
{"gitdown": "badge", "name": "travis"}
{"gitdown": "badge", "name": "appveyor"}
{"gitdown": "badge", "name": "codeclimate-gpa"}
{"gitdown": "badge", "name": "codeclimate-coverage"}
{"gitdown": "badge", "name": "david"}
{"gitdown": "badge", "name": "david-dev"}

# {"gitdown": "gitinfo", "name": "name"}
> Helps to load, extend and merge webpack configs

## Features

- [x] Supports environment variables under `#extend()`, `#merge()`, `#defaults()` methods
- [x] Supports `process.env.*` in addition to environment variables
- [x] Supports shareable configs via `node`-modules

## Changelog

Details changes for each release are documented in the [release notes]({"gitdown": "gitinfo", "name": "url"}/releases) and also in the [wiki page]({"gitdown": "gitinfo", "name": "url"}/wiki/Changelog).

## Shareable Configs

You can publish your configs to `npm` using `webpack-config-` prefix for package name.

When you call `#extend()` method you may omit that prefix:

```javascript
{"gitdown": "include", "file": "webpack.npm.config.js"}
```

Also I would recommend to add `webpack` and `webpack-config` keywords so other users can easily find your module.

## Samples

`./webpack.config.js`

```javascript
{"gitdown": "include", "file": "webpack.config.js"}
```

`./conf/webpack.base.config.js`

```javascript
{"gitdown": "include", "file": "conf/webpack.base.config.js"}
```

`./conf/webpack.development.config.js`

```javascript
{"gitdown": "include", "file": "conf/webpack.development.config.js"}
```

`./conf/webpack.production.config.js`

```javascript
{"gitdown": "include", "file": "conf/webpack.production.config.js"}
```
