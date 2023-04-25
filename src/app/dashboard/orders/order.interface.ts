export interface OrderModel{
    id: number | null,
    userId: number|null,
    client: string,
    products: ProductsAr[],
    status :string,
    dateEntry: Date,
    dateProcessed ? : Date,
   // time?:any
    // fecha de cuando se entrego el pedido: Fecha de cambio de `status` a `delivered`
}

export interface ProductsAr{
    qty: number;
    product: Products;
}
export interface Products {
    id?: number|null;
    name: string;
    price: number;
    image: string;
    type: string;
    dateEntry: Date;
  }