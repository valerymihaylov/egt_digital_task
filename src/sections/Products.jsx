import Records from '../records'

import './Products.css'

export default function Products() {
    const products = Records.products.map(product =>
        <>
            <div className="products-container">
                <img key={product.id} src={product.img} alt=""/>
                <div className="product-name">
                     <p>{product.name}</p>
                </div>
            </div>
        </>
    )
    return (
        <div className="section-products">
          <h1>Our Products</h1>
          <div className="products">{products}</div>
      </div>
    )
}