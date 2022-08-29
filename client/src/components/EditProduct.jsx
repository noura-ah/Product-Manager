import React from "react"
import axios from "axios"
import { useParams , useHistory } from "react-router-dom"
import ProductForm from "./ProductForm"

const EditProduct = () => {
    const [product, setProduct] = React.useState({
        title: '',
        price: '',
        description: '',
    })

    const { id } = useParams()
    const [isCreated, setIsCreated] = React.useState(false)

    const handleChange = (e) => {
        setIsCreated(false)
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    const history = useHistory()

    React.useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response => setProduct(response.data.product))
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/update/${id}`,product)
            .then(response => {
                setIsCreated(true)
                history.push(`/${id}`)
            })
    }

    return (
        <div>
            <h3>Product Manager</h3>
            {isCreated && <div>the product was edied succsessfully</div>}
            <ProductForm product={product} handleChange={handleChange} handleSubmit={handleSubmit} value="Edit"/>
        </div>
    )
}
export default EditProduct