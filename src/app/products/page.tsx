"use client"
import React from "react";
import { IProduct } from "../interface/interfaceProduct";
import Card from "../components/card";
import { getProducts } from "../components/GetProducts";  


const ProductsPage: React.FC = () => {
const products: IProduct[] = getProducts();

return (
    <div>
    <h1>Productos</h1>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {products.length > 0 ? (
        products.map((product) => (
            <Card key={product.id} product={product} />
        ))
        ) : (
        <p>No hay productos disponibles</p>
        )}
    </div>
    </div>
);
};

export default ProductsPage;
