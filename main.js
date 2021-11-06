let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let btnL = document.getElementById("spinL");
let btnR = document.getElementById("spinR");
let number = 0;
let count=0;

btnR.onclick = function(count){
   
    if(count=0){
        number = -30;
        count++;
        console.log (number);
    }
    else{
        number +=  60;
        console.log (number);
    }
    container.style.transform = "rotate("+ number + "deg)";
    console.log (number);
    
}

btnL.onclick = function(count){
    if(count=0){
        number = +30;
        count++;
        console.log (number);
    }
    else{
        number -=  60;
        console.log (number);
    }
    container.style.transform = "rotate("+ number + "deg)";
   
}


btn.onclick = function(){
    container.style.transform = "rotate("+ number + "deg)";
    number +=  Math.ceil(Math.random()*1000);
}