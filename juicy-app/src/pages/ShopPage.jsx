import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import SideBar from "../components/ProductGrid";
import ProductGrid from "../components/ProductGrid";

function ShopPage() {
    //get global products from context
    const { products } = useContext(ProductContext);
    //local state for search input
    const [search, setSearch] = useState("");

    //filter logic
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <div>
      <h1>Shop</h1>
      <SideBar search={search} setSearch={setSearch} /> 
      <ProductGrid products={filteredProducts} />   
    </div>
    
  );
}

export default ShopPage
