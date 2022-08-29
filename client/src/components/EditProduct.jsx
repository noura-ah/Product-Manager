import React from "react"
import axios from "axios"
import { useParams , useHistory } from "react-router-dom"

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
            <form className="form container px-5" onSubmit={handleSubmit}>
                <div className="d-flex align-items-center px-5 mt-4">
                    <label className="form-label">Title:</label>
                    <input className="form-control" value={product.title} name="title" onChange={handleChange} />
                </div>
                <div className="d-flex align-items-center px-5 mt-2">
                    <label className="form-label">Price:</label>
                    <input className="form-control" value={product.price} name="price" onChange={handleChange} />
                </div>
                <div className="d-flex align-items-center px-5 mt-2">
                    <label className="form-label">Description:</label>
                    <input className="form-control" value={product.description} name="description" onChange={handleChange} />
                </div>
                <input className="btn btn-light mt-3" value="Edit" type="submit" />
            </form>
        </div>
    )
}
export default EditProduct