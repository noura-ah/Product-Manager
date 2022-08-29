import axios from "axios"
const DeleteProduct = (props) => {
    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
            .then(props.func(id))
    }
    return <input type="submit" className="btn btn-dark" value="Delete" onClick={() => handleDelete(props.id)} />
}

export default DeleteProduct