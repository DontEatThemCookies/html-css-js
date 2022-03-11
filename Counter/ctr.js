/*
Counter App v1.1 - JavaScript
By David Costell [03/11/2022]
*/

// Declarations
const ctr = document.getElementById("ctr");
const msg = document.getElementById("msg");

// Core functions
function incr() {
    ctr.innerText = parseInt(ctr.innerText) + 1;
    msg.innerText = "Value incremented";
}
function decr() {
    ctr.innerText = parseInt(ctr.innerText) - 1;
    msg.innerText = "Value decremented";
}
// Data persistence functions
function save() {
    check();
    localStorage.CounterValue = parseInt(ctr.innerText);
    msg.innerText = `Value ${localStorage.CounterValue} saved`;
}
function load() {
    check();
    ctr.innerText = localStorage.CounterValue;
    msg.innerText = `Value ${localStorage.CounterValue} loaded`;
}
function clr() {
    localStorage.CounterValue = "0";
    ctr.innerText = localStorage.CounterValue;
    msg.innerText = "Value cleared (reset to zero)";
}
// Data integrity functions
function check() {
    if (isNaN(parseInt(localStorage.CounterValue))) {
        localStorage.CounterValue = "0";
    }
}
// Keybinds
document.onkeydown = function(e) {
    switch (e.key.toLowerCase()) {
        case "s": save(); break; // S to save
        case "l": load(); break; // L to load
        case "c": clr();  break; // C to clear
        case "i": incr(); break; // I to increment
        case "d": decr(); break; // D to decrement
    }
}
