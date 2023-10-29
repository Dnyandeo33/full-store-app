import { useContext } from 'react';
import { myData } from '../App';
import Product from './product';

const Products = () => {
    const { products } = useContext(myData);
    return (
        <div className=" container mx-auto gap-1 flex justify-center items-center flex-wrap">
            {products &&
                products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
        </div>
    );
};

export default Products;
