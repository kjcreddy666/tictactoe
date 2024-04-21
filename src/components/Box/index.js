import styled from 'styled-components';

const StyledBox = styled.div`
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

const Box = (props) => {
    return (
        <StyledBox className={props.className} key={props.key} onClick={props.onClick}>
            {props.children}
        </StyledBox>
    );
}

export  {Box};