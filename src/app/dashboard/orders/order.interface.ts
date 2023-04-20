export interface OrderModel{
    id: number | null;
    userId: number;
    client: string;
    products: ProductsAr[];
    status :string;
    dataEntry: Date;
    dateProcessed ? : Date; 
    // fecha de cuando se entrego el pedido: Fecha de cambio de `status` a `delivered`
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