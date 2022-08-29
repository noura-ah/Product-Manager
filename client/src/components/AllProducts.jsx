import React from "react"
import axios from "axios"
import { Link } from 'react-router-dom'
import DeleteProduct from "./DeleteProduct"

const AllProducts = (props) => {
    const [products, setProducts] = React.useState([])

    React.useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(response => setProducts(response.data.products))
    },[props.isCreated])

    const removeFromList = id => {
        setProducts(products.filter(p => p._id != id))
    }    
    console.log(products)
    return (
        <div className="container">
            <hr/>
            <h2 className="mt-5">All products</h2>
            <ul className="container w-50">
                {products.map((product) =>
                    <li className="d-flex justify-content-between align-items-center m-1" key={product._id}>
                        <Link to={location => `/${product._id}`}>{product.title}</Link>
                        <DeleteProduct id={product._id} func={removeFromList}/>
                    </li>)}
            </ul>
        </div>
    )
}

export default AllProducts