import dice1 from "./assets/dice-1.svg"
import dice2 from "./assets/dice-2.svg"
import dice3 from "./assets/dice-3.svg"
import dice4 from "./assets/dice-4.svg"
import dice5 from "./assets/dice-5.svg"
import dice6 from "./assets/dice-6.svg"

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "black",
    }

    let diceImage;
    switch(props.value){
        case 1:
        diceImage = dice1;
        break;
        case 2:
        diceImage = dice2;
        break;
        case 3:
        diceImage = dice3;
        break;
        case 4:
        diceImage = dice4;
        break;
        case 5:
        diceImage = dice5;
        break;
        case 6:
        diceImage = dice6;
        break;
    }
    
    return (
        <button 
        disabled={!props.startgame}
            style={styles}
            onClick={props.hold}
            aria-pressed={props.isHeld}
            aria-label={`Die with value ${props.value}, 
            ${props.isHeld ? "held" : "not held"}`}
        ><img src={diceImage} alt="dice" /></button>
    )
}//{props.value}