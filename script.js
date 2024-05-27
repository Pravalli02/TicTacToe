console.log("Welcome to Tic Tac Toe")
let music=new Audio("music.mp3")
let audioturn=new Audio("ting.mp3")
let gameover=new Audio("gameover.mp3")
let turn="X"
let isgameover=false;

const changeTurn =()=>{
    return turn==="X"?"0": "X"

}

const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext')
    let wins=[
        [0,1,2,-13,5,0],
        [3,4,5,-13,15,0],
        [6,7,8,-13,25,0],
        [0,3,6,-22.7,15,90],
        [1,4,7,-12.7,15,90],
        [2,5,8,-2.7,15,90],
        [0,4,8,-13,15,45],
        [2,4,6,-13,15,135],

    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText + "Won";
            gameover.play()
            isgameover=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width= "200px";
            document.querySelector('.line').style.width="20vw";
            document.querySelector('.line').style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })
    

}
//Game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeTurn();
            audioturn.play();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText="Turn for"+ turn;
            }
    
            
        }
        })
    })
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText=""
    });
    turn="X";
    isgameover=false;
    if(!isgameover){
        document.getElementsByClassName("info")[0].innerText="Turn for"+turn;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width= "0px";
        document.querySelector('.line').style.width="0vw";
    }





}
)
