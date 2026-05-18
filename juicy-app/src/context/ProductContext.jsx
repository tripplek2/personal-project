import { createContext, useState, useEffect } from "react";
import { getProducts } from "../services/api";

// create context
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    //Global state
    const [products, setProducts] = useState(null);

    //fetch products when app loads
    useEffect(() => {
        getProducts().then((data) => {console.log("Fetched:", data);
        setProducts(data)
    });

    }, []);

    return (
        <ProductContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductContext.Provider>
    );
};