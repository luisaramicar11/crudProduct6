import { useEffect, useState } from "react";
import { getProducts } from "./GetProducts";
import CreateForm from "./CreateForm";
import Table from "./table";
import { IProduct } from "../types/interfaceProduct";


const ProductManager = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    // Inicializa el estado con los productos del localStorage al montar el componente
    setProducts(getProducts());
  }, []);

  const addProduct = (newProduct: IProduct) => {
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  return (
    <div>
      <CreateForm  onAddProduct={addProduct} />
      <Table data={products} />
    </div>
  );
};

export default ProductManager;