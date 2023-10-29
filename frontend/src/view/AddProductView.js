import addProduct from '../api/addProduct.api'

const AddProductView = async () => {
    const aadProducts = await addProduct()
    return aadProducts

}

export default AddProductView
