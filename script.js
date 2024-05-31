// YouTube Player API variables
var player;
var playerReady = false;

// Function to load YouTube API script asynchronously
function loadYouTubeAPI() {
    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// This function creates an <iframe> (and YouTube player)
// after the API code downloads.
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: '8SIST9t72kY', // Your YouTube video ID here
        playerVars: {
            'autoplay': 1,
            'controls': 0,
            'loop': 1,
            'showinfo': 0,
            'modestbranding': 1,
            'mute': 1, // Mute the video for background playback
            'playlist': '8SIST9t72kY' // Required for loop
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

// Function to execute when the player is ready
function onPlayerReady(event) {
    playerReady = true;
    // Check if the play button is clicked
    document.getElementById('playButton').addEventListener('click', function() {
        // If player is ready, play the video
        if (playerReady) {
            player.playVideo();
        }
    });
}

// When the document is ready, load the YouTube API script
document.addEventListener("DOMContentLoaded", function() {
    loadYouTubeAPI();
});
