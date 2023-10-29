import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductForm from './ProductForm';

const AddProduct = () => {
    const navigate = useNavigate();
    //add product state
    const [addProduct, setAddProduct] = useState({
        name: '',
        category: '',
        description: '',
        price: '',
        img: ''
    });

    // form error state
    const [formError, setFormError] = useState({
        name: '',
        category: '',
        description: '',
        price: '',
        img: ''
    });

    // handle server response
    const [response, setResponse] = useState({});

    // handle error
    const [error, setError] = useState({});

    // handleInput
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setAddProduct({ ...addProduct, [name]: value });
    };

    // handleSubmit and validation
    const handleSubmit = (e) => {
        e.preventDefault();
        let inputError = {
            name: '',
            category: '',
            description: '',
            price: '',
            img: ''
        };

        if (
            !addProduct.name &&
            !addProduct.category &&
            !addProduct.description &&
            !addProduct.price &&
            addProduct.img
        ) {
            setFormError({
                ...inputError,
                name: 'Enter valid name',
                category: 'Enter valid category name',
                description: 'Write brief description about product',
                price: `add a valid price`,
                img: `Add a image url`
            });
            return;
        }
        if (!addProduct.name) {
            setFormError({
                ...inputError,
                name: 'Enter valid name'
            });
            return;
        }
        if (!addProduct.category) {
            setFormError({
                ...inputError,
                category: 'Enter valid category name'
            });
            return;
        }
        if (!addProduct.description) {
            setFormError({
                ...inputError,
                description: 'Write brief description about product'
            });
            return;
        }
        if (!addProduct.price) {
            setFormError({
                ...inputError,
                price: `Add a valid price`
            });
            return;
        }
        if (!addProduct.img) {
            setFormError({
                ...inputError,
                img: `Add a image url`
            });
            return;
        }

        setFormError(inputError);
        setFormError((prevState) => ({
            ...prevState,
            successMsg: `Product added successfully...!`
        }));

        const { name, category, description, price, img } = addProduct;

        // adding new product
        const newProduct = { name, category, description, price, img };

        // post product to server
        const postProduct = async () => {
            try {
                const res = await axios.post(
                    'http://localhost:3005/',
                    newProduct
                );
                setResponse(res.data);
                navigate('/');
            } catch (error) {
                setError(error.response.data);
            }
        };
        postProduct();
        setAddProduct({
            name: '',
            category: '',
            description: '',
            price: '',
            img: ''
        });
    };

    // form for product
    return (
        <ProductForm
            formError={formError}
            response={response}
            error={error}
            handleInput={handleInput}
            handleSubmit={handleSubmit}
            addProduct={addProduct}
        />
    );
};

export default AddProduct;
