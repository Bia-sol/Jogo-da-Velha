const intro= document.querySelector('.intro')
const btiniciaJogo= document.querySelector('#iniciaJogo')
const introMusic = new Audio ('./assets/audio/theme.mp3')

intro.addEventListener('click',iniciaPartida)
function iniciaPartida (){
    intro.style.display='none'
    stage.style.display='flex'
    introMusic.play()
}

const stage= document.querySelector('.stage');
const symbols = ['gon', 'killua'];
const player1 = []
const player2 = []
const board = []
let vencedor = 0
let currentPlayer = 0

let winStates =  [ 
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6] 
];


function pegaIdJogador (event){
    let itemClicado = event.target
    let idItemClicado =  event.target.id
        
    fazJogada(idItemClicado,itemClicado)   
}
stage.addEventListener('click',pegaIdJogador)



function addClass (itemClicado,id){
    
    itemClicado.classList.add(symbols[currentPlayer])
}


function fazJogada (id,item){
   

    if(!board.includes(id)){
        console.log('board incluido');
        board.push(id)
        board.sort()

        if(currentPlayer === 0){
           
            player1.push(Number(id))
            player1.sort()
            addClass(item,id)
            verificaVencedor(player1)
            currentPlayer++
        }else{
            player2.push(Number(id))
            player2.sort()
            addClass(item,id)
            verificaVencedor(player2)
            currentPlayer--
        }

    }else{
        alert('esse item já foi jogado');
    }
  
    
   
    verificaFim()
}


function verificaVencedor(player){
 

    winStates.forEach(item =>{
        let verification1 = player.includes(item[0])
        let verification2 = player.includes(item[1])
        let verification3 = player.includes(item[2])
     
        if(verification1 && verification2 && verification3 === true){
            vencedor++
            alert(`Fim de jogo, Jogador: ${symbols[currentPlayer].toUpperCase()} venceu!`);
            stage.removeEventListener('click',pegaIdJogador)

            reiniciaJogo()
            
            
        }

    })
  
    
}



function verificaFim(){
    if(board.length === 9 && vencedor === 0){
        setTimeout(() => {
            alert('Empatou!')
            stage.removeEventListener('click',pegaIdJogador)
            reiniciaJogo()
        }, 300);
        
    }
    

}


function reiniciaJogo (){
    setTimeout(() => {
        location.reload()
    }, 1000);
}






