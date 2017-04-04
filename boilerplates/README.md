# How to use the boilerplates

## IIFE (Immediately Invoked Function Expression)

An Immediately Invoked Function Expression (or IIFE) is used when you want your code to run immediately, but want to keep all of your variables and functions out of the global scope to avoiding conflicts.

```js
;(function (window, document, undefined) {

    'use strict';

    // Code goes here and runs as soon as the script loads

})(window, document);
```


## Revealing Module Pattern

A revealing module pattern allows you to keep most of your variables and functions out of the global scope, but make some of them publicly available.

Change `myPlugin` to whatever namespace you’d like to use for your plugin.

```js
// Examples
myPlugin.doSomething();
myPlugin.init();

// Example with options
myPlugin.init({
    mayo: true,
    bread: 'rye',
});
```


## UMD (Universal Module Definition)

If you want your plugin to work with RequireJS, Node, or Browserify, you should use a Universal Module Definition (UMD) pattern.

This wrapper for your plugin provides support for AMD and CommonJS modules, as well as global variables (like you would use with a revealing module pattern).

Change `myPlugin` to whatever namespace you’d like to use for your plugin.

***Note:*** *When using this pattern, use `window` becomes `root` in your code. For ease, I've created a `window` variable that maps to the `root` element.*

```js
// Examples
myPlugin.doSomething();
myPlugin.init();

// Example with options
myPlugin.init({
    mayo: true,
    bread: 'rye',
});
```