import './index.css'
import {useEffect, useState} from 'react';
import {Heading} from '../Heading';
import {NewGame} from '../NewGame';
import {Square} from '../Square';
import {Turns} from '../Turns';
import {Footer} from '../Footer';

const Game = () => {
    const [player, setPlayer] = useState(0);
    const [isTranslate, setIsTranslate] = useState(false);
    const initialBoxState = Array.from({ length: 9 }, () => ({ text: "", className: "", isDisable: false }));
    const [boxesState, setBoxesState] = useState(initialBoxState);

    const reset = () => {
        setBoxesState(Array.from({ length: 9 }, () => ({ text: "", className: "" , isDisable: false})));
        setPlayer(0);
        setIsTranslate(false);
    };

    const handleOnclick = (index) => {
        setBoxesState(prevState => {
            const newState = [...prevState];
            newState[index] = { 
                text: player % 2 === 0 ? "X" : "O", 
                className: player % 2 === 0 ? "x comfortaa" : "o comfortaa", 
                isDisable: true
            };
            return newState;
        });
        setIsTranslate(!isTranslate);
        setPlayer(p => p + 1);
    };

    const checkGameStatus = () => {
        const winStates = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
        const gameStatus = () => {
            for (let i = 0; i < winStates.length; i++) {
                const [a, b, c] = winStates[i];
                if (boxesState[a].text && boxesState[a].text === boxesState[b].text && boxesState[a].text === boxesState[c].text) {
                    return boxesState[a].text;
                }
            }
            if (player === 9) {
                return "draw";
            }
            return "running";
        };
    
        const status = gameStatus();
        if (status === "X") {
            alert("Player X wins!");
            reset();
        } else if (status === "O") {
            alert("Player O wins!");
            reset();
        } else if (status === "draw") {
            alert("It's a draw!");
            reset();
        }
    };

    useEffect(() => {
        setTimeout(() => {
            checkGameStatus();
        }, 50);
    }, [boxesState]);
    
    

    return (
        <div className="game">
            <Heading />
            <NewGame onClick={reset} />
            <Square boxesState={boxesState} handleOnclick={handleOnclick}/>
            <Turns isTranslate={isTranslate} />
            <Footer />
        </div>
    )
}

export default Game;