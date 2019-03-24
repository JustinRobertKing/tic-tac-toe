// A user should be able to click on different squares to make a move.
// Every click will alternate between marking an X and O
// Upon marking of an individual cell, use JavaScript to add a class to each cell to display the separate players.
// A cell should not be able to be replayed once marked.
// You should not be able to click remaining empty cells after the game is over.
// Add a reset button that will clear the contents of the board.
// Display a message to indicate which turn is about to be played.
// Detect draw conditions (ties/cat's game)
// Detect winner: Stop game and declare the winner if one player ends up getting three in a row.
var party
// establish who's turn it is
var whosTurn = "nick"
// identify squares on game board
var squares = document.querySelectorAll('#game-board .box')
// 
function randomizeStart() {
	if (Math.random() > .5) {
		whosTurn = "nick";
	} else {
		whosTurn = "jack";
	}
	document.getElementById('whos-turn').textContent = whosTurn + " starts this round";
}

function addMarkListenersToSquares() {
	// add event listener to each square
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener('click', markSquare);
	}
}

function removeMarkListenersFromSquares() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].removeEventListener('click', markSquare);
	}
}

function markSquare() {
	// Determine appropriate marker and add it to the clicked square
	var nickImage = document.createElement('img');
	nickImage.src = "./img/Nick.png";
	var jackImage = document.createElement('img');
	jackImage.src = "./img/Jack.png";
	if (whosTurn === "nick") {
		this.appendChild(nickImage)
		this.setAttribute('data-marked', "nick")
	} else if (whosTurn === "jack") {
		this.appendChild(jackImage)
		this.setAttribute('data-marked', "jack")
	}
	this.removeEventListener('click', markSquare);
	if (checkWinCondition() === "nick") {
		removeMarkListenersFromSquares();
		nickWin();
	} else if (checkWinCondition() === "jack") {
		removeMarkListenersFromSquares();
		jackWin();
	} else if (checkWinCondition() === "draw") {
		draw();
	}
	// Display "Start Over" text
	if (checkWinCondition()) {
		document.getElementById('reset').textContent = "Start Over";
	}
	changeTurn();
}

function checkWinCondition() {
	if (squares[0].getAttribute('data-marked') === "nick" &&
		squares[1].getAttribute('data-marked') === "nick" &&
		squares[2].getAttribute('data-marked') === "nick") {
		return "nick";
	} else if (squares[3].getAttribute('data-marked') === "nick" &&
		squares[4].getAttribute('data-marked') === "nick" &&
		squares[5].getAttribute('data-marked') === "nick") {
		return "nick";
	} else if (squares[6].getAttribute('data-marked') === "nick" &&
		squares[7].getAttribute('data-marked') === "nick" &&
		squares[8].getAttribute('data-marked') === "nick") {
		return "nick";
	} else if (squares[0].getAttribute('data-marked') === "nick" &&
		squares[3].getAttribute('data-marked') === "nick" &&
		squares[6].getAttribute('data-marked') === "nick") {
		return "nick";
	} else if (squares[1].getAttribute('data-marked') === "nick" &&
		squares[4].getAttribute('data-marked') === "nick" &&
		squares[7].getAttribute('data-marked') === "nick") {
		return "nick";
	} else if (squares[2].getAttribute('data-marked') === "nick" &&
		squares[5].getAttribute('data-marked') === "nick" &&
		squares[8].getAttribute('data-marked') === "nick") {
		return "nick";
	} else if (squares[0].getAttribute('data-marked') === "nick" &&
		squares[4].getAttribute('data-marked') === "nick" &&
		squares[8].getAttribute('data-marked') === "nick") {
		return "nick";
	} else if (squares[2].getAttribute('data-marked') === "nick" &&
		squares[4].getAttribute('data-marked') === "nick" &&
		squares[6].getAttribute('data-marked') === "nick") {
		return "nick";
	} else if (squares[0].getAttribute('data-marked') === "jack" &&
		squares[1].getAttribute('data-marked') === "jack" &&
		squares[2].getAttribute('data-marked') === "jack") {
		return "jack";
	} else if (squares[3].getAttribute('data-marked') === "jack" &&
		squares[4].getAttribute('data-marked') === "jack" &&
		squares[5].getAttribute('data-marked') === "jack") {
		return "jack";
	} else if (squares[6].getAttribute('data-marked') === "jack" &&
		squares[7].getAttribute('data-marked') === "jack" &&
		squares[8].getAttribute('data-marked') === "jack") {
		return "jack";
	} else if (squares[0].getAttribute('data-marked') === "jack" &&
		squares[3].getAttribute('data-marked') === "jack" &&
		squares[6].getAttribute('data-marked') === "jack") {
		return "jack";
	} else if (squares[1].getAttribute('data-marked') === "jack" &&
		squares[4].getAttribute('data-marked') === "jack" &&
		squares[7].getAttribute('data-marked') === "jack") {
		return "jack";
	} else if (squares[2].getAttribute('data-marked') === "jack" &&
		squares[5].getAttribute('data-marked') === "jack" &&
		squares[8].getAttribute('data-marked') === "jack") {
		return "jack";
	} else if (squares[0].getAttribute('data-marked') === "jack" &&
		squares[4].getAttribute('data-marked') === "jack" &&
		squares[8].getAttribute('data-marked') === "jack") {
		return "jack";
	} else if (squares[2].getAttribute('data-marked') === "jack" &&
		squares[4].getAttribute('data-marked') === "jack" &&
		squares[6].getAttribute('data-marked') === "jack") {
		return "jack";
	} else if (squares[0].getAttribute('data-marked') &&
		squares[1].getAttribute('data-marked') &&
		squares[2].getAttribute('data-marked') &&
		squares[3].getAttribute('data-marked') &&
		squares[4].getAttribute('data-marked') &&
		squares[5].getAttribute('data-marked') &&
		squares[6].getAttribute('data-marked') &&
		squares[7].getAttribute('data-marked') &&
		squares[8].getAttribute('data-marked')) {
		return "draw";
	}
}

var nickScore = 0
var jackScore = 0

function nickWin() {
	console.log("nickWin");
	nickScore++;
	document.getElementById('nick-score').textContent = nickScore;
}

function jackWin() {
	console.log("jackWin")
	jackScore++;
	document.getElementById('jack-score').textContent = jackScore;
}

function draw() {
	console.log("draw")
}

function changeTurn() {
	if (!checkWinCondition() && whosTurn === "nick") {
		whosTurn = "jack";
	} else if (!checkWinCondition() && whosTurn === "jack") {
		whosTurn = "nick";
	}
	if (checkWinCondition() === "draw") {
		document.getElementById('whos-turn').style.fontSize = "40px"
		document.getElementById('whos-turn').textContent = "You both suck";
	} else if (checkWinCondition()) {
		document.getElementById('whos-turn').style.fontSize = "50px"
		document.getElementById('whos-turn').textContent = whosTurn + " wins!";
	} else {
		document.getElementById('whos-turn').textContent = whosTurn + "'s move";
	}
} 

function reset() {
	console.log("clear")
	for (var i = 0; i < squares.length; i++) {
		// Get the <ul> element with id="myList"
		while (squares[i].hasChildNodes()) {
			squares[i].removeChild(squares[i].firstChild)
		}
		squares[i].removeAttribute('data-marked')
		addMarkListenersToSquares()
		document.getElementById('whos-turn').style.fontSize = "30px"
		randomizeStart() 
	}
}

document.getElementById('reset').addEventListener('click', reset)
randomizeStart()
addMarkListenersToSquares()