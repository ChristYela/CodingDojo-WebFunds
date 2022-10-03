/* script */ 

console.log("page loaded...");

function playVideo(vid) {
    vid.play();
    document.getElementById("video").muted = true;
    
}

function pauseVideo(vid) {
    vid.pause();
    vid.currentTime = 0;
    
}

