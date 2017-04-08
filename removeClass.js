var hasClass = require('./hasClass');
module.exports = function (element, cls) {
    if(!element) return;
    if(!element.classList){
        element.classList.remove(cls);
    }else{
        element.className = element.className.replace(new RegExp('(\\s*|^)'+cls+'(\\s*|$)'),' ').trim();
        // another way
        // element.className = (' ' + element.className + ' ').replace(' ' + cls + ' ', ' ').trim();
    }
}
