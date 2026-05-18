function ProductCard({ product }) {
  return (
    <div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p><strong>Origin:</strong>{product.origin}</p>
        <p><strong>{product.price}</strong></p>
      
    </div>
  );
}

export default ProductCard;
