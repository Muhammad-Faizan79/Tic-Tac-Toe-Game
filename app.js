var gameBtn =document.querySelectorAll(".btn")
var showWinnwe = document.querySelector("#h1")
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
gameBtn.forEach(  (btn) => {
    btn.addEventListener("click",()=>{
        console.log("box was clicked")
        if(tern0){
        btn.innerHTML ="O"
        btn.style.color="#725ac1"
        tern0=false
        check++
        console.log("che",check)
        btn.disabled=true
    }else{
        btn.innerHTML ="X"
        btn.style.color="#242038"
        tern0=true
        check++
        console.log("che",check)
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
                console.log("winner" ,recev.innerHTML)
                showWinnwe.innerHTML=` Winner Is ${recev.innerHTML}`
                resartGame()
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
// drowGame()