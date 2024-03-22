import ProductContext from "./ProductContext";
import { useState, useContext } from "react";


export default function ProductForm() {

    const productCtx = useContext(ProductContext);

    const [formState, setFormState] = useState({
        'product_name':'',
        'cost': ''
    })

    const updateFormField = (e) => {
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        })
    }

    return <div>
        <div>
            <label>Product Name:</label>
            <input type="text"
                   name="product_name"
                   className="form-control"
                   value={formState.product_name}
                   onChange={updateFormField}
            />
        </div>
        <div>
            <label>Cost:</label>
            <input type="text"
                   name="cost"
                   value={formState.cost}
                   className="form-control"
                   onChange={updateFormField}
                   />
        </div>
        <button className="mt-3 btn btn-primary" onClick={()=>{
            productCtx.addProduct(formState.product_name, formState.cost)
        }}>
            Add
        </button>

    </div>
}