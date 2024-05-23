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
let startButton = document.querySelector(".start") as HTMLElement;
let lvlNameSpan = document.querySelector(".message .lvl") as HTMLElement;
let secondsSpan = document.querySelector(".message span.seconds") as HTMLElement;
let theWord = document.querySelector(".the-word")as HTMLElement;
let upcomingWords = document.querySelector(".upcoming")as HTMLElement;
let input = document.querySelector(".input") as HTMLInputElement
let timeLeftSpan = document.querySelector(".time span") as HTMLElement
let scoreTotal = document.querySelector(".score .total") as HTMLElement
let scoreGot = document.querySelector(".score .got") as HTMLElement
let finshMessage = document.querySelector(".finish")as HTMLElement;

// settings lvl name + seconds + score 
lvlNameSpan.innerHTML = defaultLvlName;
secondsSpan.innerHTML = String(defaultLvlSeconds);
timeLeftSpan.innerHTML = String(defaultLvlSeconds)
scoreTotal.innerHTML = String(words.length);

// disable paste event
input.onpaste = _ => false; 

// Start Game

startButton.onclick = function (e) {
  (e.target as Element).remove()
  input.focus()  
  // generate word function
  genWord();
};

function genWord () {
  // get random word from array;
  let randomWord = words[Math.floor(Math.random() * words.length)]
  let wordIndex = words.indexOf(randomWord)
  //  remove the random word from arra
  words.splice(wordIndex, 1)
  // show the random word
  theWord.innerHTML = randomWord
  // empty upcoming wrods
  upcomingWords.innerHTML = "";
  // generate words 
  for (let i = 0; i < words.length; i++){
    // create div element
    let div = document.createElement("div")
    let txt = document.createTextNode(words[i])
    div.appendChild(txt)
    upcomingWords.appendChild(div)
  }
  startPlay()
}

function startPlay () {
  let start = setInterval(() => {
    let result = parseInt(timeLeftSpan.innerHTML) - 1
    timeLeftSpan.innerHTML = result.toString()
    if (result == 0) {
      clearInterval(start)
      if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
        input.value = "";
        let scoreG = parseInt(scoreGot.innerHTML) + 1
        scoreGot.innerHTML = scoreG.toString()
      } else {
        let span = document.createElement("span")
        span.className = "bad";
        span.appendChild(document.createTextNode("Game Over"))
        finshMessage.appendChild(span)
      }
    }
  },1000)
}