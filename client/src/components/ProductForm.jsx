const ProductForm = (props) =>{
    const {product , handleChange ,handleSubmit ,value} =props
    return (
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
                <input className="btn btn-light mt-3" value={value} type="submit"/>
            </form>
    )
}

export default ProductForm