// Initialize variables to store timer values
let [milli, seconds, minutes, hours]= [0,0,0,0];

// Select the timer display element
let timeOcc= document.querySelector(".timer");

// Variable to store setInterval ID
let initial= null;

// Add event listener for the "Start" button
document.getElementById("startTime").addEventListener("click",()=>{
    // Clear any existing interval
    if(initial !== null){
        clearInterval(initial);
    }
    // Start the timer interval
    initial= setInterval(displayTimer,10);
});

// Add event listener for the "Stop" button
document.getElementById("stopTime").addEventListener("click",()=>{
    // Stop the timer interval
    clearInterval(initial);
})

// Add event listener for the "Reset" button
document.getElementById("resetTime").addEventListener("click",()=>{
    // Stop the timer interval
    clearInterval(initial);
    // Reset timer values
    [milli, seconds, minutes, hours]= [0,0,0,0];
    // Update timer display
    timeOcc.innerHTML="00:00:00:000";
});

// Function to display the timer
function displayTimer(){
    // Increment milliseconds
    milli +=10;
    // Update other time units based on millisecond count
    if(milli==1000){
        milli=0;
        seconds++;
        if (seconds==60){
            seconds=0;
            minutes++;
            if(minutes==60){
                minutes=0;
                hours++;
            }
        }
    }

    // Format time units with leading zeros if needed
    let h = hours<10? "0" +hours:hours;
    let m = minutes<10? "0" +minutes:minutes;
    let s = seconds<10? "0" +seconds:seconds;
    let ms= milli<10? "00" + milli:milli<100? "0" +milli:milli;
    // Update timer display
    timeOcc.innerHTML=`${h}:${m}:${s}:${ms}`;
}
