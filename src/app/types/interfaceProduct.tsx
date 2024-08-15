export interface IProduct { // interface para la creación del nuevo producto.
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
}

export interface IProductError { // interface que gestiona errores en la creación del producto.
    title: string;
    description: string;
    price: string;
    image: string;
}

  export interface CreateFormProps { // interface para la función que crea un nuevo producto.
    onAddProduct: (product: IProduct) => void;
  }

  export interface TableData {
    data : IProduct[]
  }

  export interface TableRowProducts {
    product : IProduct
  }