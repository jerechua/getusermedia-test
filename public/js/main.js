
window.URL = window.URL || window.webkitURL;
navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;


function startVideo() {

    var sourcevid = $('#sourcevid').get(0);

    // Replace the source of the video element with the stream from the camera

    navigator.getUserMedia({audio:true, video:true}, successCallback, errorCallback);

    function successCallback(stream) {
    console.log("creating video stream");
    sourcevid.src = window.URL.createObjectURL(stream);
    sourcevid.addEventListener('loadedmetadata', function() {
        console.log(this.volume, this.muted);

        //TEMP: set volume to 0 then to 1 to fix volume bug
        this.volume = 0;
        this.volume = 1;

        this.muted = false;
    }, false);

    console.dir(sourcevid);
    

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
