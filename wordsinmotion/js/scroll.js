function checkVisible(elm) {
    "use strict";
    
    var elemTop = elm.getBoundingClientRect().top,
        elemBottom = elm.getBoundingClientRect().bottom,
        isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    
    return isVisible;
}