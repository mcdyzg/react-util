module.exports = function (element, cls) {
    if(element.classList){
        return element.classList.contains(cls);
    }else{
        return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }
}
