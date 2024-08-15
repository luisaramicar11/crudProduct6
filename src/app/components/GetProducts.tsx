import { IProduct } from "../types/InterfaceProduct";


export function getProducts(): IProduct[] { // función para obtener los productos almacenados en el localStorage.
    const products = localStorage.getItem('products');
    return products ? JSON.parse(products) : [];
}