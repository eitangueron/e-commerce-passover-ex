class Renderer {
     renderBoard(matrix, colNum, rowNum, playersScores){
        $('#board').empty()
         $('#board').css('grid-template-columns',`repeat(${colNum},1fr)`)           //change 5 to adjustable to input
         $('#board').css('grid-template-rows',`repeat(${rowNum},1fr)`)
        for(let row of matrix){
            for(let box of row){
                if(box === 'c'){
                    
                    $('#board').append('<div class=box><img src="https://img.icons8.com/doodle/48/000000/gold-bars--v1.png"/ class="coin"></div></div>')
                } else if( box === 1){
                    $('#board').append('<div class=box><div class="player1">1</div></div>')
                } else if(box === 2){
                    $('#board').append('<div class=box><div class="player2">2</div></div>')
                } else {
                    $('#board').append('<div class=box><div class="empty"></div></div>')
                }
            }
        }
        $('#player1').text('Player 1:' + playersScores['1'])      
        $('#player2').text('Player 2:' + playersScores['2'])
     }
}
