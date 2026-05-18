function ProductGrid({ products }) {
    if (products) return <p>Loading...</p>
  return (
    <div>
        {products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
      
    </div>
  )
}

export default ProductGrid;
