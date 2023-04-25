let play = "x"
let winner = document.getElementById("winner")
let tryAgain = document.getElementById("try")
let ids = document.querySelectorAll(".game button")

for(let i = 0 ; i<ids.length ; i++){
    ids[i].onclick = function(){
        if(play === "x"){
            ids[i].innerHTML = "x"
            ids[i].disabled = true;
            play = "o";
        }
        else {
            ids[i].innerHTML = "o"
            ids[i].disabled = true
            play = "x"
        }
        check()
        // to told the player to try again
        if(ids[7].innerHTML !== "" &&
            ids[1].innerHTML !== "" &&
            ids[2].innerHTML !== "" &&
            ids[3].innerHTML !== "" &&
            ids[4].innerHTML !== "" &&
            ids[5].innerHTML !== ""&&
            ids[6].innerHTML !== "" &&
            ids[8].innerHTML !== ""){
                tryAgain.style.display = "block"
            }
        }
}
// function to check if player win or not
let color = "blueviolet"
function check(){
    let i;
    // the winner in row
    if(ids[0].innerHTML ==="x" || ids[0].innerHTML === "o"){
        if(ids[0].innerHTML === ids[1].innerHTML&& ids[1].innerHTML === ids[2].innerHTML){
            ids[0].style.background = color
            ids[1].style.background = color
            ids[2].style.background = color
            winner.style.display= "block"
        for(let i = 0; i< ids.length; i++){
            ids[i].disabled = true;
        }
        }
}

    if(ids[4].innerHTML ==="x" || ids[4].innerHTML === "o"){
        if(ids[3].innerHTML === ids[4].innerHTML&& ids[4].innerHTML === ids[5].innerHTML){
            ids[3].style.background = color
            ids[4].style.background = color
            ids[5].style.background = color
            winner.style.display= "block"
        for(let i = 0; i< ids.length; i++){
            ids[i].disabled = true;
        }
        }
    }
    if(ids[8].innerHTML ==="x" || ids[8].innerHTML === "o"){
        if(ids[6].innerHTML === ids[7].innerHTML&& ids[7].innerHTML === ids[8].innerHTML){
            ids[6].style.background = color
            ids[7].style.background = color
            ids[8].style.background = color
            winner.style.display= "block"
        for(let i = 0; i< ids.length; i++){
            ids[i].disabled = true;
        }
        }
    }
    // the winner in coulumn
    if(ids[0].innerHTML ==="x" || ids[0].innerHTML === "o"){
        if(ids[0].innerHTML === ids[3].innerHTML&& ids[3].innerHTML === ids[6].innerHTML){
            ids[0].style.background = color
            ids[3].style.background = color
            ids[6].style.background = color
            winner.style.display= "block"
        for(let i = 0; i< ids.length; i++){
            ids[i].disabled = true;
        }
        }
    }
    if(ids[4].innerHTML ==="x" || ids[4].innerHTML === "o"){
        if(ids[1].innerHTML === ids[4].innerHTML&& ids[4].innerHTML === ids[7].innerHTML){
            ids[1].style.background = color
            ids[4].style.background = color
            ids[7].style.background = color
            winner.style.display= "block"
        for(let i = 0; i< ids.length; i++){
            ids[i].disabled = true;
        }
        }
    }
    if(ids[8].innerHTML ==="x" || ids[8].innerHTML === "o"){
        if(ids[2].innerHTML === ids[5].innerHTML&& ids[5].innerHTML === ids[8].innerHTML){
            ids[2].style.background = color
            ids[5].style.background = color
            ids[8].style.background = color
            winner.style.display= "block"
        for(let i = 0; i< ids.length; i++){
            ids[i].disabled = true;
        }
        }
    }
}
