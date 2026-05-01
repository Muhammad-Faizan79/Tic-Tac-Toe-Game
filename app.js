var body = document.querySelector(".contan")
// console.log(body)
var gameBtn =document.querySelectorAll(".btn")
var showWinnwe = document.querySelector("#h1")
var contanier = document.querySelector(".main")
 contanier.classList.add("hide")
var tern0 =true;
var check = 0;
var winingPatern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [6,4,2]
]
let isCalled=true;
function start(){
    var from =`
    <div class="form">
        <h1>Enter Players Name</h1>
        <input id="Player1" type="text" placeholder="Enter Player 1 Name">
        <input id="Player2" type="text" placeholder="Enter Player 2 Name">
        <button onclick="get()">Play Game</button>
    </div>
    `;
    const h1 =document.querySelector(".h1body")
    h1.classList.add("hide")
    body.innerHTML= from;
    const container =document.querySelector(".gamecon")
    container.classList.add("hide")
    // document.querySelector(".box-rebot").classList.add("hide")


}
function get(){
    var player1 = document.getElementById("Player1");
    var player2 = document.getElementById("Player2");
    // console.log(player1.value ,player2.value)
    if(true ){
        contanier.classList.remove("hide")
        
        document.querySelector(".form").classList = "hide"
        // console.log("show")
    }else{
        contanier.classList="hide"
    }
    document.getElementById("h1").innerHTML=player1.value
    document.getElementById("h2").innerHTML=player2.value
    
    if(isCalled){
        getplayers(player1.value,player2.value)
        isCalled=false;
    }
    
    return player1 ,player2
    
}
let player;
function getplayers(p1,p2){
    console.log(p1, p2)
    const player1= p1
    const player2 =p2
    const players=[player1, player2]
    player= players
}



gameBtn.forEach(  (btn) => {
    btn.addEventListener("click",()=>{
        console.log("box was clicked")
        if(tern0){
        btn.innerHTML ="O"
        btn.style.color="#725ac1"
        tern0=false
        check++
        // console.log("che",check)
        btn.disabled=true
    }else{
        btn.innerHTML ="X"
        btn.style.color="#242038"
        tern0=true
        check++
        // console.log("che",check)
        btn.disabled=true
    }
     
    winner(btn)
    })
    
    
})
function winner(recev){
    for(var patern of winingPatern){
        // console.log(patern[0], patern[1],patern[2])
        // console.log(gameBtn[patern[0]].innerHTML, gameBtn[patern[1]].innerHTML,gameBtn[patern[2]].innerHTML)
        var patern1= gameBtn[patern[0]].innerHTML
        var patern2=gameBtn[patern[1]].innerHTML
        var patern3=gameBtn[patern[2]].innerHTML
        if(patern1 != "" && patern2 !="" && patern3 !="" ){
            if(patern1 === patern2 && patern2 === patern3){
                // console.log("winner" ,recev.innerHTML)
                // showWinnwe.innerHTML=` Winner Is ${recev.innerHTML}`
                //  var winn =` Winner Is ${recev.innerHTML}`
                 showwinneerBg()
                // body.innerHTML=winn
                contanier.classList.add("hide");

                
            }
            if(check >= 9){
                drawGame()
                showWinnwe.innerHTML=`Game Was Draw `

            }
            
        }
    }
}
function resartGame(){
 for(var btn of gameBtn){
    btn.innerHTML="";
    btn.disabled=false
 }   
}


function drawGame(){
    if(check >= 9){
    for(var btn of gameBtn){
    btn.innerHTML="";
    btn.disabled=false
    check=0
    }
}};
function pagain(){
    resartGame()
    body.innerHTML=""
    contanier.classList.remove("hide")
}
function showwinneerBg(){

    
    if(tern0 == false){
        let winn =` Winn Is ${player[0]} <br/> <button class="me"onclick="startagain()">start</button>  <button class="me" onclick="pagain()" > try again </button>`
                body.innerHTML=winn
        console.log(player[0])
    }else{
        let winn =` Winner Is ${player[1]} <br/> <button class="me"onclick="startagain()">start</button> <button class="me" onclick="pagain()" > try again </button>`
                body.innerHTML=winn
        console.log(player[1])
    }
}
let empty = ["", "","","","","","","",""]
// console.log(empty.length)

function playerterStart(){
    var from =`
    <div class="form">
        <h1>Enter Players Name</h1>
        <input id="Player1" type="text" placeholder="Enter Player 1 Name">
        <input id="Player2" type="text" value ="Robo">
        <button onclick="getRobo()">Play Game With robot</button>
    </div>
    `;
    document.querySelector(".h1body").classList.add("hide")
    body.innerHTML= from;
   const container = document.querySelector(".gamecon")
   container.classList.add("hide")
    
}
let RoboCon =document.querySelector("#Robo");
RoboCon.classList.add("hide")
// console.log(RoboCon)
function getRobo(){
    var player1 = document.getElementById("Player1");
    var player2 = document.getElementById("Player2");
    // console.log(player1.value ,player2.value)
    if(player1.value !== "" ){
        // RoboCon.classList.remove("hide")
        const choce =`<h1 style="text-align:center;">Chouse Mode</h1>  <br/><button class="me" onclick="chose2()">easy</button>  <button class="me" onclick="chose1()">hard</button> `
        body.innerHTML = choce ;
        // document.querySelector(".form").classList.add("hide");
        
    }else{
        contanier.classList.add("hide")
    }
    document.getElementById("h11").innerHTML=player1.value
    document.getElementById("h22").innerHTML=player2.value
    document.getElementById("h111").innerHTML=player1.value
    document.getElementById("h222").innerHTML=player2.value
    
    if(isCalled){
        getplayersRobo(player1.value,player2.value)
        isCalled=false;
    }
    // reset()
    return player1 ,player2
    
}
let playerRobo;
function getplayersRobo(p1,p2){
    console.log(p1, p2)
    const player1= p1
    const player2 =p2
    const players=[player1, player2]
    playerRobo = players;
}

let Robobtn=document.querySelectorAll(".g_btn");
 let current = "X";
Robobtn.forEach((btn ,i)=>{
    btn.addEventListener("click",()=>{
        if(empty[i] ==="" && current === "X"){
            btn.innerHTML="X"
            btn.style.color="black"
            // console.log(btn,i)
            empty[i]="X"
            current ="O"
            if(checkwinner() || draw()) return;
            robot()
        }
        
    })
})

function robot(){
    let boart =[]
    for(let i = 0; i < empty.length; i++){
        if(empty[i] === ""){
            boart.push(i)
        }
    }
    if (boart.length === 0 )return;
    let rendomindex = boart[Math.floor(Math.random()*boart.length)]
    
    
   Robobtn[rendomindex].innerHTML= "O"
  
   empty[rendomindex]="O"
   if(checkwinner() || draw()) return;
   current="X"

}
 function checkwinner(){
   let winingPatern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [6,4,2]
]

for(let pattern of winingPatern){
    let [a,b,c] = pattern;
    if(empty[a] && empty[a] === empty[b] && empty[b] === empty[c]){
    //   console.log(empty[a] + "winner")
    //   alert(empty[a] + "winner")
      showwin(empty[a])
      disabled()  
    } 
}
  return false;
 }
   function draw(){
    if(!empty.includes("")){
        alert("draw game")
        reset()
        return true
    }
    return false;
   }
   function disabled(){
    Robobtn.forEach((btn)=>{
        btn.disabled = true;
    })
   }

function reset(){
    empty =["","","","","","","","",""]
    // console.log(empty)
    Robobtn.forEach((btn)=>{
        btn.innerHTML ="";
        btn.disabled =false;
    })

    body.innerHTML=""
    // document.querySelector(".h1body").classList.add("hide")
    RoboCon.classList.remove("hide")    

}
function showwin( empty){
    if(empty === "X"){
        let winn =` Winn Is ${playerRobo[0]} <br/> <button class="me" onclick="startagain()">start</button>  <button class="me" onclick="reset()">Try Again</button>  `
                body.innerHTML=winn
        // console.log(playerRobo[0])
        // console.log(RoboCon.className)
        RoboCon.classList.add("hide")       
        // reset()
    }else{
        let winn =` Winn Is ${playerRobo[1]} <br/> <button class="me" onclick="startagain()">start</button>  <button class="me" onclick="reset()">Try Again</button> `
                body.innerHTML=winn
        // console.log(playerRobo[1])
        RoboCon.classList.add("hide")
        // reset()
    }
}

function startagain(){
    console.log("hello word!")
    body.innerHTML="";
    document.querySelector(".h1body").classList.remove("hide")
    let con =document.querySelector("#game")
    console.log(con.className ="gamecon")
    // player 2 player
    let container = document.querySelector(".main")
    container.classList.add("hide")
    // player 2 robot
    let rfobocn = document.querySelector("#Robo")
    rfobocn.classList.add("hide")

    resartGame()
    
}
function tran(){
     bord =["","","","","","","","",""]
    // console.log(empty)
    hardbtns.forEach((btn)=>{
        // console.log("khali")
        btn.innerHTML ="";
        btn.disabled =false;
})
};
const chose2=()=>{
    body.innerHTML=""
    reset()
    RoboCon.classList.remove("hide")
}
var hardcon =document.querySelector("#Robohard")
    hardcon.classList.add("hide")
const chose1=()=>{
    body.innerHTML=""
    var hardcon =document.querySelector("#Robohard")
    tran()
    hardcon.classList.remove("hide")
}

// hard ai robo
let p = true;
const hardbtns = document.querySelectorAll(".hg_btn")
// console.log(hardbtns)
// const winingPatern=[
//     [0,1,2],
//     [0,3,6],
//     [0,4,8],
//     [1,4,7],
//     [2,5,8],
//     [3,4,5],
//     [6,7,8],
//     [6,4,2]
// ]
let bord =["","","","","","","","",""]
// console.log(bord.length)
hardbtns.forEach((btn,i)=>{
    btn.addEventListener("click",()=>{
        if(p === true){
        btn.innerHTML="X"
        btn.style.color="red"
        btn.disabled = true;
        bord[i]="X";
        // console.log(bord[i], bord)
        if(checkwinnerhard() || draw())return
            p=false;
        robothard()
        }
        
    })
})

const robothard= ()=>{

    let move = findwinner("O")
    if(bord[move] === "" && p === false){
   
    bord[move]="O" 
    hardbtns[move]  .innerHTML = "O"
    hardbtns[move].style.color="blue"
    hardbtns[move].disabled = true;
    p = true;
   
        
   
    }
    // console.log("winner O finnd index" , move)
    
    if( move === null){
        move = findwinner("X")
       if(bord[move] === "" && p === false){
        bord[move]="O" 
        hardbtns[move]  .innerHTML = "O"
        hardbtns[move].style.color="blue"
        hardbtns[move].disabled = true;
        p = true;    
    }
        console.log("winner X block  finnd index" , move)
    }

    if( move === null){
        let empty=[]
    for(var i = 0 ; i < bord.length; i++){
        if( bord[i] === ""){        
            empty.push(i)
            // console.log("my empaty",empty)
        }
    }

    if( empty.length === 0)return
        move  = empty[Math.floor(Math.random()*empty.length)]
        console.log("after random index" , move)
    console.log(empty)
    if(bord[move] === "" && p === false){
    bord[move]="O" 
    hardbtns[move]  .innerHTML = "O"
    hardbtns[move].style.color="blue"
    hardbtns[move].disabled = true;  
    p = true;  
    }
    
    }
    checkwinnerhard() || draw();

}


 const findwinner = ( p )  => {
 
    for(let pattern of winingPatern){
//    console.log(pattern)
    let [a,b,c] = pattern;
    
    const values =[ bord[a], bord[b] ,  bord[c] ];
   
    if(values.filter( v=>v === p).length === 2 && values.includes("")){
        // console.log("faizan")
        return pattern[values.indexOf("")];
    }
}

    return null;
 }
  function checkwinnerhard(){
   var winingPatern=[   
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [6,4,2]
]

for(var pattern of winingPatern){
    let [a,b,c] = pattern;
    if(bord[a] && bord[a] === bord[b] && bord[b] === bord[c]){
      console.log(bord[a] + "winner")
    //   console.log("check winner")
    //   alert(bord[a]  + ""+ "winner")
      bgwinner(bord[a])
    //   hardcon.classList.add("hide")
    //   disabledhard()
       
    //   sets()
    } 
}
  return false;
 }
   function draw(){
    if(!bord.includes("")){
        alert("draw game")
        sets()
        return true
    }
    return false;
   }
   function disabledhard(){
    hardbtns.forEach((btn)=>{
        btn.disabled =false;
    })
   }
const sets =()=>{
    bord =["","","","","","","","",""]
    // console.log(empty)
    hardbtns.forEach((btn)=>{
        btn.innerHTML ="";
        btn.disabled =false;
        hardcon.classList.remove("hide")
    })

    body.innerHTML=""
    // document.querySelector(".h1body").classList.add("hide")
    // RoboCon.classList.remove("hide")
}
 const bgwinner =( winner)=>{
    console.log("hello player")
    if(winner === "X"){
        body.innerHTML=""
        let winn =` Winn Is ${playerRobo[0]} <br/> <button class="me" onclick="startagain()">start</button>  <button class="me" onclick="sets()">Try Again</button>  `
            body.innerHTML=winn
        // console.log(playerRobo[0])
        // console.log(RoboCon.className)
        hardcon.classList.add("hide")       
        // sets()
    }else{
        body.innerHTML=""
        let winn =` Winn Is ${playerRobo[1]} <br/> <button class="me" onclick="startagain()">start</button>  <button class="me" onclick="sets()">Try Again</button> `
                body.innerHTML=winn
        // console.log(playerRobo[1])
        hardcon.classList.add("hide")
        // sets()
    }

 }


function startagainhard(){
    console.log("hello word!")
    body.innerHTML="";
    document.querySelector(".h1body").classList.remove("hide")
    let con =document.querySelector("#game")
    con.className ="gamecon"
    tran()
}
