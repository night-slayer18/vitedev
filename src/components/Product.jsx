import ProductItem from "./ProductItem";

const Product = () => {
    const productChange = () => {
        const productArray = ['Samsung', 'Apple', 'Nokia', 'Sony', 'LG'];
        const randomProduct = productArray[Math.floor(Math.random() * productArray.length)];
        return randomProduct;
    }
    return (
        <div className="container">
            {Array(5).fill().map((_, i) => (
                <ProductItem key={i} product={productChange()} />
            ))}
        </div>
    )
}
export default Product
