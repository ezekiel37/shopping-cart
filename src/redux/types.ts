export interface Product {
    id: number;
    title: string;
    image : string;
    price :number;
    stock:number;
}

export interface Cart extends Product {
    qty: number;
}

interface Shop {
    products : Product[];
    cart : Cart[];
}

export interface Store {
    shop : Shop;
}