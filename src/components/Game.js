import './Game.css'
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useState } from 'react';


const Heading = styled.h1`
    color : #fff;
    margin : 1.5rem;
`;

const NewGame = styled.button`
    cursor : pointer;
    color : #fff;
    font-weight : 700;
    background-color : transparent;
    border : 2px solid #fff;
    border-radius : 0.25rem;
    padding : 0.5rem 1rem;

    &:hover {
        color : #000;
        background-color : #fff;
    }
`;

const Box = styled.div`
    justify-self: center;
    align-self: center;
    text-align : center;
    font-weight: 900;
    font-size: 5rem;
    padding-top : 0.5rem;
    margin : 0.25rem 0;
    cursor: pointer;
    width: 6rem;
    height: 6rem;
    border: 2px solid #fff;
    border-radius: 0.25rem;
`;


const Square = styled.div`
    display : grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap : 0.25rem;
    width : 20.5rem;
    height : 20.5rem;
    margin : 1.75rem 0;
`;

const Turns = styled.div`
    width : 8rem;
    height : 4rem;
    display : flex;
    margin-bottom : 5rem;
`;

const Icon = styled.div`
    width : 4rem;
    height : 4rem;
    display : flex;
    background-color : transparent;
    justify-content : center;
    align-items : center;
    border-radius : 15%;
    padding-top : 0.25rem;
    font-size : 3rem;
    font-weight : 900;
`;

const BG = styled.div`
    width : 4rem;
    height : 3.75rem;
    border-radius : 15%;
    margin-top : 0rem;
    background-color : #49ff58;
    position : absolute;   
    transition: transform 0.3s ease; 
    z-index : -1;
`;

const Footer = styled.footer`
    width : 100%;
    height : 100%;
    display : flex;
    flex-direction : column;
    justify-content : end;
    align-items : center;
`;

const Name = styled.h1`
    color : #854ce6;
    font-size : 1.5rem;
    margin-bottom : 1.5rem;
`;

const SocialMediaIcons = styled.div`
    width : 200px;
    display : flex;
    justify-content : space-evenly;
    align-items : center;
    margin-bottom : 1rem;
`;

const SocialMediaIcon = styled.a`
    color : white;
`;

const Game = () => {
    const [player, setPlayer] = useState(0);
    const [isTranslate, setIsTranslate] = useState(false);
    const [boxesState, setBoxesState] = useState(Array.from({ length: 9 }, () => ({ text: "", className: "" })));
    const winStates = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,3,7], [2,5,8], [0,4,8], [2,4,6]];

    const gameStatus = () => {
        winStates.forEach((winState) => {
            if(boxesState[winState[0]].className === boxesState[winState[1]].className &&
                boxesState[winState[1]].className === boxesState[winState[2]].className) {
                console.log("Win");
            }
        });
    }

    const handleOnclick = (index) => {
        setBoxesState(prevState => {
            const newState = [...prevState];
            newState[index] = { text: player % 2 === 0 ? "X" : "O", className: player % 2 === 0 ? "x" : "o" };
            return newState;
        });
        setPlayer(player + 1);
        setIsTranslate(!isTranslate);

        gameStatus();
    };

    const reset = () => {
        setBoxesState(Array.from({ length: 9 }, () => ({ text: "", className: "" })));
        setPlayer(0);
        setIsTranslate(false);
    };

    const boxes = boxesState.map((box, index) => (
        <Box key={index} onClick={() => handleOnclick(index)} className={box.className}>
            {box.text}
        </Box>
    ));
    

    return (
        <div className="game">
            <Heading className="heading">TIC-TAC-TOE</Heading>
            <NewGame onClick={reset}>New Game</NewGame>

            <Square>
                {boxes}
            </Square>

            <Turns>
                <BG className={isTranslate ? "translate" : ""}/>
                <Icon key="0" className={isTranslate ? "inactive icon" : "active icon"}> X </Icon>
                <Icon key="1" className={isTranslate ? "active icon" : "inactive icon"}> O </Icon>
            </Turns>

            <Footer>
                <Name>Developed by Jay</Name>

                <SocialMediaIcons>
                    <SocialMediaIcon href={"#"} ><FacebookIcon /></SocialMediaIcon>
                    <SocialMediaIcon href={"#"} ><TwitterIcon /></SocialMediaIcon>
                    <SocialMediaIcon href={"#"} ><LinkedInIcon /></SocialMediaIcon>
                    <SocialMediaIcon href={"#"} ><InstagramIcon /></SocialMediaIcon>
                </SocialMediaIcons>
            </Footer>
        </div>
    )
}

export default Game;