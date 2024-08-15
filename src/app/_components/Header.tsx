"use client";
import styled from 'styled-components';


const Header = styled.header`
  text-align: center;
  background-color: #a0d6f390; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 100px;
  position: fixed;
  width: 100%;
`;
const Nav = styled.nav`
  align-items: center;

`;
const Logo = styled.h2`
  font-size: 24px;
  color: #333; 
  font-weight: bold;
`;
const Li = styled.li`
  color: #333;
   font-size: 18px;
   border-radius:20px;
   border: solid 1px #ffffff;
   padding: 5px;
   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
   background-color: #afc9dd7e;
   list-style: none;
   :hover{
    color:beige;
   }
`
const Enlace= styled.a`
  text-decoration: none;
  color: #333;
   font-size: 18px;
   border-radius:20px;
   border: solid 1px #ffffff;
   padding: 5px;
   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
   background-color: #afc9dd7e;
   list-style: none;
   :hover{
    color:beige;
   }
`

const Ul = styled.ul`
  display: flex;
  justify-content:space-around;
  align-items: center;
  padding: 30px;
`
export const HeaderComponent: React.FC = () => (
  <Header>
        <Nav>
          
          <Ul>
            <Logo> TechNova Store</Logo>
            <Li><Enlace href="/">Home</Enlace></Li>
           
            <Li><Enlace href="/products">Productos</Enlace></Li>
          
            <Li><Enlace href="/create">Crear producto</Enlace></Li>
           
          </Ul>
        </Nav>
      </Header>
);


