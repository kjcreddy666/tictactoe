import styled from "styled-components";

const StyledNewGame =  styled.button`
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

export const NewGame = (props) => {
    return (
        <StyledNewGame onClick={props.onClick}> New Game </StyledNewGame>
    );
}