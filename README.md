# The Vanilla JS Cheat Sheet

From "[The Vanilla JS Guidebook](https://gomakethings.com/vanilla-js-guidebook/)."

## Selectors

### querySelectorAll()

Get all matching elements.

```js
document.querySelectorAll( selector );
```

### querySelector()

Get the first matching selector

```js
document.querySelector( selector );
```

### getElem()

A helper function to avoid throwing errors if an element isn't found with `querySelector()`.

```js
var getElem = function ( selector ) {
	return document.querySelector( selector ) || document.createElement( '_' );
};
```

### matches()

Check if an element would be selected by a particular selector or set of selectors. Requires a [polyfill](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill).

```js
elem.matches( selector );
```


## Loops

### Arrays and Node Lists

Use `continue` to skip to the next item in the loop, and `break` to end the loop altogether.

```
for ( var i = 0; i < arr.length; i++ ) {
	console.log(i) // index
	console.log( arr[i] ) // value
}
```

### Objects

```js
for ( var key in obj ) {
	if ( Object.prototype.hasOwnProperty.call( obj, key ) ) {
		console.log( key ); // key
		console.log( obj[key] ); // value
	}
}
```

### forEach

If you work with loops a lot, [forEach() by Todd Motto](https://github.com/toddmotto/foreach) is a useful helper method.

```js
// Arrays
forEach(arr, function (item, index) {
	console.log( item ); // value
	console.log( index ); // index
});

// Objects
forEach(obj, function (item, key) {
	console.log( item ); // value
	console.log( key ); // key
});
```


## String Transforms

### trim()

Remove whitespace from a string.

```js
str.trim();
```

### toLowerCase()

Transform all text in a string to lowercase.

```js
str.toLowerCase();
```

### toUpperCase()

Transform all text in a string to uppercase.

```js
str.toUpperCase();
```

### parseInt()

Convert a string into an integer (a whole number). The second argument should (generally) always be `10`.

```js
parseInt( str, 10 );
```

### parseFloat()

Convert a string into a point number (a number with decimal points).

```js
parseFloat( str );
```

### replace()

Replace a portion of text in a string with something else.

```js
str.replace( searchForThis, replaceWithThis );
```

### slice()

Get a portion of a string starting (and optionally ending) at a particular character. The first argument is where to start. The second argument is where to end (and is optional). If either argument is a negative integer, it will start at the end of the string and work backwards.

```js
str.slice( int, int );
```

### split()

Convert a string into an array by splitting it after a specific character (or characters). The first argument, the `delimiter`, the character or characters to split by. As an optional second argument, you can stop splitting your string after a certain number of delimiter matches have been found.

```js
str.split( str, delimiter );
```


## Classes

### classList

Add, remove, toggle, and check for the presence of a class.

```js
// Add a class
elem.classList.add( str );

// Remove a class
elem.classList.remove( str );

// Toggle a class
// (Add the class if it's not already on the element, remove it if it is.)
elem.classList.toggle( str );

// Check if an element has a specfic class
if ( elem.classList.contains( str ) ) {
	// Do something...
}
```

### className

Get all classes on an element (as a string),  or set classes on an element.

```js
// Get all of the classes on an element
var elemClasses = elem.className;

// Add a class to an element
elem.className += ' some-class';

// Completely replace all classes on an element
elem.className = 'new-class';
```


## Styles

### Inline Styles

Add CSS properties inline on an element. A full list of properties is [available on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference).

```js
// Get a style
var bgColor = elem.style.backgroundColor;

// Set a style
elem.style.height = '42px';
```

### getComputedStyle()

Get the actual computed style of an element (accounts for browser defaults, external stylesheets, and inline styles). A full list of properties is [available on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference).

```js
var bgColor = window.getComputedStyle( elem ).backgroundColor;
```


## Attributes

### getAttribute(), setAttribute(), and hasAttribute()

Get, set, and check for the existance of attributes (including data attributes) on an element.

```js
// Get the value of an attribute
var someVar = elem.getAttribute( 'data-something' );

// Set an attribute value
elem.setAttribute( 'data-something', 'value' );

// Check if an element has an attribute
if ( elem.hasAttribute( 'data-something' ) ) {
	// do something...
}
```

### Attribute Properties

Get and set attributes directly on an element. A full list of available properties is [available on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes).

```js
// Get attributes
var id = elem.id;
var name = elem.name;
var tabindex = elem.tabindex;

// Set attributes
elem.id = 'new-id';
elem.title = 'A title';
elem.tabIndex = '-1';
```


## Event Listeners

Listen for events in the DOM.

```js
elem.addEventListener(eventType, function ( event ) {
	console.log( event ); // The event details
	console.log( event.target ); // The affected element
}, false);
```

### Event Bubbling

Listen for all events of a type and filter by a selector.

```js
// Listen for clicks on the entire window
window.addEventListener('click', function ( event ) {

	// If the clicked element has the `.some-selector` class, it's a match
	if ( event.target.classList.contains( 'some-selector' ) ) {
		// Do something...
	}

}, false);
```

### Multiple Listeners

To run the same task for several types of events, pass in an external function.

```js
// Setup our function to run on various events
var someFunction = function ( event ) {
	// Do something...
};

// Add our event listeners
window.addEventListener( 'click', someFunction, false );
window.addEventListener( 'scroll', someFunction, false );
```

### Event Debouncing

Limit how often your `scroll` and `resize` events run to avoid performance issues.

```js
// Setup a timer
var timeout;

// Listen for resize events
window.addEventListener('resize', function ( event ) {
	// If timer is null, reset it to 66ms and run your functions.
	// Otherwise, wait until timer is cleared
	if ( !timeout ) {
		timeout = setTimeout(function() {

			// Reset timeout
			timeout = null;

			// Run our resize functions here

		}, 66);
	}
}, false);
```

### Use Capture

Allow event bubbling on events (like `focus`) that don't natively support it by setting the last argument in `addEventListener` to `true`. (If an event type already supports bubbling, keep this argument as the default `false`.)

```js
document.addEventListener('focus', function (event) {
	// Run functions whenever an element in the document comes into focus
}, true);
```


## DOM Ready

Wait until the DOM is ready before running your code.

```js
/**
 * Run event after DOM is ready
  * @param  {Function} fn Callback function
 */
var ready = function ( fn ) {

	// Sanity check
	if ( typeof fn !== 'function' ) return;

	// If document is already loaded, run method
	if ( document.readyState === 'interactive' || document.readyState === 'complete' ) {
		return fn();
	}

	// Otherwise, wait until document is loaded
	document.addEventListener( 'DOMContentLoaded', fn, false );

};

// Usage
ready(function() {
	// Do stuff...
});
```


## HTML

Get and set HTML content.

```js
// Get HTML content
var html = elem.innerHTML;

// Set HTML content
elem.innerHTML = 'Some HTML';

// Add HTML to the end of an element's existing content
elem.innerHTML += ' More HTML';

// Add HTML to the beginning of an element's existing content
elem.innerHTML = 'Even more HTML ' + elem.innerHTML;
```


## Forms

Working with forms in JavaScript.

```js
// Get all forms on a page
var forms = document.forms;

// Get all elements in a form
var elements = form.elements;

// Get form field attributes
var type = input.type;
var name = checkbox.name;
var value = radio.value;

// Set form field attributes
input.type = 'email';
checkbox.name = 'thisForm';
textarea.value = 'Hello, world!';

// Boolean form input attributes
var isDisabled = input1.disabled;
input2.readOnly = false;
input2.required = true;
isChecked = checkbox.checked;
radio.checked = true;
```


## Traversing up the DOM

### parentNode

Get the parent of an element.

```js
var parent = elem.parentNode;
```

### getClosest()

Get the closest parent that matches a selector.

```js
/**
 * Get the closest matching element up the DOM tree.
 * @private
 * @param  {Element} elem     Starting element
 * @param  {String}  selector Selector to match against
 * @return {Boolean|Element}  Returns null if not match found
 */
var getClosest = function ( elem, selector ) {

	// Element.matches() polyfill
	if (!Element.prototype.matches) {
		Element.prototype.matches =
			Element.prototype.matchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector ||
			Element.prototype.oMatchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			function(s) {
				var matches = (this.document || this.ownerDocument).querySelectorAll(s),
					i = matches.length;
				while (--i >= 0 && matches.item(i) !== this) {}
				return i > -1;
			};
	}

	// Get closest match
	for ( ; elem && elem !== document; elem = elem.parentNode ) {
		if ( elem.matches( selector ) ) return elem;
	}

	return null;

};

// Usage
var closest = getClosest( elem, '.some-selector' );
```

### getParents()

Get all parent elements, optionally filtering against a selector.

```js
/**
 * Get all of an element's parent elements up the DOM tree
 * @param  {Node}   elem     The element
 * @param  {String} selector Selector to match against [optional]
 * @return {Array}           The parent elements
 */
var getParents = function ( elem, selector ) {

	// Element.matches() polyfill
	if (!Element.prototype.matches) {
		Element.prototype.matches =
			Element.prototype.matchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector ||
			Element.prototype.oMatchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			function(s) {
				var matches = (this.document || this.ownerDocument).querySelectorAll(s),
					i = matches.length;
				while (--i >= 0 && matches.item(i) !== this) {}
				return i > -1;
			};
	}

	// Setup parents array
	var parents = [];

	// Get matching parent elements
	for ( ; elem && elem !== document; elem = elem.parentNode ) {

		// Add matching parents to array
		if ( selector ) {
			if ( elem.matches( selector ) ) {
				parents.push( elem );
			}
		} else {
			parents.push( elem );
		}

	}

	return parents;

};

// Usage
var parents = getParents( elem.parentNode );
var parentsWithSelector = getParents( elem.parentNode, '.some-selector' );
```

### getParentsUntil()

Get all parents until a matching selector is found. Optionally filter by another selector.

```js
/**
 * Get all of an element's parent elements up the DOM tree until a matching parent is found
 * @param  {Node}   elem     The element
 * @param  {String} parent   The selector for the parent to stop at
 * @param  {String} selector The selector to filter against [optionals]
 * @return {Array}           The parent elements
 */
var getParentsUntil = function ( elem, parent, selector ) {

    // Element.matches() polyfill
    if (!Element.prototype.matches) {
        Element.prototype.matches =
            Element.prototype.matchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.oMatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            function(s) {
                var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                    i = matches.length;
                while (--i >= 0 && matches.item(i) !== this) {}
                return i > -1;
            };
    }

    // Setup parents array
    var parents = [];

    // Get matching parent elements
    for ( ; elem && elem !== document; elem = elem.parentNode ) {

        if ( parent ) {
            if ( elem.matches( parent ) ) break;
        }

        if ( selector ) {
            if ( elem.matches( selector ) ) {
                parents.push( elem );
            }
            break;
        }

        parents.push( elem );

    }

    return parents;

};

// Usage
var parentsUntil = getParentsUntil( elem, '.some-selector' );
var parentsUntilByFilter = getParentsUntil( elem, '.some-selector', '[data-some-other-selector]' );
```


## Traversing Down the DOM

### querySelector() and querySelectorAll()

Search within an element.

```js
// Find the first element inside another element that has the `.some-selector` class
var first = elem.querySelector( '.some-selector' );

// Get all elements inside another element that have the `.some-selector` class
var all = elem.querySelectorAll( '.some-selector' );
```

### children

Get all direct decendants of an element.

```js
var decendants = elem.children;
```


## Traversing Sideways in the DOM

Get all siblings of an element.

```js
/**
 * Get all siblings of an element
 * @param  {Node}  elem The element
 * @return {Array}      The siblings
 */
var getSiblings = function ( elem ) {
    var siblings = [];
    var sibling = elem.parentNode.firstChild;
    for ( ; sibling; sibling = sibling.nextSibling ) {
        if ( sibling.nodeType === 1 && sibling !== elem ) {
            siblings.push( sibling );
        }
    }
    return siblings;
};

// Usage
var siblings = getSiblings( elem );
```


## Merging Arrays and Objects

### Add items to an array

```js
var arr = ['turkey', 'tuna', 'blt'];
arr.push('chicken', 'pb&j');
```

### Merge two or more arrays together

```js
var arr1 = ['turkey', 'tuna', 'blt'];
var arr2 = ['chicken', 'pb&j'];
Array.prototype.push.apply(arr1, arr2);
```

### Add items to an object

Use either the dot notation or the square bracket notation.

```js
var obj = {
    sandwich: 'turkey',
    chips: 'cape cod',
    drink: 'soda'
}

// Add items to the object
obj.alcohol = false;
obj["dessert"] = 'cookies';
```

### Merge two or more objects together

```js
/**
 * Merge two or more objects. Returns a new object.
 * Set the first argument to `true` for a deep or recursive merge
 * @param {Boolean}  deep     If true, do a deep (or recursive) merge [optional]
 * @param {Object}   objects  The objects to merge together
 * @returns {Object}          Merged values of defaults and options
 */
var extend = function () {

    // Variables
    var extended = {};
    var deep = false;
    var i = 0;
    var length = arguments.length;

    // Check if a deep merge
    if ( Object.prototype.toString.call( arguments[0] ) === '[object Boolean]' ) {
        deep = arguments[0];
        i++;
    }

    // Merge the object into the extended object
    var merge = function ( obj ) {
        for ( var prop in obj ) {
            if ( Object.prototype.hasOwnProperty.call( obj, prop ) ) {
                // If deep merge and property is an object, merge properties
                if ( deep && Object.prototype.toString.call(obj[prop]) === '[object Object]' ) {
                    extended[prop] = extend( true, extended[prop], obj[prop] );
                } else {
                    extended[prop] = obj[prop];
                }
            }
        }
    };

    // Loop through each object and conduct a merge
    for ( ; i < length; i++ ) {
        var obj = arguments[i];
        merge(obj);
    }

    return extended;

};

// Example objects
var object1 = {
    apple: 0,
    banana: { weight: 52, price: 100 },
    cherry: 97
};
var object2 = {
    banana: { price: 200 },
    durian: 100
};
var object3 = {
    apple: 'yum',
    pie: 3.214,
    applePie: true
}

// Usage
var newObjectShallow = extend( object1, object2, object3 );
var newObjectDeep = extend( true, object1, object2, object3 );
```


## The Viewport

### Get Viewport Height

```js
var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
```

### Get Viewport Width

```js
var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
```

### Check if an element is in the viewport or not

```js
/**
 * Determine if an element is in the viewport
 * @param  {Node}    elem The element
 * @return {Boolean}      Returns true if element is in the viewport
 */
var isInViewport = function ( elem ) {
    var distance = elem.getBoundingClientRect();
    return (
        distance.top >= 0 &&
        distance.left >= 0 &&
        distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// Usage
var inViewport = isInViewport( elem ); // Boolean: returns true/false
```


## Distances

### Get the currently scrolled distance from the top of the page

```js
var distance = window.pageYOffset;
```

### Get an element's distance from the top of the page

```js
/**
 * Get an element's distance from the top of the Document.
 * @private
 * @param  {Node} elem The element
 * @return {Number}    Distance from the top in pixels
 */
var getOffsetTop = function ( elem ) {
	var location = 0;
	if (elem.offsetParent) {
		do {
			location += elem.offsetTop;
			elem = elem.offsetParent;
		} while (elem);
	}
	return location >= 0 ? location : 0;
};

// Usage
var distance = getOffsetTop( elem );
```


## Query Strings

Get the value of a query string key.

```js
/**
 * Get the value of a query string from a URL
 * @param  {String} field The field to get the value of
 * @param  {String} url   The URL to get the value from [optional]
 * @return {String}       The value
 */
var getQueryString = function ( field, url ) {
    var href = url ? url : window.location.href;
    var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
    var string = reg.exec(href);
    return string ? string[1] : null;
};

// Usage
// http://example.com?sandwich=turkey&snack=cookies
var sandwich = getQueryString( 'sandwich' ); // returns 'turkey'
var snack = getQueryString( 'snack' ); // returns 'cookies'
var dessert = getQueryString( 'dessert' ); // returns null
var drink = getQueryString( 'drink', 'http://another-example.com?drink=soda' ); // returns 'soda'
```


## Ajax/HTTP

### Standard Ajax/HTTP Requests

First include [Todd Motto's Atomic library](https://github.com/toddmotto/atomic)].

```js
// GET
atomic.get('https://jsonplaceholder.typicode.com/posts')
	.success(function (data, xhr) {
		// What do when the request is successful
		console.log(data);
		console.log(xhr);
	})
	.error(function () {
		// What do when the request fails
		console.log( 'The request failed!' );
	})
	.always(function (data, xhr) {
		// Code that should run regardless of the request status
	});

// POST
atomic.post('http://jsonplaceholder.typicode.com/posts', {
	title: 'foo',
	body: 'bar',
	userId: 1
})
	.success(function (data, xhr) {
		// What do when the request is successful
		console.log(data);
		console.log(xhr);
	})
	.error(function () {
		// What do when the request fails
		console.log( 'The request failed!' );
	})
	.always(function (data, xhr) {
		// Code that should run regardless of the request status
	});
```

### JSONP

Get around domain origin challenges when requesting JSON data.

```js
/**
 * Get JSONP data
 * @param  {String}   url      The JSON URL
 * @param  {Function} callback The function to run after JSONP data loaded
 */
var getJSONP = function ( url, callback ) {

	// Create script with url and callback (if specified)
	var ref = window.document.getElementsByTagName( 'script' )[ 0 ];
	var script = window.document.createElement( 'script' );
	script.src = url + (url.indexOf( '?' ) + 1 ? '&' : '?') + 'callback=' + callback;

	// Insert script tag into the DOM (append to <head>)
	ref.parentNode.insertBefore( script, ref );

	// After the script is loaded (and executed), remove it
	script.onload = function () {
		this.remove();
	};

};

// Usage
var logAPI = function ( data ) {
	console.log( data );
}

getJSONP( 'http://jsfiddle.net/echo/jsonp/?text=something&par1=another&par2=one-more', 'logAPI' );
```