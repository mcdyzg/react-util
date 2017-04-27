var event = require('./ExtendEvent')

var ProtoPromise = function(factory) {
    event.call(this);
    var _this = this;

    factory && factory(function(res){
        // 这个函数就是resolve方法
        _this.fireEvent('success',res)
    },function(err){
        _this.fireEvent('error',err)
        // 这个函数就是reject方法
    },function(argu){
        _this.fireEvent('progress',argu)
        // 这个函数就是progress方法
    })
};


ProtoPromise.prototype = Object.create(event.prototype);
ProtoPromise.prototype.constructor = ProtoPromise;
 
ProtoPromise.prototype.then = function(resolve, reject, progress) {
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

module.exports = ProtoPromise;