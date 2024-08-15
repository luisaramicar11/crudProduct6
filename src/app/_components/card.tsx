"use client";
import React from "react";
import styled from "styled-components";
import { IProduct } from "../types/interfaceProduct";


const Card_container = styled.div`
border: 1px solid #e0e0e0;
border-radius: 10px;
padding: 16px;
max-width:300px;
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
display: flex;
flex-direction:column;
aling-item: center;
`;

const Product_image = styled.img`
width:100%;
heigth:auto;
boder-radius:10px;
`;

const Product_title = styled.p`
font-size: 1.5rem;
color: #333;
margin: 10px 0;
`;

const Product_description= styled.p`
font-size: 1.5rem;
color: #666;
text-aling: center;
margin: 10px 0;
`;
const Product_price = styled.p`
font-size: 1.2rem;
color:#000;
font-weight:bold;
margin: 10px 0;
`;

interface CardProps{
product:IProduct;

}

const card: React.FC<CardProps> = ({product}) => {
return(
    <Card_container>
        <Product_image src={product.image} alt={product.title}/>
        <Product_title>{product.title}</Product_title>
    
    </Card_container>
    );
};  
export default card;