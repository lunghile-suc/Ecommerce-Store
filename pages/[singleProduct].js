import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'


export const getStaticPaths = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();

    const paths = data.map(product => {
        return {
            params: { singleProduct: product.id.toString() }
        }
    });

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.singleProduct;
    const response = await fetch('https://fakestoreapi.com/products/' + id);
    const data = await response.json();

    return {
        props: { product: data }
    }
}

const SingleProduct = ({ product }) => {
    const { addCartItem } = useContext(CartContext);
    const addToCart = (productID, productImg, productTitle, productPrice) => {
        addCartItem(productID, productImg, productTitle, productPrice)
    }
    return (
        <div className=" lg:m-32">
            <div className="grid md:gap-12 lg:grid-cols-2">
                <div>
                    <img src={product.image} alt="Product-Image"></img>
                </div>
                <div>
                    <h1 className="text-3xl mb-8">{product.title}</h1>
                    <h4 className="text-2xl mb-8">R{product.price}</h4>
                    <p className="">{product.description}</p>
                    <button onClick={() => addToCart(product.id, product.image, product.title, product.price )} className="bg-black text-white p-2 px-4 mt-12 rounded-md cursor-pointer">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default SingleProduct;