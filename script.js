const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Async function that prompts user for media stream and passes to video element, then play
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    }catch(e){
        console.log(e)
    }
}

button.addEventListener('click', async () => {
    //disable button after clicking
    button.disabled = true;
    //start the picture in picture tutorial
    await videoElement.requestPictureInPicture();
    // reset button
    button.disabled = false;
});

// Onload

selectMediaStream();