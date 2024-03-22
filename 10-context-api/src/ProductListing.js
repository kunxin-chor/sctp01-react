import { useContext } from "react";
import ProductContext from "./ProductContext";
import ProductForm from "./ProductForm";

export default function ProductListing() {
    const productCtx = useContext(ProductContext);

    return <>
         <h1>Product Listing</h1>
         <ul className="list-group">
         {
            productCtx.getProducts().map(p => (
                <li className="list-group-item">
                    {p.product_name} (${p.cost})
                </li>
            ))
         }
         </ul>

         <h1>Add New Product</h1>
         <ProductForm/>
    </>
}