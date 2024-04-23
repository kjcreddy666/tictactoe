    import styled from 'styled-components';

    const StyledBox = styled.button`
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
        background-color: transparent;
    `;

    const Box = (props) => {
        if(props.isDisable) {
            return (
                <StyledBox className={props.className}  onClick={props.onClick} disabled>
                    {props.children}
                </StyledBox>
            );
        }
        return (
            <StyledBox className={props.className}  onClick={props.onClick}>
                {props.children}
            </StyledBox>
        );
    }

    export  {Box};