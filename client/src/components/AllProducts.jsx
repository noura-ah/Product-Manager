import React from "react"
import axios from "axios"
import { Link } from 'react-router-dom'

const AllProducts = (props) => {
    const [products, setProducts] = React.useState([])

    React.useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(response => setProducts(response.data.products))
            .catch(err => console.log(err))
    },[props.isCreated])
    console.log(products)
    return (
        <div className="container">
            <hr/>
            <h2 className="mt-5">All products</h2>
            <ul style={{ textAlign: 'left' }} className="container w-50">
                {products.map((product) =>
                    <li key={product._id}>
                        <Link to={location => `/${product._id}`}>{product.title}</Link>
                    </li>)}
            </ul>
        </div>
    )
}

export default AllProducts