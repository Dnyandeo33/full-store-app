import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// delete product
const DeleteProduct = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        const updateProduct = async () => {
            await axios.delete(`http://localhost:3005/${id}`);
            navigate('/');
        };
        updateProduct();
    }, []);

    return <div></div>;
};

export default DeleteProduct;
