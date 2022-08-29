import React from "react"
import axios from 'axios'
import AllProducts from "./AllProducts"

const ProductForm = () => {
    const [product, setProduct] = React.useState({
        title:'',
        price:'',
        description:'',
    })
    const [isCreated,setIsCreated] = React.useState(false)

    const handleChange = (e) => {
        setIsCreated(false)
        setProduct({...product,[e.target.name]:e.target.value})
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/products/new",product)
            .then(response => { 
                setIsCreated(true)
                console.log(response)})
    }

    return (
        <div className="container  p-5">
            <h3>Product Manager</h3>
            {isCreated && <div>the product was added succsessfully</div>}
            <form className="form container px-5" onSubmit={handleSubmit}>
                <div className="d-flex align-items-center px-5 mt-4">
                    <label className="form-label">Title:</label>
                    <input className="form-control" value={product.title} name="title" onChange={handleChange}/>
                </div>
                <div className="d-flex align-items-center px-5 mt-2">
                    <label className="form-label">Price:</label>
                    <input className="form-control" value={product.price} name="price" onChange={handleChange}/>
                </div>
                <div className="d-flex align-items-center px-5 mt-2">
                    <label className="form-label">Description:</label>
                    <input className="form-control" value={product.description} name="description" onChange={handleChange}/>
                </div>
                <input className="btn btn-light mt-3" value="Create" type="submit"/>
            </form>
            <AllProducts isCreated={isCreated}/>
        </div>
    )
}

export default ProductForm