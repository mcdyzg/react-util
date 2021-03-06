'use strict';

var CustomPromise = require('./CustomPromise');

var Deferred = function Deferred() {
    this.state = 'pendding';
    this.promise = new CustomPromise();
};

Deferred.prototype = {
    constructor: undefined,
    resolve: function resolve(obj) {
        this.state = 'fulfilled';
        this.promise.fireEvent('success', obj);
    },
    reject: function reject(err) {
        this.state = 'failed';
        this.promise.fireEvent('error', err);
    },
    progress: function progress(data) {
        this.promise.fireEvent('progress', data);
    }
};

module.exports = Deferred;