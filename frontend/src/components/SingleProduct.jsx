/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';

import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const SingleProduct = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const productById = async () => {
            const response = await axios.get(`http://localhost:3005/${id}`);
            setProduct(response.data);
        };
        productById();
    }, []);

    return (
        <div className="bg-gray-100 dark:bg-gray-800 py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row -mx-4">
                    <div className="md:flex-1 px-4">
                        <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                            <img
                                className="w-full object-cover"
                                src={product.img}
                                alt="Product Image"
                            />
                        </div>
                        <div className="flex -mx-2 mb-4">
                            <div className="w-1/2 px-2">
                                <Link
                                    to={`/update/${id}`}
                                    className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                                >
                                    Update
                                </Link>
                            </div>
                            <div className="w-1/2 px-2">
                                <Link
                                    to={`/delete/${id}`}
                                    className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
                                >
                                    Delete
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex-1 px-4">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                            {product.name}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 text-xl mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed sed ante justo. Integer euismod libero id
                            mauris malesuada tincidunt.
                        </p>
                        <div className="mb-4 py-4">
                            <div className="mr-4">
                                <span className="font-bold text-gray-700 text-xl dark:text-gray-300">
                                    Category: {product.category}
                                </span>
                            </div>
                            <div>
                                <span className="font-bold text-xl text-gray-700 dark:text-gray-300">
                                    Price: ${product.price}
                                </span>
                            </div>
                        </div>
                        <div>
                            <span className="font-bold text-gray-700 text-xl dark:text-gray-300">
                                Product Description:
                            </span>
                            <p className="text-gray-600 dark:text-gray-300 text-xl mt-2">
                                {product.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
