var track = document.getElementById('track');
track.addEventListener('ended', function() {
    this.currentTime = 0; // Mengatur waktu kembali ke awal
    this.play(); // Memutar kembali audio
});
track.volume = 0.5;
var track2 = document.getElementById('track2');
track2.addEventListener('ended', function() {
    this.currentTime = 0; // Mengatur waktu kembali ke awal
    this.play(); // Memutar kembali audio
});
var ancOn = document.getElementById('anc-on-sound')
var ancOff = document.getElementById('anc-off-sound')

var controlBtn = document.getElementById('play-pause');

function playPause() {
    if (track.paused) {
        track.play();
        if (!ancModeToggle.checked) {
            track2.play();
        }
        controlBtn.className = "pause";
    } else { 
        track.pause();
        if (!ancModeToggle.checked) {
            track2.pause();
        }
        controlBtn.className = "play";
    }
}

controlBtn.addEventListener("click", playPause);
track.addEventListener("ended", function() {
  controlBtn.className = "play";
});

var ancModeToggle = document.querySelector('.switch input[type="checkbox"]');
var isTrack2Playing = false;

// ancModeToggle.addEventListener('change', function() {
//     if (this.checked) {
//         if (!track2.paused) {
//             ancOn.play();
//             track2.pause();
//             isTrack2Playing = true;
//         }
//     } else {
//         if (isTrack2Playing) {
//             ancOff.play();
//             track2.play();
//             isTrack2Playing = false;
//         }
//     }
// });
ancModeToggle.addEventListener('change', function() {
    if (this.checked) {
        ancOn.play();
        track.play();
        if (track2.play) {
            track2.pause();
        }
        controlBtn.className = "pause";
    } else {
        ancOff.play();
        track2.play();
        if (controlBtn.className = "play"){
            track.play();
            controlBtn.className = "pause";
        }
        // controlBtn.className = "play";
    }
});
