/**
 * Add an event listener
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {String}   event    The event type
 * @param  {Node}     elem     The element to attach the event to (optional, defaults to window)
 * @param  {Function} callback The callback to run on the event
 * @param  {Boolean}  capture  If true, forces bubbling on non-bubbling events
 */
var on = function (event, elem, callback, capture) {
	if (typeof (elem) === 'function') {
		capture = callback;
		callback = elem;
		elem = window;
	}
	capture = capture ? true : false;
	elem.addEventListener(event, callback, capture);
};
