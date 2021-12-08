import CartContextProvider from "../context/CartContext";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <div>
            <CartContextProvider>
                <Navbar />
                {children}
                <Footer />
            </CartContextProvider>
        </div>
    );
}

export default Layout;