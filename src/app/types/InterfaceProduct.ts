export interface IProduct {
    id: number,
    title: string,
    description: string,
    price: number
    image: string
}

export interface TableRowProducts{
    product: IProduct
}

export interface TableData{
    data: IProduct[]
}