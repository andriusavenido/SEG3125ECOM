import { createContext, useState } from "react";

export interface GameProps{
        title: string;
        img: string;
        platform: string;
        genre: string[];
        age_rating: string;
        price: number;
        og_price: number;
        tags: string[];
        release_date: string;
        developer: string;
        availability: string[];
}

export interface ConsoleProps{
    title: string,
    img: string,
    brand: string,
    price: number,
    og_price:number,
    tags:string[],
    release_date: string,
    availability: string[]
}

export type CartItem = GameProps | ConsoleProps;

interface CartContextType{
    cartItems: CartItem[],
    addToCart: (item:CartItem) => void;
    removeFromCart: (item:CartItem) => void;
    totalPrice:number;
}

export const CartContext = createContext<CartContextType>(
    {
        cartItems: [],
        addToCart: () => {},
        removeFromCart: () => {},
        totalPrice: 0
    }
);

interface CartProviderProps{
    children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({children}) =>{
     const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (item: CartItem) => {
        setCartItems(prevItems => [...prevItems, item]);
    };

    const removeFromCart = (item: CartItem) => {
        setCartItems(prevItems => {
        const index = prevItems.findIndex(cartItem => cartItem.title === item.title);
        if (index === -1) return prevItems;

        const newItems = [...prevItems];
        newItems.splice(index, 1); // Remove only the first match
        return newItems;
    });
    };

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

    return(
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
}