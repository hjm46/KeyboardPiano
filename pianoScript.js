//need to make some sort of enum for the file swhen shifting keys
const pianoAudio = new Map();

//C4
pianoAudio.set("c4", new Audio("Audio/c4.m4a"));
pianoAudio.set("d4flat", new Audio("Audio/d4_flat.m4a"));
pianoAudio.set("d4", new Audio("Audio/d4.m4a"));
pianoAudio.set("e4flat", new Audio("Audio/e4_flat.m4a"));
pianoAudio.set("e4", new Audio("Audio/e4.m4a"));
pianoAudio.set("f4", new Audio("Audio/f4.m4a"));
pianoAudio.set("g4flat", new Audio("Audio/g4_flat.m4a"));
pianoAudio.set("g4", new Audio("Audio/g4.m4a"));
pianoAudio.set("a4flat", new Audio("Audio/a4_flat.m4a"));
pianoAudio.set("a4", new Audio("Audio/a4.m4a"));
pianoAudio.set("b4flat", new Audio("Audio/b4_flat.m4a"));
pianoAudio.set("b4", new Audio("Audio/b4.m4a"));
pianoAudio.set("c4", new Audio("Audio/c4.m4a"));


//need to make a key up function
addEventListener("keydown", function(e){
    key = e.code;
    switch(key){
        case "KeyA":
            playMusic(pianoAudio.get("c4"));
        case "KeyS":
            audio = "Middle_D.m4a";
        default: audio;

    }
});

function playMusic(audio)
{
    if (audio!=null)
    {
        //mess with this
        //use the longest duration possible then cut off audio when key is up
        audio.playbackRate=3;
        audio.play();
    }
}

// const canvas = document.getElementById("canvas")
// const ctx = canvas.getContext("2d")