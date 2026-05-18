import { useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { updateProduct } from "../services/api";

function ProductCard({ product }) {
    if (!product) return null;
    const { products, setProducts } = useContext(ProductContext);

    const [isEditing, setIsEditing] = useState(false);
    const [newPrice, setNewPrice] = useState(product.price);

    // handle update
    const handleUpdate = async () => {
        const updated = await updateProduct(product.id, {
            price: Number(newPrice)
        });

        //update UI
        const updatedList = products.map((p) => p.id === product.id ? updated : p);
        setProducts(updatedList);
        setIsEditing(false);
    };
  return (
    <div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p><strong>Origin:</strong>{product.origin}</p>
        <p><strong>{product.price}</strong></p>

        {isEditing ? (
            <>
              <input 
                onChange={(e) => setNewPrice(e.target.value)} />

                <button onClick={handleUpdate}>Save</button>
            </>
            
        ) : (
            <>
            <p><strong>${product.price}</strong></p>
            <button onClick={() => setIsEditing(true)}>Edit Price</button>
            </>
        )}
      
    </div>
  );
}

export default ProductCard;
