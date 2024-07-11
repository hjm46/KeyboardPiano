// array of audio files for each indivudual piano key

// Since the number and order of keys on a standard piano is constant,
// the length and order of the array is fixed. Therefore, it is fastest to insert and access
// the elements directly.

// The audio files are inserted in chromatic ascending order into the array,
// and formated by octave. The files are loaded at compile time into the array to save time from loading
// the file every time the key is pressed. If needed, the audio files can be easily updated here by changing the path name.

const pianoAudio = [

    //C0
    ["A0", null],
    ["B0_flat", null],
    ["B0", null],

    //C1
    ["C1", null],
    ["D1_flat", null],
    ["D1", null],
    ["E1_flat", null],
    ["E1", null],
    ["F1", null],
    ["G1_flat", null],
    ["G1", null],
    ["A1_flat", null],
    ["A1", null],
    ["B1_flat", null],
    ["B1", null],

    //C2
    ["C2", null],
    ["D2_flat", null],
    ["D2", null],
    ["E2_flat", null],
    ["E2", null],
    ["F2", null],
    ["G2_flat", null],
    ["G2", null],
    ["A2_flat", null],
    ["A2", null],
    ["B2_flat", null],
    ["B2", null],

    //C3
    ["C3", new Audio("Audio/C3.m4a")],
    ["D3_flat", new Audio("Audio/D3_flat.m4a")],
    ["D3", new Audio("Audio/D3.m4a")],
    ["E3_flat", new Audio("Audio/E3_flat.m4a")],
    ["E3", new Audio("Audio/E3.m4a")],
    ["F3", new Audio("Audio/F3.m4a")],
    ["G3_flat", new Audio("Audio/G3_flat.m4a")],
    ["G3", new Audio("Audio/G3.m4a")],
    ["A3_flat", new Audio("Audio/A3_flat.m4a")],
    ["A3", new Audio("Audio/A3.m4a")],
    ["B3_flat", new Audio("Audio/B3_flat.m4a")],
    ["B3", new Audio("Audio/B3.m4a")],

    //C4
    ["C4", new Audio("Audio/C4.m4a")],
    ["D4_flat", new Audio("Audio/D4_flat.m4a")],
    ["D4", new Audio("Audio/D4.m4a")],
    ["E4_flat", new Audio("Audio/E4_flat.m4a")],
    ["E4", new Audio("Audio/E4.m4a")],
    ["F4", new Audio("Audio/F4.m4a")],
    ["G4_flat", new Audio("Audio/G4_flat.m4a")],
    ["G4", new Audio("Audio/G4.m4a")],
    ["A4_flat", new Audio("Audio/A4_flat.m4a")],
    ["A4", new Audio("Audio/A4.m4a")],
    ["B4_flat", new Audio("Audio/B4_flat.m4a")],
    ["B4", new Audio("Audio/B4.m4a")],

    //C5
    ["C5", new Audio("Audio/C5.m4a")],
    ["D5_flat", new Audio("Audio/D5_flat.m4a")],
    ["D5", new Audio("Audio/D5.m4a")],
    ["E5_flat", new Audio("Audio/E5_flat.m4a")],
    ["E5", new Audio("Audio/E5.m4a")],
    ["F5", new Audio("Audio/F5.m4a")],
    ["G5_flat", new Audio("Audio/G5_flat.m4a")],
    ["G5", new Audio("Audio/G5.m4a")],
    ["A5_flat", new Audio("Audio/A5_flat.m4a")],
    ["A5", new Audio("Audio/A5.m4a")],
    ["B5_flat", new Audio("Audio/B5_flat.m4a")],
    ["B5", new Audio("Audio/B5.m4a")],

    //C6
    ["C6", new Audio("Audio/C6.m4a")],
    ["D6_flat", new Audio("Audio/D6_flat.m4a")],
    ["D6", new Audio("Audio/D6.m4a")],
    ["E6_flat", new Audio("Audio/E6_flat.m4a")],
    ["E6", new Audio("Audio/E6.m4a")],
    ["F6", new Audio("Audio/F6.m4a")],
    ["G6_flat", new Audio("Audio/G6_flat.m4a")],
    ["G6", new Audio("Audio/G6.m4a")],
    ["A6_flat", new Audio("Audio/A6_flat.m4a")],
    ["A6", new Audio("Audio/A6.m4a")],
    ["B6_flat", new Audio("Audio/B6_flat.m4a")],
    ["B6", new Audio("Audio/B6.m4a")],

    //C7
    ["C7", new Audio("Audio/C7.m4a")],
    ["D7_flat", new Audio("Audio/D7_flat.m4a")],
    ["D7", new Audio("Audio/D7.m4a")],
    ["E7_flat", new Audio("Audio/E7_flat.m4a")],
    ["E7", new Audio("Audio/E7.m4a")],
    ["F7", new Audio("Audio/F7.m4a")],
    ["G7_flat", new Audio("Audio/G7_flat.m4a")],
    ["G7", new Audio("Audio/G7.m4a")],
    ["A7_flat", new Audio("Audio/A7_flat.m4a")],
    ["A7", new Audio("Audio/A7.m4a")],
    ["B7_flat", new Audio("Audio/B7_flat.m4a")],
    ["B7", new Audio("Audio/B7.m4a")],

    //C8
    ["C8", new Audio("Audio/C8.m4a")]]

// Below is the default configuration of the mappings of the computer keyboard to piano key sounds.
// This configuration is loaded in at the start of the program but can be changed while the program is running.
// The map links the Javascript event codes to indecies of the pianoAudio array that correspond to the correct key.

const keyMap = new Map();
keyMap.set("KeyQ", 27);
keyMap.set("Digit2", 28);
keyMap.set("KeyW", 29);
keyMap.set("Digit3", 30);
keyMap.set("KeyE", 31);
keyMap.set("KeyR", 32);
keyMap.set("Digit5", 33);
keyMap.set("KeyT", 34);
keyMap.set("Digit6", 35);
keyMap.set("KeyY", 36);
keyMap.set("Digit7", 37);
keyMap.set("KeyU", 38);
keyMap.set("KeyI", 39);

keyMap.set("KeyZ", 39);
keyMap.set("KeyS", 40);
keyMap.set("KeyX", 41);
keyMap.set("KeyD", 42);
keyMap.set("KeyC", 43);
keyMap.set("KeyV", 44);
keyMap.set("KeyG", 45);
keyMap.set("KeyB", 46);
keyMap.set("KeyH", 47);
keyMap.set("KeyN", 48);
keyMap.set("KeyJ", 49);
keyMap.set("KeyM", 50);
keyMap.set("Comma", 51);

keyMap.set("Numpad0", 51);
keyMap.set("Numpad1", 52);
keyMap.set("Numpad2", 53);
keyMap.set("Numpad3", 54);
keyMap.set("Numpad4", 55);
keyMap.set("Numpad5", 56);
keyMap.set("Numpad6", 57);
keyMap.set("Numpad7", 58);
keyMap.set("Numpad8", 59);
keyMap.set("Numpad9", 60);
keyMap.set("NumLock", 61);
keyMap.set("NumpadDivide", 62);
keyMap.set("NumpadMultiply", 63);

const pressed = []
leftStart = 40;
rightStart = 60;
let pedal = false;

// event.code is used here instead of event.key in order to preserve the positions of the key bindings on keyboard regardless
// of the language the keyboard is in in order to minic a real piano as much as possible 
// (for example, the layout of letters is different on a German keyboard verses an English QWERTY
// keyboard however I want to preserve the layout of the keys and not necessarily the keys themselves. Since this was an opprotunity
// to support mulitple keyboards, I took this approach.)

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
            if(index == null)
                return;
            playMusic(pianoAudio[index][1], index);

            id = pianoAudio[index][0]
            displayKey = document.getElementById(id);
            if(id.includes("_") == false)
                displayKey.style.background = "#e1e1e1";

            if(id.includes("_") == true)
                displayKey.style.background = "#949494 ";
    }
});

addEventListener("keyup", function(e){
    key = e.code;
    switch(key){
        case "Space":
            pedal = false;
            pauseAll();

        default:
            index = keyMap.get(key)
            if(index == null)
                return;
            setTimeout(pauseMusic(pianoAudio[index][1], pedal, index), 10);
            id = pianoAudio[index][0]
            displayKey = document.getElementById(id);

            if(id.includes("_") == false)
                displayKey.style.background = "white";

            if(id.includes("_") == true)
                displayKey.style.background = "black";

            pressed[index] = false;

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
        if(pressed[i]==false)
            pauseMusic(pianoAudio[i][1], pedal, i);
    }
}