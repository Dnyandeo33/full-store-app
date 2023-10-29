/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './product.css';

const Product = ({ product }) => {
    const { id, name, category, description, price, img } = product;
    return (
        <Link to={`/${id}`}>
            <div className="card-container">
                <div className="cards">
                    <div className="img">
                        <img
                            src={img}
                            alt="9qvWEF.jpeg"
                            className="model-picture"
                        />
                    </div>
                    <h2 className="type">{name}</h2>
                    <p className="description">{category}</p>
                    <p className="description">{description}</p>
                    <div className="shopping-container">
                        <h3 className="price">${price}</h3>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Product;
