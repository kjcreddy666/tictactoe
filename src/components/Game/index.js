import './index.css'
import {useState} from 'react';
import {Heading} from '../Heading';
import {NewGame} from '../NewGame';
import {Square} from '../Square';
import {Turns} from '../Turns';
import {Footer} from '../Footer';

const Game = () => {
    const [player, setPlayer] = useState(0);
    const [isTranslate, setIsTranslate] = useState(false);
    const [boxesState, setBoxesState] = useState(Array.from({ length: 9 }, () => ({ text: "", className: "" })));
    const winStates = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,3,7], [2,5,8], [0,4,8], [2,4,6]];

    const handleOnclick = (index) => {
        setBoxesState(prevState => {
            const newState = [...prevState];
            newState[index] = { text: player % 2 === 0 ? "X" : "O", className: player % 2 === 0 ? "x comfortaa" : "o comfortaa" };
            return newState;
        });
        setPlayer(player + 1);
        setIsTranslate(!isTranslate);
    };

    const reset = () => {
        setBoxesState(Array.from({ length: 9 }, () => ({ text: "", className: "" })));
        setPlayer(0);
        setIsTranslate(false);
    };

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