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
        track2.play();
        //controlBtn.textContent = "Pause";
        controlBtn.className = "pause";
    } else { 
        track.pause();
        track2.pause();
         //controlBtn.textContent = "Play";
        controlBtn.className = "play";
    }
}

controlBtn.addEventListener("click", playPause);
track.addEventListener("ended", function() {
  controlBtn.className = "play";
});

var ancModeToggle = document.querySelector('.switch input[type="checkbox"]');
var isTrack2Playing = false;

ancModeToggle.addEventListener('change', function() {
    if (this.checked) {
        if (!track2.paused) {
            ancOn.play();
            track2.pause();
            isTrack2Playing = true;
        }
    } else {
        if (isTrack2Playing) {
            ancOff.play();
            track2.play();
            isTrack2Playing = false;
        }
    }
});

// var track = document.getElementById('track');
// track.addEventListener('ended', function() {
//     this.currentTime = 0; // Mengatur waktu kembali ke awal
//     this.play(); // Memutar kembali audio
// });
// track.volume = 0.6;

// var ancOn = document.getElementById('anc-on-sound')
// var ancOff = document.getElementById('anc-off-sound')

// var controlBtn = document.getElementById('play-pause');

// function playPause() {
//     if (ancModeToggle.checked) {
//         if (track.paused) {
//             track.play();
//             //controlBtn.textContent = "Pause";
//             controlBtn.className = "pause";
//         } else { 
//             track.pause();
//             //controlBtn.textContent = "Play";
//             controlBtn.className = "play";
//         }
//     } else {
//         if (track.paused) {
//             track.play();
//             track2.play();
//             //controlBtn.textContent = "Pause";
//             controlBtn.className = "pause";
//         } else { 
//             track.pause();
//             track2.pause();
//              //controlBtn.textContent = "Play";
//             controlBtn.className = "play";
//         }
//     }
// }

// controlBtn.addEventListener("click", playPause);
// track.addEventListener("ended", function() {
//   controlBtn.className = "play";
// });

// var ancModeToggle = document.querySelector('.switch input[type="checkbox"]');
// var track2 = document.getElementById('track2');
// var isTrack2Playing = false;

// ancModeToggle.addEventListener('change', function() {
//     if (this.checked) {
//         if (track.paused) {
//             controlBtn.className = "pause";
//             ancOn.play();
//             track.play();
//             track2.pause();
//             isTrack2Playing = false;
//         }
//     } else {
//         if (isTrack2Playing) {
//             ancOff.play();
//             track2.play();
//             isTrack2Playing = false;
//         }
//     }
// });

