var event = require('./ExtendEvent')

var CustomPromise = function() {
    // 这句话是执行ExtendEvent中的this._listener ={}，使CustomPromise实例也生成._listener属性
    event.call(this);
};


CustomPromise.prototype = Object.create(event.prototype,{});
CustomPromise.prototype.constructor = CustomPromise;
 
CustomPromise.prototype.then = function(resolve, reject, progress) {
    if(typeof resolve === 'function') {
        this.addOnce('success', resolve);
    }
    if(typeof reject === 'function'){
        this.addOnce('error', reject);
    }
    if(typeof progress === 'function') {
        this.addEvent('progress', progress)
    }
    return this;
}

module.exports = CustomPromise;