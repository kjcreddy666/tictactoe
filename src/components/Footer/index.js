import './index.css';
import styled from 'styled-components';
import { GitHub, LinkedIn, Twitter, Instagram } from '@mui/icons-material';

const Name = styled.h1`
    color : #854ce6;
    font-size : 1.5rem;
    margin-bottom : 1rem;
`;

const SocialMediaIcon = styled.a`
    color : white;
    font-size : 1.5rem;
    &:hover {
        color : #854ce6;
    }
`;

const SocialMediaIcons = styled.div`
    width : 200px;
    height : 3rem;
    display : flex;
    justify-content : space-evenly;
    align-items : center;
    margin-bottom : 1rem;
`;


const Footer = () => {
    return (
        <footer className="footer">
            <Name className="name">Developed by Jay</Name>

            <SocialMediaIcons >
                <SocialMediaIcon href={"https://www.github.com/kjcreddy666"} target="_blank" ><GitHub /></SocialMediaIcon>
                <SocialMediaIcon href={"https://www.linkedin.com/in/kjcreddy666"} target="_blank" ><LinkedIn /></SocialMediaIcon>
                <SocialMediaIcon href={"https://twitter.com/kjcreddy666"} target="_blank" ><Twitter /></SocialMediaIcon>
                <SocialMediaIcon href={"https://www.instagram.com/kjcreddy666/"} target="_blank" ><Instagram /></SocialMediaIcon>
            </SocialMediaIcons>
        </footer>
    );
}

export  {Footer};