//need to make some sort of enum for the file swhen shifting keys
const pianoAudio = [];

//C4
pianoAudio[40] = new Audio("Audio/C4.m4a");
pianoAudio[41] = new Audio("Audio/D4_flat.m4a");
pianoAudio[42] = new Audio("Audio/D4.m4a");
pianoAudio[43] = new Audio("Audio/E4_flat.m4a");
pianoAudio[44] = new Audio("Audio/E4.m4a");
// pianoAudio.set("f4", new Audio("Audio/f4.m4a"));
// pianoAudio.set("g4flat", new Audio("Audio/g4_flat.m4a"));
// pianoAudio.set("g4", new Audio("Audio/g4.m4a"));
// pianoAudio.set("a4flat", new Audio("Audio/a4_flat.m4a"));
// pianoAudio.set("a4", new Audio("Audio/a4.m4a"));
// pianoAudio.set("b4flat", new Audio("Audio/b4_flat.m4a"));
// pianoAudio.set("b4", new Audio("Audio/b4.m4a"));
// pianoAudio.set("c4", new Audio("Audio/c4.m4a"));

const keyMap = new Map();
keyMap.set("KeyZ", 40)
keyMap.set("KeyS", 41)
keyMap.set("KeyX", 42)
keyMap.set("KeyD", 43)
keyMap.set("KeyC", 44)


const pressed = []
leftStart = 40;
rightStart = 60;
let pedal = false;
//need to make a key up function
addEventListener("keydown", function(e){
    key = e.code;
    repeat = e.repeat
    switch(key){
        case "Space":
            if(repeat == true)
                return;
            pedal = true;
            break;

        default: 
            if(repeat == true)
                return;
            index = keyMap.get(key)
            playMusic(pianoAudio[keyMap.get(key)], index);

    }
});

addEventListener("keyup", function(e){
    key = e.code;
    switch(key){
        case "Space":
            pedal = false;
            pauseAll();
            break;

        default:
            index = keyMap.get(key)
            setTimeout(pauseMusic(pianoAudio[index], pedal, index), 600);

    }
});

function playMusic(audio, index)
{
    if (audio!=null)
    {
        audio.currentTime = 0;
        audio.play();
        pressed[index] = true;
    }
}

function pauseMusic(audio, pedal, index)
{
    if (audio!=null && pedal==false)
    {
        audio.pause();
        audio.currentTime = 0;
        pressed[index] = false;
    }
}

function pauseAll()
{
    for(i=0; i<=44; i++) {
        //work on this
        //if(pressed[i]!=true)
            pauseMusic(pianoAudio[i], pedal, index);
    }
}