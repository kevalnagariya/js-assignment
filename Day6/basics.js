//get name from user and change the title
const name = prompt("Enter your name","Anonymous");
title.innerText += `Welcome to the family ${name}`;

const dmode = document.getElementById('dark');
dmode.onclick = function changeColor(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}
const ctime = document.getElementById('time');


function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}
// clock();
setInterval(clock,1000);

//Multiplication
function printTable(num) {
    var input = num.value;
    if(!isNaN(input)) {
        var table="";
        var number="";
        for(i=1;i<=10;i++) {
            number = input * i;
            table +=  input + " * " + i + " = " + number + "<br/>";
        }
        document.getElementById("mul").innerHTML = table;
    }
    else {
        document.getElementById("mul").innerHTML = "Please Enter a valid Number";
    }
}

