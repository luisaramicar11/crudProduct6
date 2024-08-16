"use client";
import styled from "styled-components";
const FooterContainer = styled.footer`
background-color: #333;
color: white;
padding: 20px;
text-align: center;
margin-top: auto;
`;

const FooterText = styled.p`
margin: 0;
font-size: 14px;
`;

const FooterLinks = styled.div`
margin: 10px 0;
`;

const FooterLink = styled.a`
color: white;
margin: 0 10px;
text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
const Footer =()=>{
    return(
        <FooterContainer>
        <FooterLinks>
        <FooterLink href="/about">About Us</FooterLink>
        <FooterLink href="/contact">Contact</FooterLink>
        <FooterLink href="/privacy">Privacy Policy</FooterLink>
        </FooterLinks>
        <FooterText>
        © 2024 TechNova store. All rights reserved.
        </FooterText>
    </FooterContainer>
    )
}

export default Footer
