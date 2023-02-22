var num = document.querySelectorAll(".drum").length;

for (var i = 0; i < num; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    var buttoninnerhtml = this.innerHTML;

    makesound(buttoninnerhtml);

    buttonanimation(buttoninnerhtml);
  
} );
}

document.addEventListener("keypress", function(event){

    makesound(event.key);

    buttonanimation(event.key);
});

function makesound(key) {

    switch (key) {

        case "M": var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;

        case "P": var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;

        case "A": var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;

        case "V": var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;

        case "A": var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;

        case "N": var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;

        case "K": var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;

        default: comsol.log(buttoninnerhtml);
    }

}

function buttonanimation(currentkey) {

    var activebutton = document.querySelector("." + currentkey);

    activebutton.classList.add("pressed");

    setTimeout(function() {
       activebutton.classList.remove("pressed");
    }, 100);
}