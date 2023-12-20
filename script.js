function gridCreate(sideNumber) {
    for(let i = 0;i<sideNumber**2;i++){
        const gridBox = document.createElement("div");
        gridBox.classList.toggle("box");
        gridBox.setAttribute("style",`flex-basis: ${100/sideNumber}%;`)
        document.querySelector(".container").appendChild(gridBox);
    }
}

function randomColor(){
    return Math.floor(Math.random()*257);
}

function setHover(item) {
    let passes = 0;
    item.addEventListener("mouseover",function (event) {
        event.target.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
        if(passes<=10){
            event.target.style.filter = `brightness(${100-passes*10}%)`;
            passes++;
        }
    });
}

function newBoard(event) {
    let squares = parseInt(prompt("How many squares in a side do you want?"));
    if(squares>100) alert("Sorry, we don't allow more than 100 squares.");
    else{
        document.querySelector(".whole").removeChild(cont);
        cont = document.createElement("div");
        cont.classList.toggle("container");
        document.querySelector(".whole").appendChild(cont);
        gridCreate(squares);
        const set = document.querySelectorAll(".box");
        set.forEach(setHover);
    }
}

const buttonCont = document.createElement("div");
buttonCont.classList.toggle("buttonCont");
document.querySelector("body").appendChild(buttonCont);

const button = document.createElement("button");
document.querySelector(".buttonCont").appendChild(button);
button.textContent = "Enter number of squares.";

const whole = document.createElement("div");
whole.classList.toggle("whole");
document.querySelector("body").appendChild(whole);

const text = document.createElement("p");
text.textContent = "Etch-a-Sketch";
text.classList.toggle("text");
document.querySelector(".whole").appendChild(text);

let cont = document.createElement("div");
cont.classList.toggle("container");
document.querySelector(".whole").appendChild(cont);

gridCreate(16);

const set = document.querySelectorAll(".box");
set.forEach(setHover);

const newGrid = document.querySelector("button");
newGrid.addEventListener("click",newBoard);


