
$(document).ready(function() {
    var restartButton = $('#restartB');
    var squares = $('td');
    
    // var restartButton = document.querySelector('#restartB');
    // var squares = document.querySelectorAll('td')
    var currentPlayer = '🐱';
    
    console.log(squares)
    function clearBoard() {
        // squares.each(square => {
        //     squares[square].textContent = ''
        // });
        squares.each(function()  {
            $(this).text='';
        });
    }
    
    restartButton.click(clearBoard);
    
    function checkWinner() {
        var winCombs = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // R --
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // C
            [0, 4, 8], [2, 4, 6] // D
        ];
    
        for (var combination of winCombs) {
            var [a, b, c] = combination;
            if (squares[a].textContent && squares[a].textContent === squares[b].textContent && squares[b].textContent === squares[c].textContent) {
                return true; 
            }
        }
    
        return false; 
    }
    
    function checkTie() {
        for (var square of squares) {
            if (!square.textContent) { //if it's empty 
                return false; 
            }
        }
        return true;
    }
    
    function changeXO() {
    
        if (!this.textContent ) {
            this.textContent = currentPlayer;
            if (checkWinner()) {
                alert('¡Player ' + currentPlayer + ' won!');
                clearBoard()
            } else if (checkTie()) {
                alert('¡Empate!');
                clearBoard()
            } else {
                currentPlayer = (currentPlayer === '🐱') ? '🐶' : '🐱'; //turn to the other player
            }
        }
    }
    
    
    
    
    squares.click(changeXO);
    // squares.forEach(square => {
    //     square.addEventListener('click',changeXO);
    // });
})