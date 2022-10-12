let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ["btton1", "button2", "button3", "button4"],
}

function newGame() {
    game.score = 0;
    game.playerMoves = [];
    game.currentGame = []
    showScore();
    addTurn();
}

function showScore() {
    document.getElementById("score").innerText = game.score;
}

function addTurn() {
    game.playerMoves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))])
    // showTurns();
}

module.exports = { game, newGame, showScore, addTurn };