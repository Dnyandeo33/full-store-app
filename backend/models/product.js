import { v4 as productId } from 'uuid';

const products = [
    {
        id: productId(),
        name: 'Apple AirPods',
        category: 'Electronics',
        description:
            'Wireless Ear Buds, Bluetooth Headphones with Lightning Charging Case Included, Over 24 Hours of Battery Life, Effortless Setup for iPhone',
        price: '500',
        img: 'https://banner2.cleanpng.com/20180610/ful/kisspng-apple-airpods-headphones-iphone-apple-earbuds-5b1d9daa366f07.037253101528667562223.jpg'
    },
    {
        id: productId(),
        name: "Smart Security Camera",
        category: "Electronics",
        description: "Tilt Smart Security Camera, 1080p HD Dog Camera,2.4GHz with Night Vision,Motion Detection for Baby and Pet Monitor, Cloud & SD Card Storage, Works with Alexa& Google Home (EC70), White",
        price: "300",
        img: "https://png.pngtree.com/png-clipart/20210312/original/pngtree-cctv-systems-security-cameras-house-electronic-smart-technologies-decent-vector-realistic-png-image_6077064.jpg"
    },
    {
        id: productId(),
        name: "Women Movie Tshirt",
        category: "Clothing",
        description: "Womens Classic Movie Tank for Women Letter Print Cute Doll Look Clothes Camis",
        price: "20",
        img: "https://m.media-amazon.com/images/I/61lZqkVxQ4L._AC_UX679_.jpg"
    },
    {
        id: productId(),
        name: "Buck Camp Flannel Plaid Shirt",
        category: "Clothing",
        description: "PERFECT WEIGHT: Weighing in at 5.1 ounces, the Buck Camp Flannel Shirt is the perfect weight to be worn alone or layered, indoors or outside; you're gonna love this comfortable brushed cotton flannel shirt",
        price: "80",
        img: "https://m.media-amazon.com/images/I/91J-9FnWIdL._AC_UL640_FMwebp_QL65_.jpg"
    },
    {
        id: productId(),
        name: "ASUS0 Vivobook ",
        category: "Laptop",
        description: "Efficient Intel Celeron N4020 Processor (4M Cache, up to 2.8 GHz), 14” Full HD (1920x1080) Display. 64GB eMMC Flash Storage and 4GB DDR4 RAM. Windows 11 in S mode with One Year Microsoft 365 Personal included ",
        price: "900",
        img: "https://m.media-amazon.com/images/I/71RDNz9y4aL._AC_UY436_FMwebp_QL65_.jpg"
    },
    {
        id: productId(),
        name: "Apple MacBook Air",
        category: "Laptop",
        description: "Apple-designed M1 chip for a giant leap in CPU, GPU, and machine learning performance. Charge less with up to 29 hours of battery life - 13.3-inch Retina display with P3 wide color",
        price: "100",
        img: "https://m.media-amazon.com/images/I/616xvjqLhtL._AC_UY436_FMwebp_QL65_.jpg"
    },
];

class Product {
    constructor(name, category, description, price, img) {
        this.id = productId();
        this.name = name;
        this.category = category;
        this.description = description;
        this.price = price;
        this.img = img;
    }

    static getProducts = () => {
        return products;
    }

    static getProductById = (id) => {
        return products.find((product) => product.id === id);
    }

    static getProductByCategory = (category) => {
        return products.filter((product) => product.category === category);
    }

    postProduct = () => {
        products.push(this);
    }

    static updateProduct = (id, updateProduct) => {
        const index = products.findIndex((product) => product.id === id);
        index ? true : (products[index] = { id, ...updateProduct });
    }

    static deleteProduct = (id) => {
        const index = products.findIndex((product) => product.id === id);
        index ? false : products.splice(index, 1);
    }
}

export default Product;