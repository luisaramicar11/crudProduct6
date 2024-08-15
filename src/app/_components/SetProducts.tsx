
import { IProduct } from "../types/interfaceProduct";
import {getProducts} from "./GetProducts";

export function setProduct(product: IProduct): void { // Funcion para agregar un nuevo prooducto en el localStorage
    const products = getProducts();
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
}