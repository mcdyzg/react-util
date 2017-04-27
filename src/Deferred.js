var CustomPromise = require('./CustomPromise');

var Deferred = function() {
    this.state = 'pendding';
    this.promise = new CustomPromise();
};

Deferred.prototype = {
    constructor: this,
    resolve: function(obj) {
        this.state = 'fulfilled';
        this.promise.fireEvent('success', obj);
    },
    reject: function(err) {
        this.state = 'failed';
        this.promise.fireEvent('error', err);
    },
    progress: function(data) {
        this.promise.fireEvent('progress', data);
    }
};

module.exports = Deferred;