var opciones = "piedra";
var opciones = "papel";
var opciones = "tijera";

function cachipum(player1, player2) {
    switch (player1) {
        case "piedra":
            switch(player2){
                case 'piedra':
                    console.log('empate ambos piedra')
                break;
                case 'tijera':
                    console.log('Jugador1 gana, piedra a tijera');
                break;
                case 'papel':
                    console.log('Jugador2 gana, papel gana a piedra');
                break;
                default:
                    console.log("Se olvido de jugar");
            }  
        break;
        case "papel":
            switch(player2){
                case 'piedra':
                    console.log('jugador1 gana a piedra')
                break;
                case 'tijera':
                    console.log('Jugador1 pierde contra tijera');
                break;
                case 'papel':
                    console.log('empate');
                break;
                default:
                    console.log("Se olvido de jugar");
            }  
        break;
        case "tijera":
            switch(player2){
                case 'piedra':
                    console.log('Jugador1 pierde contra piedra')
                break;
                case 'tijera':
                    console.log('empate');
                break;
                case 'papel':
                    console.log('Jugador1 gana a papel');
                break;
                default:
                    console.log("Se olvido de jugar");
            }  
        break;
        default:
        console.log("Se canceló la partida");
}
}


var animales = "perro";
function QueAnimalTeGusta(animales) {
    switch (animales) {
        case "gato":
            console.log ("Me gustan los gatos");
            break;
        case "perro":
            console.log ("Me gustan los perros");
            break;
        case "tortugas":
            console.log ("Me gustan las tortugas");
            break;
        default:
            console.log ("No me gustan los animales");
    }
    
}


// if (false === !true) {
//     console.log(false == true) } 
// else { 
//     console.log(true === !false) }




// var nombre = 'fede'

// nombre == 'fede' ? console.log('es bonita') : console.log('es fea') 
