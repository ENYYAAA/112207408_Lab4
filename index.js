window.addEventListener("load", start);

function start() {
    const drums = document.getElementsByClassName("drum");
    for (let i = 0; i < drums.length; i++) {
        drums[i].addEventListener("click", click);
    }

    function click () {
        const key = this.classList[0]; 
        playSound(key);
        animateButton(key);
        }

    document.addEventListener("keydown", key);
    
    function key(event) {
        const key = event.key.toLowerCase(); 
        playSound(key);
        animateButton(key);
    }
}

function playSound(key) {
    let soundPath;

    switch (key) {
        case "w":
            soundPath = "./sounds/crash.mp3";
            break;
        case "a":
            soundPath = "./sounds/kick-bass.mp3";
            break;
        case "s":
            soundPath = "./sounds/snare.mp3";
            break;
        case "d":
            soundPath = "./sounds/tom-1.mp3";
            break;
        case "j":
            soundPath = "./sounds/tom-2.mp3";
            break;
        case "k":
            soundPath = "./sounds/tom-3.mp3";
            break;
        case "l":
            soundPath = "./sounds/tom-4.mp3";
            break;
        default:
            console.error("Unknown key:", key);
            return;
    }

    
    const audio = new Audio(soundPath);
    audio.play();
}

function animateButton(key) {
    const button = document.querySelector(`.${key}`);
    if (button) {
        button.classList.add("pressed");
        setTimeout(function () {
            button.classList.remove("pressed");
        }, 100); 
    }
}
