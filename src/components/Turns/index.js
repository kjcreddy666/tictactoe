import './index.css';
import '../../styles/fonts.css';
import styled from 'styled-components';

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


const Turns = (props) => {
    return (
        <div className="turns">
            <BG className={props.isTranslate ? "translate" : ""}/>
            <Icon key="0" className={props.isTranslate ? "inactive comfortaa" : "active comfortaa"}> X </Icon>
            <Icon key="1" className={props.isTranslate ? "active comfortaa" : "inactive comfortaa"}> O </Icon>
        </div>
    )
}   

export  {Turns};