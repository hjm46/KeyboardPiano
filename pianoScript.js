c = "Middle_C.m4a"
addEventListener("keydown", function(e){
    key = e.code;
    let audio;
    if(key == "KeyA")
        audio = c;
    playMusic(audio);
    // switch(key){
    //     case "KeyA":
    //         audio = "Middle_C.m4a";
    //     case "KeyS":
    //         audio = "Middle_D.m4a";
    //     default: audio;

    // }
});

function playMusic(audio)
{
    let sound = new Audio(audio);
    sound.play();
}

// const canvas = document.getElementById("canvas")
// const ctx = canvas.getContext("2d")