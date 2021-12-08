import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-gray-100 grid md:grid-cols-3 justify-between lg:px-20 lg:py-12">
            <div className="mx-6 my-4">
                <h4 className="lg:text-2xl font-semibold mb-4">Follow Us</h4>
                <div className="flex">
                    <a href=""><FaTwitter className="text-2xl lg:text-3xl mr-4 my-4" /></a>
                    <a href=""><FaInstagram className="text-2xl lg:text-3xl mr-4 my-4" /></a>
                    <a href=""><FaFacebookF className="text-2xl lg:text-3xl mr-4 my-4" /></a>
                </div>
            </div>
            <div className="mx-6 my-4">
                <h4 className="lg:text-2xl font-semibold mb-4">Quick Links</h4>
                <Link href="/cart" passHref><a className="flex items-center mb-7">-Cart</a></Link>
                <Link href="/shop" passHref><a className="flex items-center mb-7">-Shop</a></Link>
                <Link href="/shop" passHref><a className="flex items-center mb-7">-Orders</a></Link>
            </div>
            <div className="mx-6 my-4">
                <h4 className="lg:text-2xl font-semibold mb-4">Help</h4>
                <p className="flex items-center mb-7"><FaMapMarkerAlt className="mr-4" />1234 Violet Dragon st., Krugersdorp, Gauteng</p>
                <p className="flex items-center mb-7"><FaPhoneAlt className="mr-4" />+27 12 345 6789</p>
                <p className="flex items-center mb-7"><FaEnvelope className="mr-4" />info@Localstore.co.za</p>
            </div>
        </footer>
    );
}

export default Footer;