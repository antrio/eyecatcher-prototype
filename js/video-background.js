(function () {
    console.log('djsaijdias');
    /* Variables */
    var videoPlayer = document.getElementById('video-player'),
        video = videoPlayer.getElementsByClassName('fullscreen-bg__video')[0],
        playlist = videoPlayer.getElementsByClassName('fullscreen-bg__playlist')[0],
        source = video.getElementsByTagName('source'),
        linkList = [],
        videoDirectory = 'video/',
        currentVideo = 0,
        allLinks = playlist.children,
        linkNumber = allLinks.length,
        i, filename;

	/**
     * Load and play video
     * @param  int index Video index
     */
    function playVideo(index) {
        allLinks[index].classList.add('current-video');
        currentVideo = index;

		source[2].src = videoDirectory + linkList[index] + '.ogv';
        source[1].src = videoDirectory + linkList[index] + '.webm';
        source[0].src = videoDirectory + linkList[index] + '.mp4';

		video.load();
        video.play();
    }

    // Save all video sources from playlist
    for (i = 0; i < linkNumber; i++) {
        filename = allLinks[i].href;
        linkList[i] = filename.match(/([^\/]+)(?=\.\w+$)/)[0];
    }

	/**
     * Play next video
     */
    video.addEventListener('ended', function () {
        allLinks[currentVideo].classList.remove('current-video');

		nextVideo = currentVideo + 1;
        if (nextVideo >= linkNumber) {
            nextVideo = 0;
        }

		playVideo(nextVideo);
    });
}());
