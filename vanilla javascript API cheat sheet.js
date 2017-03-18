/**
 * Vanilla JavaScript API Cheat Sheet
 * Native JavaScript equivalents of common jQuery methods. Unless otherwise noted, these provide support for IE9 and above. Code documented using the JSDoc format. For ease of use, sections are prefixed with `@section`.
 *
 * (c) 2017 Chris Ferdinandi and Go Make Things, LLC
 * https://ditchingjquery.com
 * MIT License
 */


/**
 * Feature Test
 * Test for browser support for modern JavaScript features
 */
var supports = 'querySelector' in document && 'addEventListener' in window;
if ( supports ) {
	// run your code
}



/**
 * @section Selectors
 * Get DOM elements. Also supported in IE8, but only for CSS 2.1 selectors.
 */

// Get the first matching element
var firstClass = document.querySelector( '.some-class' );
var firstId = document.querySelector( '#some-id' );
var firstData = document.querySelector( '[data-example]' );

// Get all matching elements
var allClasses = document.querySelectorAll( '.some-class' );
var allData = document.querySelectorAll( '[data-example]' );



/**
 * @section Looping
 * Iterate over arrays, objects, and node lists. Supported all the way back to IE6.
 * Note: Todd Motto has created a simple helper method that’s useful if you frequently loop over objects.
 * https://github.com/toddmotto/foreach
 */

// Arrays and node lists
var elems = document.querySelectorAll( '.some-class' );
for ( var i = 0, len = elems.length; i < len; i++ ) {
	console.log(i); // index
	console.log(elems[i]); // object
}

// Objects
var obj = {
	apple: 'yum',
	pie: 3.214,
	applePie: true
};
for ( var prop in obj ) {
	if ( Object.prototype.hasOwnProperty.call( obj, prop ) ) {
		console.log( prop ); // key
		console.log( obj[prop] ); // value
	}
}



/**
 * @section String Transforms
 * Manipulate, transform, and convert strings.
 */

// Remove whitespace
var text = '  This sentence has some whitespace at the beginning and end of it.  ';
var trimmed = text.trim();

// Convert to lowercase
var text = 'This sentence has some MIXED CASE LeTTeRs in it.';
var lower = text.toLowerCase();

// Convert to uppercase
var text = 'This sentence has some MIXED CASE LeTTeRs in it.';
var upper = text.toUpperCase();

// Convert a string to an integer
var text = '42px';
var integer = parseInt( text, 10 );

// Replace text
var text = 'I love Cape Cod potato chips!';
var lays = text.replace( 'Cape Cod', 'Lays' );
var soda = text.replace( 'Cape Cod potato chips', 'soda' );
var extend = text.replace( 'Cape Cod', 'Cape Cod salt and vinegar' );

// Get a sub-section of a string
var text = 'Cape Cod potato chips';
var startAtFive = text.slice( 5 );
var startAndEnd = text.slice( 5, 8 );
var sliceFromTheEnd = text.slice( 0, -6 );

// Convert a string into an array
var text = 'Soda, turkey sandwiches, potato chips, chocolate chip cookies';
var menu = text.split( ', ' );
var limitedMenu = text.split( ', ', 2 );



/**
 * @section Class manipulation
 * Add, remove, and check for classes. The classList API support starts with IE10, but a polyfill provides support back to IE8.
 * https://github.com/eligrey/classList.js/
 */

var elem = document.querySelector( '#some-element' );

elem.classList.add( 'some-class' ); // Add class
elem.classList.remove( 'some-other-class' ); // Remove class
elem.classList.toggle( 'some-other-class' ); // Add or remove class

// Check for class
if ( elem.classList.contains( 'some-third-class' ) ) {
	console.log( 'yep!' );
}



/**
 * @section Manipulate styles
 * Get and set inline styles. This is supported all the way back to IE6.
 *
 * Use the pattern elem.style.{Style Name}.
 * There are a TON of these. Not sure what the right property name is? I Google these all the time!
 */

var elem = document.querySelector( '#some-element' );

var color = elem.style.color; // Get a CSS attribute
elem.style.color = 'rebeccapurple'; // Set a CSS attribute
var height = elem.style.minHeight; // Get a CSS attribute
elem.style.minHeight = '200px'; // Set a CSS attribute



/**
 * @section Manipulate attributes
 * Add, remove, and check for attributes.
 * You can use getAttribute, setAttribute, and hasAttribute to get and set all sorts of attributes—not just data attributes. However, there’s usually an API you can call directly on the element, too.
 */

var elem = document.querySelector( '#some-element' );

elem.getAttribute( 'data-example' ); // Get data attribute
elem.setAttribute( 'data-example', 'Hello world' ); // Set data attribute

// Check data attribute
if ( elem.hasAttribute( 'data-example' ) ) {
	console.log( 'yep!' );
}

// Set an ID
elem.setAttribute( 'id', 'new-id' );
elem.id = 'new-id';

// Set width
elem.setAttribute( 'width', '200px' );
elem.width = '200px';

// Get title
var title = elem.getAttribute( 'title' );
var titleToo = elem.title;



/**
 * @section Event listeners
 * Listen for clicks, hovers, and more.
 * https://developer.mozilla.org/en-US/docs/Web/Events
 */

var elem = document.querySelector( '.some-class' );

elem.addEventListener( 'click', function( event ) {
	// Do stuff
}, false);


// Unlike jQuery, each event requires its own listener, but you can assign a function to a variable to keep your code more DRY.

var elem = document.querySelector( '.some-class' );

var someFunction = function ( event ) {
	// Do stuff
};

elem.addEventListener( 'click', someFunction, false );
elem.addEventListener( 'mouseover', someFunction, false );


// And if you need to pass multiple variables into a function assigned to a variable, use the .bind() API. The first variable is the one assigned to this, and event is automatically passed in as the last variable. Note: .bind() was a late addition to ECMAScript 5, and some otherwise compliant browsers don’t support it. You should include the polyfill if you use it.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind#Polyfill

var elem = document.querySelector( '.some-class' );

var someFunction = function ( var1, var2, var3, event ) {
	// Do stuff
};

elem.addEventListener('click', someFunction.bind( null, var1, var2, var3 ), false);
elem.addEventListener('mouseover', someFunction.bind( null, var1, var2, var3 ), false);


// With named functions, you can also remove event listeners.
elem.removeEventListener( 'click', someFunction, false );
elem.removeEventListener( 'mouseover', someFunction, false );


// If you need to apply the same event listener on multiple elements, you can loop through each element and add a listener. A better and more performant approach, though, is to listen for events on the entire document and filter just the elements you need.

// Function to filter what's clicked and run your functions
var eventHandler = function ( event ) {

	// Get the clicked element
	var toggle = event.target;

	// If clicked element is the one you're looking for, run your methods
	if ( toggle.hasAttribute( 'data-example' ) || toggle.classList.contains( 'sample-class' ) ) {
		event.preventDefault(); // Prevent default click event
		someMethod( the, arguments, to, pass, into, method );
	}

};

// Listen for all click events on the document
document.addEventListener( 'click', eventHandler, false );



/**
 * IIFE: Immediately Invoked Function Expression
 * This keeps all of our variables and functions out of the global scope, avoiding conflicts
 */
;(function (window, document, undefined) {

	'use strict';

	// Code goes here...

})(window, document);



/**
 * @section Waiting until the DOM is ready
 * Run JS methods after the DOM is ready. While modern browsers support the `DOMContentReady` event listener, code won’t execute if it’s called after the DOM is loaded (the event it’s listening for has already happened). The `ready()` method provided below executes your scripts immediately if the DOM is ready, and waits until it is if it’s not. If your callback is not running, try changing `complete` to `interactive`.
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState
 */

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

ready(function() {
	// Do stuff...
});



/**
 * @section Manipulate height
 * Get and set height. It’s a lot trickier in native JS than it should be, because there are multiple APIs for getting height, and they all return slightly different measurements. The `getHeight()` method provided below returns the largest measurement. These are supported back to IE6.
 */

/**
 * Get the height of an element
 * @param  {Node}   elem The element
 * @return {Number}      The height
 */
var getHeight = function ( elem ) {
	return Math.max( elem.scrollHeight, elem.offsetHeight, elem.clientHeight );
};

var elem = document.querySelector( '#some-element' );
var height = getHeight( elem ); // Get height
elem.style.height = '200px'; // Set height



/**
 * @section Working with forms
 * Get field types, input content and states. These are supported back to IE6.
 */

var form = document.querySelector( '#some-form' );
var input = document.querySelector( '#some-input' );

var forms = document.forms; // Get all forms on a page
var formElems = form.elements; // Get all form elements
var inputType = input.type.toLowerCase(); // Get input type and convert to lowercase (radio, checkbox, text, etc.)
var inputValue = input.value; // Get input value
var inputName = input.name; // Get input name
var isChecked = input.checked; // Get the checked status of a checkbox or radio button
var isDisabled = input.disabled; // Get input disabled status



/**
 * @section HTML content
 * Get and set HTML content.
 */

var elem = document.querySelector( '#some-element' );
var html = elem.innerHTML; // Get HTML
elem.innerHTML = 'Hello world!'; // Set HTML



/**
 * @section Extend
 * Merge two or more objects together. The jQuery `$.extend()` API merges the content of subsequent objects into the first one, overriding it’s original values. The method provided below returns a new object instead, preserving all of the original objects and their properties. Supported back to IE6.
 */

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
};

// Create a new object by combining two or more objects
var newObjectShallow = extend( object1, object2, object3 );
var newObjectDeep = extend( true, object1, object2, object3 );



/**
 * @section Is an element in the viewport?
 * Determine if an element is the viewport or not. Supported back to IE6.
 */

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

var elem = document.querySelector( '#some-element' );
isInViewport( elem ); // Boolean: returns true/false



/**
 * @section Get distances to the top of the document
 * Get your current position from the top of the page, or that of an element.
 */

// Get current location's distance from the top of the page
var position = window.pageYOffset;

/**
 * Get an element's distance from the top of the page
 * @param  {Node}   elem The element
 * @return {Number}      Distance from the top of the page
 */
var getElemDistance = function ( elem ) {
	var location = 0;
	if ( elem.offsetParent ) {
		do {
			location += elem.offsetTop;
			elem = elem.offsetParent;
		} while ( elem );
	}
	return location >= 0 ? location : 0;
};
var elem = document.querySelector( '#some-element' );
var location = getElemDistance( elem );



/**
 * @section Get document height
 * Get the height of the document element. Supported back to IE6.
 */

/**
 * Get the height of the `document` element
 * @return {Number} The height
 */
var getDocumentHeight = function () {
	return Math.max(
		document.body.scrollHeight,
		document.documentElement.scrollHeight,
		document.body.offsetHeight,
		document.documentElement.offsetHeight,
		document.body.clientHeight,
		document.documentElement.clientHeight
	);
};



/**
 * @section Climb up the DOM
 */

// Get the parent of an element. Supported back to IE6.
var elem = document.querySelector( '#some-element' );
var parent = elem.parentNode;


// Get closest DOM element up the tree that contains any valid CSS selector. Includes the element itself.

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

var elem = document.querySelector( '#some-element' );
var closest = getClosest( elem, '.some-class' );
var closestLink = getClosest( elem, 'a' );
var closestExcludingElement = getClosest( elem.parentNode, '.some-class' );


// Get all parent elements up the DOM tree, optionally filtering by any valid CSS selector. Includes the element itself.

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

var elem = document.querySelector( '#some-element' );
var parents = getParents( elem, '.some-class' );
var allParents = getParents( elem.parentNode );


// Get all parent elements up the DOM tree until a matching parent is found, optionally filtering by any valid CSS selector. Includes the element itself.

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

// Examples
var elem = document.querySelector( '#some-element' );
var parentsUntil = getParentsUntil( elem, '.some-class' );
var parentsUntilByFilter = getParentsUntil( elem, '.some-class', '[data-something]' );
var allParentsUntil = getParentsUntil( elem );
var allParentsExcludingElem = getParentsUntil( elem.parentNode );



/**
 * @section Climb down the DOM
 */

// Get all child nodes of an element. Supported back to IE6.
var elem = document.querySelector( '#some-element' );
var all = elem.childNodes;

// Get the first child node of an element. Supported back to IE6.
var elem = document.querySelector( '#some-element' );
var first = elem.firstChild;

//Get the first element that matches a class, ID, or data attribute.
var elem = document.querySelector( '#some-element' );
var firstMatch = elem.querySelector( '.sample-class' );

//Get all elements that match a class, ID, or data attribute.
var elem = document.querySelector( '#some-element' );
var allMatches = elem.querySelectorAll( '.sample-class' );



/**
 * @section Get sibling elements
 * Get all siblings of an element. Supported back to IE6.
 */

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

var elem = document.querySelector( '#some-element' );
var siblings = getSiblings( elem );



/**
 * @section Get a querystring
 * Get a querystring from a URL. Supported back to at least IE6.
 */

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

// http://example.com&this=chicken&that=sandwich
var thisOne = getQueryString( 'this' ); // returns 'chicken'
var thatOne = getQueryString( 'that' ); // returns 'sandwich'
var anotherOne = getQueryString( 'another' ); // returns null
var yetAnotherOne = getQueryString( 'example', 'http://another-example.com&example=something' ); // returns 'something'



/**
 * @section Get HTML from another page
 * Get the contents of another HTML document, or from a specific element in another document. Only works for documents on the same domain. Supported back to IE8 and above.
 */

/**
 * Get HTML from another URL
 * @param  {String}   url     The URL
 * @param  {Function} success Callback on success
 * @param  {Function} error   Callback on failure
 */
var getURL = function ( url, success, error ) {

	// Feature detection
	if ( !window.XMLHttpRequest ) return;

	// Create new request
	var request = new XMLHttpRequest();

	// Setup callbacks
	request.onreadystatechange = function () {

		// If the request is complete
		if ( request.readyState === 4 ) {

			// If the request failed
			if ( request.status !== 200 ) {
				if ( error && typeof error === 'function' ) {
					error( request.responseText, request );
				}
				return;
			}

			// If the request succeeded
			if ( success && typeof success === 'function' ) {
				success( request.responseText, request );
			}
		}

	};

	// Get the HTML
	request.open( 'GET', url );
	request.send();

};

// Example 1: Generic Example
getURL(
	'/about',
	function (data) {
		// On success...
		var div = document.createElement( 'div' );

	},
	function (data) {
		// On failure...
	}
);

// Example 2: Find a specific element in the HTML and inject it into the current page
getURL(
	'/about',
	function (data) {

		// Create a div and inject the HTML into it
		var div = document.createElement( 'div' );
		div.innerHTML = data;

		// Find the element you're looking for in the div
		var elem = div.querySelector( '#some-element' );
		var location = document.querySelector( '#another-element' );

		// Quit if the element or the place where you want to inject it don't exist
		if ( !elem || !location ) return;

		// Inject the element into the DOM
		location.innerHTML = elem.innerHTML;

	}
);



/**
 * @section Get JSON data
 * Get JSON data from another server. Supported back to IE6.
 */

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

// Example
var logAPI = function ( data ) {
	console.log( data );
};
getJSONP( 'http://api.petfinder.com/shelter.getPets?format=json&key=12345&shelter=AA11', 'logAPI' );