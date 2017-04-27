"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var ExtendEvent = function ExtendEvent() {
    this._listener = {};
};

ExtendEvent.prototype = {
    constructor: undefined,
    addEvent: function addEvent(type, fn) {
        if (typeof type === "string" && typeof fn === "function") {
            if (typeof this._listener[type] === "undefined") {
                this._listener[type] = [fn];
            } else {
                this._listener[type].push(fn);
            }
        }
        return this;
    },
    addEvents: function addEvents(obj) {
        obj = (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" ? obj : {};
        var type;
        for (type in obj) {
            if (type && typeof obj[type] === "function") {
                this.addEvent(type, obj[type]);
            }
        }
        return this;
    },
    addOnce: function addOnce(exam, fn) {
        if (exam in this._listener) {
            return;
        }
        var tem = function (events, obj) {
            fn.call(this, events, obj);
            this.removeEvent(exam);
        }.bind(this);
        this.addEvent(exam, tem);
        return this;
    },
    fireEvent: function fireEvent(type, obj) {
        if (type && this._listener[type]) {
            var events = {
                type: type,
                target: this
            };

            for (var length = this._listener[type].length, start = 0; start < length; start += 1) {
                this._listener[type][start].call(this, events, obj);
            }
        }
        return this;
    },
    fireEvents: function fireEvents(array) {
        if (array instanceof Array) {
            for (var i = 0, length = array.length; i < length; i += 1) {
                this.fireEvent(array[i]);
            }
        }
        return this;
    },
    removeEvent: function removeEvent(type, key) {
        var listeners = this._listener[type];
        if (listeners instanceof Array) {
            if (typeof key === "function") {
                for (var i = 0, length = listeners.length; i < length; i += 1) {
                    if (listeners[i] === key) {
                        listeners.splice(i, 1);
                        break;
                    }
                }
            } else if (key instanceof Array) {
                for (var lis = 0, lenkey = key.length; lis < lenkey; lis += 1) {
                    this.removeEvent(type, key[lis]);
                }
            } else {
                delete this._listener[type];
            }
        }
        return this;
    },
    removeEvents: function removeEvents(params) {
        if (params instanceof Array) {
            for (var i = 0, length = params.length; i < length; i += 1) {
                this.removeEvent(params[i]);
            }
        } else if ((typeof params === "undefined" ? "undefined" : _typeof(params)) === "object") {
            for (var type in params) {
                this.removeEvent(type, params[type]);
            }
        }
        return this;
    }
};

module.exports = ExtendEvent;