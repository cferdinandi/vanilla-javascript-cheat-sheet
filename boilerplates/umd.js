/*!
 * Universal Module Definition (UMD) Boilerplate
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 */
 (function (root, factory) {
 	if ( typeof define === 'function' && define.amd ) {
 		define([], function () {
 			return factory(root);
 		});
 	} else if ( typeof exports === 'object' ) {
 		module.exports = factory(root);
 	} else {
 		root.myPlugin = factory(root);
 	}
 })(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this, function (window) {

	'use strict';

	//
	// Variables
	//

	var publicAPIs = {};


	//
	// Methods
	//

	/**
	 * A private method
	 */
	var somePrivateMethod = function () {
		// Code goes here...
	};

	/**
	 * A public method
	 */
	publicAPIs.doSomething = function () {
		somePrivateMethod();
		// Code goes here...
	};

	/**
	 * Another public method
	 */
	publicAPIs.init = function (options) {
		// Code goes here...

	};


	//
	// Return the Public APIs
	//

	return publicAPIs;

});
