'use client';
import { IProduct } from "../types/interfaceProduct";

export function getProducts(): IProduct[] { // función para obtener los productos almacenados en el localStorage.
    const products : string | null = localStorage.getItem('products');
    return products ? JSON.parse(products) : [];
}