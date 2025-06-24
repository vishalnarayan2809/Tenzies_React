import { useState, useRef, useEffect, use } from "react"
import Die from "./Die"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"
import MyStopwatch from "./components/StopWatch.jsx"

export default function App() {
    const [dice, setDice] = useState(() => generateAllNewDice())
    const buttonRef = useRef(null)
    const gameWon = dice.every(die => die.isHeld) &&
        dice.every(die => die.value === dice[0].value)
    const[startgame,setStartgame] = useState(false) 


    useEffect(() => {
        if (gameWon) {
            buttonRef.current.focus()
        }
    }, [gameWon])

    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            }))
    }

    
    function rollDice() {
        if (!gameWon && startgame) {
            setDice(oldDice => oldDice.map(die =>
                die.isHeld ?
                    die :
                    { ...die, value: Math.ceil(Math.random() * 6) }
            ))
  
        } else {
            setDice(generateAllNewDice())
            setStartgame(true)
        }
    }

    function hold(id) {
        setDice(oldDice => oldDice.map(die =>
            die.id === id ?
                { ...die, isHeld: !die.isHeld } :
                die
        ))
    }

    const diceElements = dice.map(dieObj => (
        <Die
            key={dieObj.id}
            value={dieObj.value}
            isHeld={dieObj.isHeld}
            hold={() => hold(dieObj.id)}
            startgame={startgame}
        />
    ))


    return (
        <main>
            {gameWon && <Confetti />}
            {startgame && <MyStopwatch gameWon={gameWon}/>}
            <div aria-live="polite" className="sr-only">
                {gameWon && <p>Congratulations! You won! Press "New Game" to start again.</p>}
            </div>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container" style={{filter: startgame?'':"blur(4px)"}}>
                {diceElements}
            </div>
            <button  ref={buttonRef} className="roll-dice" onClick={rollDice} >
                {gameWon ? "New Game" : startgame ? "Roll" : "Start Game"}
            </button>
        </main>
    )
}