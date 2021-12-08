import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
    const { cart } = useContext(CartContext)
    return (
        <div className="container m-auto my-20">
            <table className="w-full text-center table-auto border-collapse">
                <thead className="bg-gray-100 py-3">
                    <tr>
                        <th className="opacity-0">0</th>
                        <th className="opacity-0">0</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(product => (
                        <tr className="border-b-2 border-gray-100" key={product.id}>
                            <td>
                                <button className="w-8 h-8 bg-red-600 cursor-pointer text-white">X</button>
                            </td>
                            <td className="flex justify-center p-4">
                                <img src={product.image} alt="product-image" className="w-24"></img>
                            </td>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>1</td>
                            <td>R500</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Cart;