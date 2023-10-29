/* eslint-disable react/prop-types */
const ProductForm = ({
    addProduct,
    formError,
    response,
    error,
    handleInput,
    handleSubmit
}) => {
    return (
        <div className="items-center w-screen h-screen bg-white">
            <div className="container mx-auto items-center my-4 px-4 lg:px-20">
                <div className="w-full p-8 my-4 md:px-12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="flex">
                            <h1 className="font-bold uppercase text-5xl">
                                Add a Product
                            </h1>
                        </div>
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                            <div className=" flex flex-col">
                                <input
                                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text"
                                    id="name"
                                    name="name"
                                    onChange={handleInput}
                                    value={addProduct.name}
                                    autoComplete="off"
                                    placeholder="Name*"
                                />
                                <p className="text-red-400 text-sm">
                                    {formError.name}
                                </p>
                            </div>

                            <div className=" relative flex-col">
                                <input
                                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text"
                                    id="category"
                                    name="category"
                                    onChange={handleInput}
                                    value={addProduct.category}
                                    autoComplete="off"
                                    placeholder="Category Name*"
                                />
                                <p className="text-red-400 text-sm">
                                    {formError.category}
                                </p>
                            </div>
                            <div className=" relative flex-col">
                                <input
                                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="number"
                                    id="price"
                                    name="price"
                                    onChange={handleInput}
                                    value={addProduct.price}
                                    autoComplete="off"
                                    placeholder="Price*"
                                />
                                <p className="text-red-400 text-sm">
                                    {formError.price}
                                </p>
                            </div>
                            <div className=" relative flex-col">
                                <input
                                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="url"
                                    id="img"
                                    name="img"
                                    onChange={handleInput}
                                    value={addProduct.img}
                                    autoComplete="off"
                                    placeholder="Image url*"
                                />
                                <p className="text-red-400 text-sm">
                                    {formError.img}
                                </p>
                            </div>
                        </div>
                        <div className="my-4 relative flex-col">
                            <textarea
                                name="description"
                                id="description"
                                onChange={handleInput}
                                value={addProduct.description}
                                autoComplete="off"
                                placeholder="description*"
                                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            ></textarea>
                            <p className="text-red-400 text-sm">
                                {formError.description}
                            </p>
                        </div>
                        <p className="text-red-400 text-sm">
                            {formError.rePassword}
                        </p>
                        <p className=" text-green-600 text-sm">
                            {response.message}
                        </p>
                        <p className=" text-red-400 text-sm">{error.message}</p>
                        <div className="my-2 w-1/2 lg:w-1/4">
                            <button
                                type="submit"
                                className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
            focus:outline-none focus:shadow-outline"
                            >
                                Add Product
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductForm;
