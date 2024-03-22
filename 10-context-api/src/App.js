import "bootstrap/dist/css/bootstrap.min.css";
import ProductContext from "./ProductContext";
import ProductListing from "./ProductListing";

import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      product_name: "ACME Anvils",
      cost: 99.9
    },
    {
      id: 2,
      product_name: "ACME Hammers",
      cost: 19.9
    },
    {
      id: 3,
      product_name: "ACME Screwdrivers",
      cost: 5.9
    }
  ]);

  const productContext = {
    getProducts: () => {
      return products;
    },
    addProduct:(product_name, cost) => {
      const newProduct = {
        id: Math.floor(Math.random() *  10000 + 1000),
        product_name, cost
      }
      setProducts([...products, newProduct]);
    }
  }


  return (
    <ProductContext.Provider value={productContext}>
      <div className="container">
        <ProductListing/>
      </div>
    </ProductContext.Provider>
  );
}

export default App;
