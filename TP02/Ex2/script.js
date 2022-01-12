var video = document.createElement('video');
var canvas = document.getElementById('viewport');

document.getElementById("btn-text").onclick = function() { myfunction() };
var number = 0;

video.autoplay = true;


function myfunction() {

    if (number == 1) {
        document.getElementById("btn-text").innerHTML = "Start";
        number = 0;

    } else if (number == 0) {

        document.getElementById("btn-text").innerHTML = "Pause";
        number = 1;
        (function loop() {

            if (number == 1) {
                console.log("called");
                canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
                setTimeout(loop, 1000 / 30);
            } else {
                canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)
            }

        })();
    }
}

navigator.mediaDevices.getUserMedia({ audio: false, video: true })
    .then((stream) => {
        video.srcObject = stream
        console.log("test");

    }).catch(err => {

    })