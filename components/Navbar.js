import { useState, useContext } from "react";
import Link from 'next/link';
import { FaBars } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { CartContext } from "../context/CartContext";

const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const handleToggle = () => setToggle(!toggle);
    const { cart } = useContext(CartContext)
    return (
        <div className="sticky top-0 m-auto w-full z-50">
            <nav className="bg-white w-full md:py-0 p-4 flex flex-wrap justify-between items-center text-lg text-gray-700">
                <div className="text-3xl pr-6">iStore</div>
                <div className="h-8 w-8 cursor-pointer md:hidden block" onClick={handleToggle}> <FaBars /> </div>
                <div className={toggle ? "w-full md:flex md:items-center md:w-auto" : "hidden w-full md:flex md:items-center md:w-auto"}>
                    <ul className="text-base text-gray-700 pt-4 md:flex md:justify-between md:pt-0">
                        <Link href="/"><li className="md:p-4 py-2 block hover:text-purple-400">Home</li></Link>
                        <Link href="/shop"><li className="md:p-4 py-2 block hover:text-purple-400">Shop</li></Link>
                        <Link href="/contact"><li className="md:p-4 py-2 block hover:text-purple-400">Contact</li></Link>
                        <Link href="/cart">
                            <li className="relative md:p-4 py-2 mt-1 text-xl block hover:text-purple-400"><HiShoppingCart />
                                <span className="absolute top-1 right-0 text-sm flex justify-center items-center bg-black text-white rounded-full w-6 h-6">
                                    { cart !== 'null' ? "0" : cart.count() }
                                </span>
                            </li>
                        </Link>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;