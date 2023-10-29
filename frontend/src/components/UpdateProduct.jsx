/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';
import ProductForm from './ProductForm';

const UpdateProduct = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [addProduct, setAddProduct] = useState({
        name: '',
        category: '',
        description: '',
        price: '',
        img: ''
    });

    // update product function
    useEffect(() => {
        const updateProduct = async () => {
            const response = await axios.get(`http://localhost:3005/${id}`);
            const { name, category, description, price, img } = response.data;
            setAddProduct({
                ...addProduct,
                name: name,
                category: category,
                description: description,
                price: price,
                img: img
            });
        };
        updateProduct();
    }, []);

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

        // update product and put
        const updateProduct = async () => {
            try {
                const response = await axios.put(
                    `http://localhost:3005/${id}`,
                    addProduct
                );
                console.log(response);
                setResponse(response.data);
                navigate('/');
            } catch (error) {
                setError(error.response.data);
            }
        };

        updateProduct();
        setAddProduct({
            name: '',
            category: '',
            description: '',
            price: '',
            img: ''
        });
    };

    return (
        <>
            <h1>hello</h1>
            <ProductForm
                formError={formError}
                response={response}
                error={error}
                handleInput={handleInput}
                handleSubmit={handleSubmit}
                addProduct={addProduct}
            />
        </>
    );
};

export default UpdateProduct;
