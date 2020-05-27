const Matrix = require('./Matrix')

class GoldRush extends Matrix{
    constructor(rowNum, colNum){
        super(rowNum, colNum)
        this.matrix[this.alter(0,0,1)]
        this.matrix[this.alter(4,4,2)]
        this.rowNum = rowNum
        this.colNum = colNum
    }

    movePlayer(player, direction){
        const playerCoord = this.findCoordinate(player)
        if(direction === 'right' && playerCoord.x < this.colNum){
            this.matrix[this.alter(playerCoord.y, playerCoord.x , '.')]
            this.matrix[this.alter(playerCoord.y, playerCoord.x+1 , player)]
        } else if (direction === 'left' && playerCoord.x > 0){
            this.matrix[this.alter(playerCoord.y, playerCoord.x , '.')]
            this.matrix[this.alter(playerCoord.y, playerCoord.x-1 , player)]
        } else if (direction === 'up' && playerCoord.y > 0){
            this.matrix[this.alter(playerCoord.y, playerCoord.x , '.')]
            this.matrix[this.alter(playerCoord.y-1, playerCoord.x , player)]
        } else if (direction === 'down' && playerCoord.y < this.rowNum){
            this.matrix[this.alter(playerCoord.y, playerCoord.x , '.')]
            this.matrix[this.alter(playerCoord.y+1, playerCoord.x , player)]
        }
    }
}

const board = new GoldRush(5,5)

board.print()

board.movePlayer(2,'up')
board.movePlayer(1,'down')
board.movePlayer(2,'left')

board.print()

// console.log(board.findCoordinate(2))
// board.movePlayer(1, "down")