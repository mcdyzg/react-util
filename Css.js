'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (dom, style, attr) {
	if (dom) {
		if (attr) {
			if (typeof style === 'string') {
				dom.style[style] = attr;
			}
		} else if ((typeof style === 'undefined' ? 'undefined' : _typeof(style)) === 'object') {
			for (var i in style) {
				dom.style[i] = style[i];
			}
		} else if (typeof style === 'string') {
			var value;
			if (typeof window.getComputedStyle != 'undefined') {
				//W3C
				// return this.elements[i].style[attr];//只能获取行内样式，不能获取外联样式，需要用计算后的样式来获取
				value = window.getComputedStyle(dom, null)[style];
			} else if (typeof dom.currentStyle != 'undefined') {
				//IE
				value = dom.currentStyle[style];
			}
			return value;
		}
	}
};