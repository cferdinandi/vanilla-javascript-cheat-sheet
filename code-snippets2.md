# Code Snippets

Methods, browser APIs, and techniques for working with vanilla JavaScript. Unless otherwise noted, these work in all modern browers, and IE9+. This can be extended back further with a polyfill service like [polyfill.io](https://polyfill.io).

**Work in progress...**

## Selectors

### querySelectorAll()

Get all matching elements on a page. You can use any valid CSS selector.

```javascript
// Get all elements with the .bg-red class
var elemsRed = document.querySelectorAll('.bg-red');

// Get all elements with the [data-snack] attribute
var elemsSnacks = document.querySelectorAll('[data-snack]');
```

### querySelector()

Get the first matching element on a page.

```javascript
// The first div
var elem = document.querySelector('div');

// The first div with the .bg-red class
var elemRed = document.querySelector('.bg-red');

// The first div with a data attribute of snack equal to carrots
var elemCarrots = document.querySelector('[data-snack="carrots"]');
```

### getElementById()

Get an element by its ID.

```javascript
var elem = getElementById('some-selector');
```

**Works back to at least IE6.**

### getElementsByClassName()

Get all elements on a page that have a specific class or classes. Returns a live HTMLCollection of elements.

```javascript
// Get elements with a class
var elemsByClass = document.getElementsByClassName('some-class');

// Get elements that have multiple classes
var elemsWithMultipleClasses = document.getElementsByClassName('some-class another-class');
```

### getElementsByTagName()

Get all elements that have a specific tag name.

***Note:*** *This returns a live HTMLCollection of elements. If an element is added or removed from the DOM after you set your variable, the list is automatically updated to reflect the current DOM.*

```javascript
// Get all divs
var divs = document.getElementsByTagName('div');

// Get all links
var links = document.getElementsByTagName('a');
```
