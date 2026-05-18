function ProductGrid({ products }) {
     if (!products || products.length === 0) {
    return <p>No products available</p>;
  }
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "1rem",
      width: "100%",
      padding: "1rem"
    }}>
      {products.map((product) => (
        <div key={product.id} style={{
          border: "1px solid #ccc",
          padding: "1rem",
          borderRadius: "8px"
        }}>
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
