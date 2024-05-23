"use strict";
function sanitizeInput(input) {
    return input.replace(/<[^>]*>?/gm, ''); // Removes HTML tags
}
let log = console.log;
let words = [
    "Hello",
    "Programming",
    "Code",
    "javaScript",
    "Town",
    "Testing",
    "Linkedin",
    "Github",
    "Python",
    "Php",
    "Java",
    "Scala"
];
// settings lvls
var Lvls;
(function (Lvls) {
    Lvls[Lvls["Easy"] = 5] = "Easy";
    Lvls[Lvls["Normal"] = 3] = "Normal";
    Lvls[Lvls["Hard"] = 2] = "Hard";
})(Lvls || (Lvls = {}));
// Default lvl
let defaultLvlName = "Easy";
let defaultLvlSeconds = Lvls[defaultLvlName];
//catch selectors
let startButton = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message span.seconds");
let theWord = document.querySelector(".the-word");
let upcomingWords = document.querySelector(".upcoming");
let input = document.querySelector(".input");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let finshMessage = document.querySelector(".finish");
// settings lvl name + seconds + score 
lvlNameSpan.innerHTML = defaultLvlName;
secondsSpan.innerHTML = String(defaultLvlSeconds);
timeLeftSpan.innerHTML = String(defaultLvlSeconds);
