'use strict';

var hasClass = require('./hasClass');

module.exports = function (element, cls) {
    if (element.classList) {
        element.classList.add(cls);
    } else {
        if (!hasClass(element, cls)) {
            element.className += ' ' + cls;
        }
    }
};