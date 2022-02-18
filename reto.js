//  var opcionOne = "piedra";
//  var opcionTwo = "papel";
//  var opcionThree = "tijera";

// var jugador1 = "piedra" ;
// var jugador2 = "fede";

// if (jugador1 == opcionOne && jugador2 == opcionThree) {
//     console.log ("jugador1 ganó");
// } else if (jugador2 == opcionTwo && jugador1 == opcionOne) {
//     console.log ("Fede ganó");
// } else if (jugador2 == opcionTwo && jugador1 == opcionThree) {
//     console.log ("Fede pierde");
// } else if (jugador1 == opcionThree && jugador2 == opcionOne) {
//     console.log ("compu pierde");
// } else (jugador1 == opcionThree && jugador2 == opcionThree) {
//     console.log ("Empate");
// }

var opcionOne = "piedra";
var opcionTwo = "papel";
var opcionThree = "tijera";


function game (player1, player2) {
    if (player1 == opcionOne && player2 == opcionThree) {
        console.log ("player1 win");
    }
    else if (player1 == opcionTwo && player2 == opcionOne) {
        console.log ("player1 win");
    }
    else if (player1 == opcionThree && player2 == opcionTwo) {
        console.log ("player2 win");
    }
    else if (player1 == opcionOne && player2 == opcionThree) {
        console.log ("player2 win");
    }
    else {
        console.log ("Tie!!");
    }
} 


game('piedra', 'tijera')

