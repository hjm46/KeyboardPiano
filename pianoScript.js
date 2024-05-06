//need to make some sort of enum for the file swhen shifting keys
const pianoAudio = [];

//C4
pianoAudio[39] = new Audio("Audio/C4.m4a");
pianoAudio[40] = new Audio("Audio/D4_flat.m4a");
pianoAudio[41] = new Audio("Audio/D4.m4a");
pianoAudio[42] = new Audio("Audio/E4_flat.m4a");
pianoAudio[43] = new Audio("Audio/E4.m4a");
pianoAudio[44] = new Audio("Audio/F4.m4a");
pianoAudio[45] = new Audio("Audio/G4_flat.m4a");
pianoAudio[46] = new Audio("Audio/G4.m4a");
pianoAudio[47] = new Audio("Audio/A4_flat.m4a");
pianoAudio[48] = new Audio("Audio/A4.m4a");
pianoAudio[49] = new Audio("Audio/B4_flat.m4a");
pianoAudio[50] = new Audio("Audio/B4.m4a");

//C5
pianoAudio[51] = new Audio("Audio/C5.m4a");
pianoAudio[52] = new Audio("Audio/D5_flat.m4a");
pianoAudio[53] = new Audio("Audio/D5.m4a");
pianoAudio[54] = new Audio("Audio/E5_flat.m4a");
pianoAudio[55] = new Audio("Audio/E5.m4a");
pianoAudio[56] = new Audio("Audio/F5.m4a");
pianoAudio[57] = new Audio("Audio/G5_flat.m4a");
pianoAudio[58] = new Audio("Audio/G5.m4a");
pianoAudio[59] = new Audio("Audio/A5_flat.m4a");
pianoAudio[60] = new Audio("Audio/A5.m4a");
pianoAudio[61] = new Audio("Audio/B5_flat.m4a");
pianoAudio[62] = new Audio("Audio/B5.m4a");

//C6
pianoAudio[63] = new Audio("Audio/C6.m4a");
pianoAudio[64] = new Audio("Audio/D6_flat.m4a");
pianoAudio[65] = new Audio("Audio/D6.m4a");
pianoAudio[66] = new Audio("Audio/E6_flat.m4a");
pianoAudio[67] = new Audio("Audio/E6.m4a");
pianoAudio[68] = new Audio("Audio/F6.m4a");
pianoAudio[69] = new Audio("Audio/G6_flat.m4a");
pianoAudio[70] = new Audio("Audio/G6.m4a");
pianoAudio[71] = new Audio("Audio/A6_flat.m4a");
pianoAudio[72] = new Audio("Audio/A6.m4a");
pianoAudio[73] = new Audio("Audio/B6_flat.m4a");
pianoAudio[74] = new Audio("Audio/B6.m4a");

//C7
pianoAudio[75] = new Audio("Audio/C7.m4a");
pianoAudio[76] = new Audio("Audio/D7_flat.m4a");
pianoAudio[77] = new Audio("Audio/D7.m4a");
pianoAudio[78] = new Audio("Audio/E7_flat.m4a");
pianoAudio[79] = new Audio("Audio/E7.m4a");
pianoAudio[80] = new Audio("Audio/F7.m4a");
pianoAudio[81] = new Audio("Audio/G7_flat.m4a");
pianoAudio[82] = new Audio("Audio/G7.m4a");
pianoAudio[83] = new Audio("Audio/A7_flat.m4a");
pianoAudio[84] = new Audio("Audio/A7.m4a");
pianoAudio[85] = new Audio("Audio/B7_flat.m4a");
pianoAudio[86] = new Audio("Audio/B7.m4a");

//C8
pianoAudio[87] = new Audio("Audio/C8.m4a");

const keyMap = new Map();
keyMap.set("KeyZ", 39)
keyMap.set("KeyS", 40)
keyMap.set("KeyX", 41)
keyMap.set("KeyD", 42)
keyMap.set("KeyC", 43)
keyMap.set("KeyV", 44)
keyMap.set("KeyG", 45)
keyMap.set("KeyB", 46)
keyMap.set("KeyH", 47)
keyMap.set("KeyN", 48)
keyMap.set("KeyJ", 49)
keyMap.set("KeyM", 50)
keyMap.set("Comma", 51)



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