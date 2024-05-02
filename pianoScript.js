//need to make some sort of enum for the file swhen shifting keys
const pianoAudio = new Map();

//C4
pianoAudio.set("c4", new Audio("Audio/C4.m4a"));
pianoAudio.set("d4flat", new Audio("Audio/D4_flat.m4a"));
pianoAudio.set("d4", new Audio("Audio/D4.m4a"));
pianoAudio.set("e4flat", new Audio("Audio/E4_flat.m4a"));
pianoAudio.set("e4", new Audio("Audio/E4.m4a"));
// pianoAudio.set("f4", new Audio("Audio/f4.m4a"));
// pianoAudio.set("g4flat", new Audio("Audio/g4_flat.m4a"));
// pianoAudio.set("g4", new Audio("Audio/g4.m4a"));
// pianoAudio.set("a4flat", new Audio("Audio/a4_flat.m4a"));
// pianoAudio.set("a4", new Audio("Audio/a4.m4a"));
// pianoAudio.set("b4flat", new Audio("Audio/b4_flat.m4a"));
// pianoAudio.set("b4", new Audio("Audio/b4.m4a"));
// pianoAudio.set("c4", new Audio("Audio/c4.m4a"));

pedal = false;
//need to make a key up function
addEventListener("keydown", function(e){
    key = e.code;
    switch(key){
        case "Space":
            pedal = true;
            break;
        case "KeyZ":
            playMusic(pianoAudio.get("c4"), pedal);
            break;
        case "KeyS":
            playMusic(pianoAudio.get("d4flat"), pedal);
            break;
        case "KeyX":
            playMusic(pianoAudio.get("d4"), pedal);
            break;
        case "KeyD":
            playMusic(pianoAudio.get("e4flat"), pedal);
            break;
        case "KeyC":
            playMusic(pianoAudio.get("e4"), pedal);
            break;
        default: null

    }
});

addEventListener("keyup", function(e){
    key = e.code;
    switch(key){
        case "Space":
            pedal = false;
            document.querySelectorAll('audio').forEach(el => el.pause());
            break;
        case "KeyZ":
            setTimeout(pauseMusic(pianoAudio.get("c4"), pedal), 600);
            break;
        case "KeyS":
            setTimeout(pauseMusic(pianoAudio.get("d4flat"), pedal), 600);
            break;
        case "KeyX":
            setTimeout(pauseMusic(pianoAudio.get("d4"), pedal), 600);
            break;
        case "KeyD":
            setTimeout(pauseMusic(pianoAudio.get("e4flat"), pedal), 600);
            break;
        case "KeyC":
            setTimeout(pauseMusic(pianoAudio.get("e4"), pedal), 600);
            break;
        default: null

    }
});

function playMusic(audio)
{
    if (audio!=null)
    {
        //mess with this
        //use the longest duration possible then cut off audio when key is up
        audio.play();
    }
}

function pauseMusic(audio, pedal)
{
    if (audio!=null && pedal==false)
    {
        //audio.playbackRate=5;
        audio.pause();
        audio.currentTime = 0;
    }
}

// const canvas = document.getElementById("canvas")
// const ctx = canvas.getContext("2d")