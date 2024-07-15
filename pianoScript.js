// array of audio files for each indivudual piano key

// Since the number and order of keys on a standard piano is constant,
// the length and order of the array is fixed. Therefore, it is fastest to insert and access
// the elements directly.

// The audio files are inserted in chromatic ascending order into the array,
// and formated by octave. The files are loaded at compile time into the array to save time from loading
// the file every time the key is pressed. If needed, the audio files can be easily updated here by changing the path name.

const pianoAudio = [

    //C0
    ["A0", new Audio("Audio/A0.m4a")],
    ["B0_flat", new Audio("Audio/B0_flat.m4a")],
    ["B0", new Audio("Audio/B0.m4a")],

    //C1
    ["C1", new Audio("Audio/C1.m4a")],
    ["D1_flat", new Audio("Audio/D1_flat.m4a")],
    ["D1", new Audio("Audio/D1.m4a")],
    ["E1_flat", new Audio("Audio/E1_flat.m4a")],
    ["E1", new Audio("Audio/E1.m4a")],
    ["F1", new Audio("Audio/F1.m4a")],
    ["G1_flat", new Audio("Audio/G1_flat.m4a")],
    ["G1", new Audio("Audio/G1.m4a")],
    ["A1_flat", new Audio("Audio/A1_flat.m4a")],
    ["A1", new Audio("Audio/A1.m4a")],
    ["B1_flat", new Audio("Audio/B1_flat.m4a")],
    ["B1", new Audio("Audio/B1.m4a")],

    //C2
    ["C2", new Audio("Audio/C2.m4a")],
    ["D2_flat", new Audio("Audio/D2_flat.m4a")],
    ["D2", new Audio("Audio/D2.m4a")],
    ["E2_flat", new Audio("Audio/E2_flat.m4a")],
    ["E2", new Audio("Audio/E2.m4a")],
    ["F2", new Audio("Audio/F2.m4a")],
    ["G2_flat", new Audio("Audio/G2_flat.m4a")],
    ["G2", new Audio("Audio/G2.m4a")],
    ["A2_flat", new Audio("Audio/A2_flat.m4a")],
    ["A2", new Audio("Audio/A2.m4a")],
    ["B2_flat", new Audio("Audio/B2_flat.m4a")],
    ["B2", new Audio("Audio/B2.m4a")],

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
let pedal = false;

// event.code is used here instead of event.key in order to preserve the positions of the key bindings on keyboard regardless
// of the language the keyboard is in in order to minic a real piano as much as possible 
// (for example, the layout of letters is different on a German keyboard verses an English QWERTY
// keyboard however I want to preserve the layout of the keys and not necessarily the keys themselves. Since this was an opprotunity
// to support mulitple keyboards, I took this approach.)

addEventListener("keydown", function(e){
    key = e.code;
    repeat = e.repeat;
    switch(key){
        case "Space":
            if(repeat == true)
                return;
            pedal = true;
            break;

        case "ArrowUp":
            if(keyMap.get("NumpadMultiply" >= 87))
                return;
            for([key, value] of keyMap)
                {
                    keyMap.set(key, value+12)
                }
            return;

        case "ArrowDown":
            if(keyMap.get("KeyQ") <= 0)
                return;
            for([key, value] of keyMap)
                {
                    keyMap.set(key, value-12)
                }
            return;

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