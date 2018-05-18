/*!
 * Revealing Module Pattern Boilerplate
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 */
var myPlugin = (function () {

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

})();
