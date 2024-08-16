"use client";
import React from "react";
import Card from "../_components/card";
import { getProducts } from "../_components/GetProducts";  
import { IProduct } from "../types/interfaceProduct";
import styled from "styled-components";

const Div = styled.div`
display: flex;
flex-wrap: wrap;
gap: 16px;
`

const ProductsPage: React.FC = () => {
const products: IProduct[] = getProducts();

return (
    <div>
    <h1>Productos</h1>
    <Div>
        {products.length > 0 ? (
        products.map((product) => (
            <Card key={product.id} product={product} />
        ))
        ) : (
        <p>No hay productos disponibles</p>
        )}
    </Div>
    </div>
);
};

export default ProductsPage;



