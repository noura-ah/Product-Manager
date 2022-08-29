import React from "react"
import axios from 'axios'
import AllProducts from "./AllProducts"
import ProductForm from './ProductForm'

const NewProduct = () => {
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
            <ProductForm product={product} handleChange={handleChange} handleSubmit={handleSubmit} value="Create"/>
            <AllProducts isCreated={isCreated}/>
        </div>
    )
}

export default NewProduct