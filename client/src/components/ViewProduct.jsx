import axios from "axios"
import { Link, useParams , useHistory } from "react-router-dom"
import React from 'react';
import DeleteProduct from "./DeleteProduct";

const ViewProduct = () => {
    const { id } = useParams()
    const [product, setProduct] = React.useState({})
    const history = useHistory()


    React.useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response => setProduct(response.data.product))
            .catch(err => console.log(err))
    },[])

    const handleDelete = () =>{
        history.push('/')
    }
    
    return (
        <div className="container m-5 p-5 border">
            <h3>{product.title}</h3>
            <p className="mt-3">Price: {product.price}</p>
            <p className="mb-5">Description: {product.description}</p>
            <Link className="btn btn-dark mx-3" to={location => `/${product._id}/edit`}>Edit</Link>
            <DeleteProduct id={product._id} func={handleDelete} />
        </div>
    )
}

export default ViewProduct