import { createContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// import components
import AddProduct from './components/AddProduct';
import DeleteProduct from './components/DeleteProduct';
import Logout from './components/Logout';
import NavBar from './components/Navbar';
import SignUp from './components/SignUp';
import SingleProduct from './components/SingleProduct';
import UpdateProduct from './components/UpdateProduct';
import Login from './components/login';
import Products from './components/products';

// import views
import GetProductView from './view/getProductView';

import './App.css';

// Initialize context
export const myData = createContext();

const App = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        GetProductView().then((products) => {
            setProducts(products);
        });
    }, []);

    return (
        <>
            <myData.Provider value={{ products }}>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Products />} />
                    <Route path="/:id" element={<SingleProduct />} />
                    <Route path="/update/:id" element={<UpdateProduct />} />
                    <Route path="/delete/:id" element={<DeleteProduct />} />
                    <Route path="/add-product" element={<AddProduct />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </myData.Provider>
        </>
    );
};

export default App;
