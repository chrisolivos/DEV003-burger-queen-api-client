export interface OrderModel{
    id: number | null;
    userId: number;
    client: string;
    products: ProductsAr[];
    status :string;
    dataEntry: Date;
}

export interface ProductsAr{
    qty: number;
    product: Products;
}
export interface Products {
    id: number;
    name: string;
    price: number;
    image: string;
    type: string;
    dateEntry: Date;
  }