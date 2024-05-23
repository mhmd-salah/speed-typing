function sanitizeInput(input:string) {
    return input.replace(/<[^>]*>?/gm, ''); // Removes HTML tags
}

let log = console.log

let words: string[] = [
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
enum Lvls {
  Easy = 5,
  Normal = 3,
  Hard = 2,
}

// Default lvl

let defaultLvlName: keyof typeof Lvls = "Easy";
let defaultLvlSeconds = Lvls[defaultLvlName];

//catch selectors
let startButton = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".message .lvl") as HTMLElement;
let secondsSpan = document.querySelector(".message span.seconds") as HTMLElement;
let theWord = document.querySelector(".the-word")
let upcomingWords = document.querySelector(".upcoming")
let input = document.querySelector(".input")
let timeLeftSpan = document.querySelector(".time span") as HTMLElement
let scoreGot = document.querySelector(".score .got")
let finshMessage = document.querySelector(".finish")


// settings lvl name + seconds + score 
lvlNameSpan.innerHTML = defaultLvlName;
secondsSpan.innerHTML = String(defaultLvlSeconds);
timeLeftSpan.innerHTML = String(defaultLvlSeconds)
