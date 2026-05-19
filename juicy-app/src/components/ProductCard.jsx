import { useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { updateProduct, deleteProduct } from "../services/api";


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

    //handle delete
    const handleDelete = async () => {
        console.log("Deleting:", product.id);
        const confirmDelete = window.confirm("are you sure you want to delete this product?");
        if (!confirmDelete) return;
        
        try {
        await deleteProduct(product.id);

        const updatedList = products.filter((p) => p.id !== product.id);
        setProducts(updatedList);
    } catch (error) {
        console.error("Delete failed", error);
    }
    };
  return (
    <div className="product-card">
        <h3>{product.name}</h3>
        <p className="p-desc">{product.description}</p>
        <p className="p-org"><strong>Origin:</strong> {product.origin}</p>
        

        {isEditing ? (
            <>
              <input
                type="number" 
                value={newPrice}
                onChange={(e) => setNewPrice(e.target.value)} />
               <div className="card-actions">
                <button className="save-btn" onClick={handleUpdate}>Save</button>
               </div>
            </>
            
        ) : (
            
           <>
      <p className="product-price">KSh {product.price}</p>

      <div className="card-actions">
        <button
          className="edit-btn"
          onClick={() => setIsEditing(true)}
        >
          Edit Price
        </button>

        <button
          className="delete-btn"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </>
  )}
  </div>
  );
}

export default ProductCard;
