
import './Product.css'

function Product({product, changePrice, deleteProduct}) {

  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-3 ">
        <div className="card p-3 mb-4 border-0 shadow-sm">
          <div className="image">
            <img src={product.image} />
          </div>
          <h2 className="title fs-4 text-center mt-3">{product.name}</h2>
          <div className="fw-bold text-center text-warning fs-4 mb-2">${product.price}</div>
          <button onClick={()=> changePrice(product.id)} className="btn btn-outline-success">Change Price</button>
          <button onClick={()=> deleteProduct(product.id)} className="btn btn-outline-danger mt-3">Delete</button>
        </div>
      </div>
    </>
  );
}

export default Product;
