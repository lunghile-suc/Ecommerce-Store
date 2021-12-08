import Link from 'next/link';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export async function getStaticProps() {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { data },
    }
}

const shop = ({ data }) => {

    const { addCartItem } = useContext(CartContext);
    const addToCart = (productID, productImg, productTitle, productPrice) => {
        addCartItem(productID, productImg, productTitle, productPrice)
    }

    return (
        <div className="">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 my-20 mx-6 md:mx-8 lg:mx-20">
                {data.map((products) => {
                    return (
                        <div className="max-w-lg mt-10 mb-24 h-96" key={products.id}>
                            <div className="h-4/5 w-full flex justify-center">
                                <img src={products.image} alt="product imag" className="w-4/5 h-full p-4"></img>
                            </div>
                            <Link href={`/${products.id}`}>
                                <div className="p-4 bg-gray-100 cursor-pointer">
                                    <h1 className="">
                                        {products.title.length > 10 ? products.title.substring(0, 30) + "..." : products.title}
                                    </h1>
                                    <p className="my-2">R{products.price}</p>
                                    <div className="bg-gray-300 h-px w-full my-4"></div>
                                    <button onClick={() => addToCart(products.id, products.image, products.title, products.price)} className="bg-black text-white p-2 px-4 rounded-md cursor-pointer">Add to Cart</button>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default shop;