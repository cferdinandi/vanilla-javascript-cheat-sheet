/*!
 * Get an element's distance from the top of the Document.
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node} elem The element
 * @return {Number}    Distance from the top in pixels
 */
var getOffsetTop = function (elem) {
	var location = 0;
	if (elem.offsetParent) {
		do {
			location += elem.offsetTop;
			elem = elem.offsetParent;
		} while (elem);
	}
	return location >= 0 ? location : 0;
};
