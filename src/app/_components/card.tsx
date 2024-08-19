"use client";
import React from "react";
import styled from "styled-components";
import { CardProps } from "../types/interfaceProduct";

const CardContainer = styled.div`
border: 1px solid #e0e0e0;
border-radius: 10px;
padding: 16px;
max-width:300px;
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
display: flex;
flex-direction:column;
align-items: center;
`;

const ProductImage = styled.img`
width:100%;
height:auto;
border-radius:10px;
`;

const ProductTitle = styled.p`
font-size: 1.5rem;
color: #333;
margin: 10px 0;
`;

const card: React.FC<CardProps> = ({product}) => {
return(
    <CardContainer>
        <ProductImage src={product.image} alt={product.title}/>
        <ProductTitle>{product.title}</ProductTitle>
    </CardContainer>
    );
};  
export default card;