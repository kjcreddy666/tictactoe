import '../../styles/fonts.css';
import styled from "styled-components";

const StyledHeading = styled.h1`
    color : #fff;
    margin : 1.5rem;
`;

const Heading = () => {
    return (
        <StyledHeading className="inconsolata" > Tic Tac Toe </StyledHeading>
    );
}

export {Heading};