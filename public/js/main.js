
window.URL = window.URL || window.webkitURL;
navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;


function startVideo() {

    var sourcevid = document.getElementById('sourcevid');
    var playback = document.getElementById('playback');

    // Replace the source of the video element with the stream from the camera

    navigator.getUserMedia({audio:true, video:true}, successCallback, errorCallback);

    function successCallback(stream) {
    console.log("creating video stream");
    var src = window.URL.createObjectURL(stream);
    sourcevid.src = src;

}
function errorCallback(error) {
    console.log("why you no work?!?!?!?");
    console.error('An error occurred: [CODE ' + error.code + ']');
    return;
}

}

function showData() {
var sourcevid = document.getElementById('sourcevid');

console.dir(sourcevid);
}

