import { useState } from "react";
import "./Home.css";
import Header from "./Header";
import Product from "./Product";

import product1Image from '../src/assets/images/pngegg1.jpg'
import product2Image from '../src/assets/images/pngegg2.jpg'
import product3Image from '../src/assets/images/pngegg3.jpg'
import product4Image from '../src/assets/images/pngegg4.jpg'

function Home() {

  const [productList, setProductList] = useState( [
    { id: 1, name: 'Orange Watch 008', price: 112.99, image: product1Image },
    { id: 2, name: 'White Watch 009', price: 235.99, image: product2Image },
    { id: 3, name: 'Black Watch 007', price: 147.99, image: product3Image },
    { id: 4, name: 'Smart Watch 006', price: 130.99, image: product4Image },
    { id: 5, name: 'Orange Watch 001', price: 132.99, image: product1Image },
    { id: 6, name: 'White Watch 002', price: 285.99, image: product2Image },
    { id: 7, name: 'Black Watch 005', price: 157.99, image: product3Image },
    { id: 8, name: 'Smart Watch 008', price: 170.99, image: product4Image },
  ])

  let [searchQuery, setSearchQuery] = useState('');


  function changePrice(id) {

    let products = structuredClone(productList)
    
    let product = products.find(product => product.id == id)

    product.price += 10;

    setProductList(products)
  }


  function deleteProduct(id) {
    let updateProducts = productList.filter(product => product.id !== id);

    setProductList(updateProducts)
  }


  function handelSearch(e) {
    setSearchQuery(e.target.value)
  }

  let filteredProducts = productList.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <>
      <Header />
      <div className="container">
        

        <div className="search mt-5 p-5 bg-white rounded-2 shadow-sm">
          <input type="text" className="form-control" placeholder="Search..." value={searchQuery} onChange={handelSearch} />
        </div>

        <div className="products mt-5 mb-5">

          <div className="row">
          {filteredProducts.map(product => <Product key={product.id} product={product} changePrice={changePrice} deleteProduct={deleteProduct} />)}

          </div>

        </div>
      </div>
    </>
  );
}

export default Home;
