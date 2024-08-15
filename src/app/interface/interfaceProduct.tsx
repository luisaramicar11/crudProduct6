export interface IProduct{
    id:number;
    title:string;
    description:string;
    price:number;
    image:string
}

export interface IProductError {
    title: string;
    description: string;
    price: string;
    image: string;
}

export interface CrudTableRowProps {
    product: IProduct;
  }

  export interface CrudTableRowData {
    data: IProduct[];
  }

  export interface CreateFormProps {
    onAddProduct: (product: IProduct) => void;
  }