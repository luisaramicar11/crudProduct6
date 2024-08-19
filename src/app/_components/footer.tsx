"use client";
import styled from "styled-components";

const FooterContainer = styled.footer`
  margin-top: 25px;
  text-align: center;
  width: 100%;
  height: 70px;
  background-color: #ffff;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.1);
`

const FooterLinks = styled.div`
  height: 20px;
  padding: 5px;
  display: flex;
  gap: 15px;
  justify-content: center;
`
const A = styled.a`
  text-decoration: none;
  color: black;

  &:hover {
    border-bottom: 1px solid lightgray;
}
`

const P = styled.p`
  font-size: small;
`

const Footer =()=>{
    return(
      <FooterContainer>
        <FooterLinks>
            <A href="">About Us</A>
            <A href="">Contact Us</A>
            <A href="">Privacy Policy</A>
        </FooterLinks>
        <P>©️ 2024 TechNova Store. All rights reserved.</P>
    </FooterContainer>
    )
}

export default Footer
