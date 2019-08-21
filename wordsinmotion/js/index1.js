var suffering = document.getElementById('suffering');

window.onscroll = function () {
    "use strict";
    
    suffering.style.backgroundPosition = checkVisible(suffering) ? '0 10%' : '0 100%';
};