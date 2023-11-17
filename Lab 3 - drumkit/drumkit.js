let channelNumber = document.querySelector('#channelNumber');
const recordButton = document.querySelector('#record');
const playButton = document.querySelector('#play');
const changeChannel = document.querySelector('#changeChannel');
let sec = 0;
let timer;
let ele = document.getElementById('timer');
let channel_1 = [];
let channel_2 = [];
let channel_3 = [];
let channel_4 = [];
let currentChannel = channel_1;
let recording = false;
let playing = false;
let playingChannel = [];

const KeyToSound = {
    'a': document.querySelector('#s1'),
    's': document.querySelector('#s2'),
    'd': document.querySelector('#s3'),
    'f': document.querySelector('#s4'),
    'g': document.querySelector('#s5'),
    'h': document.querySelector('#s6'),
    'j': document.querySelector('#s7'),
    'k': document.querySelector('#s8'),
    'l': document.querySelector('#s9')
}


function onKeyPress(event) {
    console.log(event.key);

    const sound = KeyToSound[event.key]
    playSound(sound)

    if (recording) {
        let recordedSound = {
            timestamp: sec,
            recordedKey: event.key
        };
        currentChannel.push(recordedSound)

    }

}

function playSound(sound) {
    sound.currentTime = 0
    sound.play()
}


document.addEventListener('keypress', onKeyPress)


// zrobic tablice z channelami, zeby mozna ich miec ile sie chce
// a potem jak ktos walnie rekord to tworze w tej tablicy
// w index == channelNumber tablice z channel przy klinieciu record
// jak bedzie mi sie chciało to ulepszyć na 5



playButton.addEventListener('click', () => {
    if (playing == false) {
        playingChannel = [];

        if (channelNumber.innerHTML == 1) {
            console.log(channel_1);
            playingChannel = [].concat(channel_1);

        }
        if (channelNumber.innerHTML == 2) {
            console.log(channel_1);
            playingChannel = [].concat(channel_2);

        }
        if (channelNumber.innerHTML == 3) {
            console.log(channel_1);
            playingChannel = [].concat(channel_3);
        }
        if (channelNumber.innerHTML == 4) {
            console.log(channel_1);
            playingChannel = [].concat(channel_4);
        }

        playingChannel = playingChannel.reverse();

        console.log(playingChannel);
        console.log(playingChannel.length);

        sec = 0;
        playing = true;
    }
    else{
        playing = false;
    }
});





recordButton.addEventListener('click', () => {

    if (recording) {

        recordButton.value = "Finished Recording";
        recording = !recording;

        if (channelNumber.innerHTML == 1) {
            console.log(currentChannel.length);
            channel_1 = [];
            channel_1 = [].concat(currentChannel);
            console.log(channel_1.length);
            console.log("nagrano na kanale 1");

        }
        if (channelNumber.innerHTML == 2) {
            channel_2 = [];
            channel_2 = [].concat(currentChannel);
            console.log("nagrano na kanale 2");

        }
        if (channelNumber.innerHTML == 3) {
            channel_3 = [];
            channel_3 = [].concat(currentChannel);
            console.log("nagrano na kanale 3");
        }
        if (channelNumber.innerHTML == 4) {
            channel_4 = [];
            channel_4 = [].concat(currentChannel);
            console.log("nagrano na kanale 4");
        }
    }
    else {
        recordButton.value = "recording";
        recording = !recording;
        sec = 0;
        currentChannel = [];

    }
});


changeChannel.addEventListener('click', () => {

    if (!recording) {
        console.log(channelNumber.innerHTML);
        if (channelNumber.innerHTML == 4) {
            channelNumber.innerHTML = 1;
        }
        else {
            channelNumber.innerHTML++;
        }
    }
});

//
// When timer == the value => play the sound
//

(function timer() {

    timer = setInterval(() => {
        ele.innerHTML = '00:' + sec;
        sec++;
        if (playingChannel.length > 0 && playing == true) {
            console.log("przeszło")
            console.log(playingChannel[playingChannel.length - 1].timestamp)
            if (playingChannel[playingChannel.length - 1].timestamp == sec) {
                let niceSound = KeyToSound[playingChannel[playingChannel.length - 1].recordedKey]

                console.log("gra");
                playSound(niceSound)
                playingChannel.pop();

            }

        }

        if (playingChannel.length == 0) {
            playing = false;
        }

    }, 100) // each 1 second
})()

function pause() {
    clearInterval(timer);
}

