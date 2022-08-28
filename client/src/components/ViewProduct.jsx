import axios from "axios"
import { useParams } from "react-router-dom"
import React from 'react';
const ViewProduct = () => {
    const { id } = useParams()
    const [product, setProduct] = React.useState({})
    console.log(id)
    React.useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response => setProduct(response.data.product))
            .catch(err => console.log(err))
    }, [])
    
    return (
        <div className="m-5 container border">
            <h3 className="mt-5">{product.title}</h3>
            <p className="mt-3">Price:{product.price}</p>
            <p className="mb-5">Description:{product.description}</p>
        </div>
    )
}

export default ViewProduct