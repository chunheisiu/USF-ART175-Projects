// http://stackoverflow.com/questions/21216408/retrieve-computed-value-from-background-sizecover-contain

var backgroundImage = new Image();

backgroundImage.src = $('#dash-manual').css('background-image').replace(/"/g, "").replace(/url\(|\)$/ig, "");

var coverWidth, coverHeight, scale;

backgroundImage.onload = function () {
    var width = backgroundImage.width,
        height = backgroundImage.height,
        object = $('#dash-manual');

    /* Step 1 - Get the ratio of the div + the image */
    var imageRatio = width / height,
        coverRatio = object.outerWidth() / object.outerHeight();

    /* Step 2 - Work out which ratio is greater */
    if (imageRatio >= coverRatio) {
        /* The Height is our constant */
        coverHeight = object.outerHeight();
        scale = (coverHeight / height);
        coverWidth = width * scale;
    } else {
        /* The Width is our constant */
        coverWidth = object.outerWidth();
        scale = (coverWidth / width);
        coverHeight = height * scale;
    }
    
    /* Step 3 - Set positions of tooltips */
    setPos("dash-dashboard", 0.35, 0.65);
    setPos("dash-steering", 0.3, 0.375);
    setPos("dash-pedals", 0.6, 0.6);
    setPos("dash-gear", 0.45, 0.8);
};

function setPos(id, top, left) {
    document.getElementById(id).style.top = (coverHeight / 2 * top) + "px";
    document.getElementById(id).style.left = (coverWidth / 2 * left) + "px";
}
