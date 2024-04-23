import '../../styles/fonts.css'
import styled from 'styled-components';

const StyledWin = styled.div`
    width : 17.5rem;
    height : 20rem;
    color : #fff;
    background-color : #222222;
    border : 2px solid #fff;
    border-radius : 0.5rem;
    box-shadow : 1px 1px 2px ;
    position : absolute;
    top : 25vh;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    z-index : 100;
`;

const Box = styled.div`
    justify-self: center;
    align-self: center;
    text-align : center;
    font-weight: 900;
    font-size: 2.5rem;
    padding-top : 0.6rem;
    margin : 1.5rem 0;
    width: 4rem;
    height: 4rem;
    border: 2px solid #fff;
    border-radius: 0.25rem;
    background-color: transparent;
`;

const NewGame = styled.button`
    font-size : 0.9rem;
    font-weight : 700;
    cursor : pointer;
    width : fit-content;
    border : 2px solid #fff;
    border-radius : 0.25rem;
    color : #fff;
    background-color : transparent;
    padding : 0.5rem 0.75rem;
    margin-top : 1.25rem;

    &:hover {
        color : #000;
        background-color : #fff;
    }
`;

export const Win = (props) => {
    if(props.gameStatus !== "running") {
        return (
            <StyledWin>
                <h1 className='inconsolata'> Winner is </h1> 
                <Box className={`${props.gameStatus} comfortaa`}>
                    {props.gameStatus}
                </Box>
                <NewGame onClick={props.reset}>New Game</NewGame>
            </StyledWin>
        );
    }
};