import getProduct from "../api/getProduct.api";

const GetProductView = async () => {
    const products = await getProduct()
    return products
}

export default GetProductView;
