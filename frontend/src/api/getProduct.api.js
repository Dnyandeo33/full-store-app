import axios from 'axios';

const getProduct = async () => {
    try {
        const response = await axios.get('http://localhost:3005');
        const data = response.data
        return data;
    } catch (error) {
        console.log(error);
    }
}

export default getProduct
