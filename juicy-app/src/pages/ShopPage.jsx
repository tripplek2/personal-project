import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import SideBar from "../components/SideBar";
import ProductGrid from "../components/ProductGrid";


function ShopPage() {
    //get global products from context
    const { products } = useContext(ProductContext);
    console.log("shop products:", products);
    //local state for search input
    const [search, setSearch] = useState("");

    if (!products) return <h2>Loading...</h2>;
    

    //filter logic
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className="page-container">
      <h1>Juice Shop🧃</h1>

      <div className="shop-layout">
      <SideBar search={search} setSearch={setSearch} /> 
      <ProductGrid products={filteredProducts} />  
      </div> 
    </div>
    
  );
}

export default ShopPage;
