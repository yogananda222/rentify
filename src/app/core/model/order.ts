import { Food } from "./food";
import { User } from "./user";

export interface Order {

    orderId: number;
    user: User;
    food: Food;
    quantity:number,
    totalPrice: number;
    ordeDate: number;
    orderTime: number; 
}

