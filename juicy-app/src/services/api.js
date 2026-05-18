const BASE_URL = "http://localhost:3001/";

// store info

// GET-fetch store details
export const getStoreInfo = async () => {
    try {
        const res = await fetch(`${BASE_URL}/store-info`);

        if (!res.ok) {
            throw new Error("Failed to fetch");
        }
        return await res.json();
    } catch (error) {
        console.error("Error fetching store info");
        return [];
    }
};

// Product info

// GET-fetch all products
export const getProducts = async () => {
    try {
        const res = await fetch(`${BASE_URL}/juice`);

        if(!res.ok) {
            throw new Error("Failed to fetch products");
        }

        return await res.json();
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};

//POST-add new product
export const addProduct = async (product) => {
    try {
        const res = await fetch(`${BASE_URL}/juice`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
        });

        if (!res.ok) {
            throw new Error("Failed to add product");
        }

        return await res.json();
    } catch (error) {
        console.error("Error adding product", error);
    }
};

//PATCH-update part of a product
export const updateProduct = async (IdleDeadline, updateData) => {
    try {
        const res = await fetch(`${BASE_URL}/juice/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateData)
        });

        if (!res.ok) {
            throw new Error("Failed to update product");
        }

        return await res.json();
    } catch (error) {
        console.error("Error updating product");
    }
};

// DELETE delete product
export const deleteProduct = async (id) => {
    try {
        const res = await fetch(`${BASE-URL}/juice/${id}`, {
            method: "DELETE"
        });

        if (!res.ok) {
            throw new Error("Failed to delete product");
        }

        return true;
    } catch (error) {
        console.error("Error deleting product", error);
    }
};