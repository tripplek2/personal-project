import { createContext, useState, useEffect, Children } from "react";
import { getProducts } from "../services/api";

// create context
export const ProductContext = createContext();

export const ProductProvider = ({ Children }) => {
    //Global state
    const [products, setProducts] = useState([]);

    //fetch products when app loads
    useEffect(() => {
        getProducts().then((data) => setProducts(data));

    }, []);

    return (
        <ProductContext.Provider value={{ products, setProducts }}>
            {Children}
        </ProductContext.Provider>
    );
};