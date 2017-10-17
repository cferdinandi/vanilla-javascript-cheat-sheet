/*!
 * Run event after DOM is ready
 * (c) 2017 Chris Ferdinandi and Go Make Things, MIT License, https://gomakethings.com
 * @param  {Function} fn Callback function
 */
var ready = function (fn) {

	// Sanity check
	if (typeof fn !== 'function') return;

	// If document is already loaded, run method
	if (document.readyState === 'interactive' || document.readyState === 'complete') {
		return fn();
	}

	// Otherwise, wait until document is loaded
	document.addEventListener('DOMContentLoaded', fn, false);

};
