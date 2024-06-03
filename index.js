let click=new Audio("click.wav");
let resetaudio=new Audio("reset.wav");
let turn='X';


changeturn=()=>{

    return turn === "X"?"O":"X";
}


let reset=document.getElementsByClassName("reset")[0];
reset.addEventListener('click',()=>{
    resetaudio.play();
    for (let i = 0; i < 9; i++) {
        let textbox=document.querySelectorAll('.textbox')[i];
        textbox.innerText="";
    }

})

restart=()=>{
    let butt=document.getElementsByClassName("restart")[0];
    let element=document.getElementById("gamefi");
        butt.innerText="New Game";
        butt.addEventListener('click',()=>{
        resetaudio.play();
        element.classList.remove("showmsg");
        
        for (let i = 0; i < 9; i++) {
        let textbox=document.querySelectorAll('.textbox')[i];
        textbox.innerText="";    
            
        }
    })
}

gamefinished=()=>{
    let element=document.getElementById("gamefi");
    let winmsg=document.getElementById('winmsg');
    element.classList.add("showmsg");
    winmsg.innerText=turn+" win!";
    restart();
}

checkwin =()=>{

    let win=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]


    for (let i = 0; i < win.length; i++) {
        const e = win[i];
        let textbox=document.getElementsByClassName("textbox");
        if ((textbox[e[0]].innerText===textbox[e[1]].innerText)&&(textbox[e[0]].innerText===textbox[e[2]].innerText)&&(textbox[e[1]].innerText===textbox[e[2]].innerText)&&textbox[e[0]].innerText!=='') { 
        gamefinished();
        }
    }


}

for (let g = 0; g < 9; g++) {
    let element=document.getElementsByClassName("box")[g];
    element.addEventListener('click',()=>{
        let textbox=element.querySelector('.textbox');
        if (textbox.innerText==='') {
            
            textbox.innerText=turn;
            click.play();
            checkwin();
            turn=changeturn();
            document.getElementsByClassName("turnmsg")[0].innerText='Turn for ' + "'"+turn+"'";
        }
    })    

}






