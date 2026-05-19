function ProductGrid({ products }) {
     if (!products || products.length === 0) {
    return <p>No products available</p>;
  }
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product-card" key={product.id} >
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.origin}</p>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
