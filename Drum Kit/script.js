// Get the number of buttons in the footer
// const buttons = document.querySelector(".footer").length;

// Event listener to detect keypress
document.addEventListener("keypress", function(event){
    sound(event.key);
});

// Function to play sound based on key pressed
function sound(key){
    switch(key){
        // Play sound for key "w"
        case "w":
            const sound1= new Audio("sounds/clap.wav");
            sound1.play();
            break;

        // Play sound for key "a"
        case "a":
            const sound2= new Audio("sounds/hihat.wav");
            sound2.play();
            break;

        // Play sound for key "s"
        case "s":
            const sound3= new Audio("sounds/kick.wav");
            sound3.play();
            break;

        // Play sound for key "d"
        case "d":
            const sound4= new Audio("sounds/boom.wav");
            sound4.play();
            break;

        // Play sound for key "j"
        case "j":
            const sound5= new Audio("sounds/openhat.wav");
            sound5.play();
            break;

        // Play sound for key "k"
        case "k":
            const sound6= new Audio("sounds/ride.wav");
            sound6.play();
            break;

        // Play sound for key "l"
        case "l":
            const sound7= new Audio("sounds/tom.wav");
            sound7.play();
            break;
        
        // If the key pressed does not match any case, log the key to console
        default: 
            console.log(key);
    }
}
