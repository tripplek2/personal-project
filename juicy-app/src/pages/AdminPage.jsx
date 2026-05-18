import { useState, useContext } from "react";
import { ProductContext} from "../context/ProductContext";
import { addProduct } from "../services/api";

function AdminPage() {
    const { products, setProducts } = useContext(ProductContext);

    //form state
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        origin: "",
        price: ""
    });

    // handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    // handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        //send POST to backend
        const newProduct = await addProduct({
            ...formData,
            price: Number(formData.price)
        });

        //update UI
        setProducts([...products, newProduct]);

        //rest form
        setFormData({
            name: "",
            description: "",
            origin: "",
            price: ""
        });
    }
  return (
    <div>
     <h1>Shop</h1>

     <form onSubmit={handleSubmit}>
       <input 
         name="name" 
         placeholder="Product Name"
         value={formData.name}
         onChange={handleChange}
       />

       <input 
         name="description" 
         placeholder="Description"
         value={formData.description}
         onChange={handleChange}
       />

       <input 
         name="origin" 
         placeholder="Origin"
         value={formData.origin}
         onChange={handleChange}
       />

       <input 
         name="price" 
         placeholder="Price"
         value={formData.price}
         onChange={handleChange}
       />

       <button type="submit">Add Product</button>
        
     </form>

    </div>
  );
}

export default AdminPage;
