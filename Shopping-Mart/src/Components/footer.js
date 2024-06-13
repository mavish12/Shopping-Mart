import { FaShoppingBag } from 'react-icons/fa'
import './style.css';
function Footer() {
    return (
        <>
            <div className="container-fluid text-center" style={{ backgroundColor: '#2e2e4e' }}>
                <div className="footer-parent">
                    <div className="footer-child">
                        <div style={{ display: 'flex' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <FaShoppingBag size={30} />
                            </div>
                            <h1>&nbsp;Mart</h1>
                        </div>
                        <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.<br /> Auctor libero id et,<br /> in garvida. Sit diam duis<br /> mauris nulla cursus. Erat et<br /> lectus vel ut sollicitudin elit<br /> at amet.</p>
                    </div>
                    <div className="footer-child">
                        <h3>About us</h3>
                        <li>Careers</li>
                        <li>Our Stores</li>
                        <li>Our Cares</li>
                        <li>Terms & conditions</li>
                        <li>Privacy Policy</li>
                    </div>
                    <div className="footer-child">
                        <h3>Customer Care</h3>
                        <li>Help Center</li>
                        <li>How to Buy</li>
                        <li>Track Your Order</li>
                        <li>Corporate & Bulk<br />&nbsp;&nbsp;&nbsp;&nbsp; Purchasing</li>
                        <li>Return & ReFund</li>
                    </div>
                    <div className="footer-child">
                        <h3>Contact us</h3>
                        <p>70 Washington Square South.Nwe York,NY 100112,<br /> United States</p>
                        <p>Email: example@gmail.com</p>
                        <p>Phone:+1 1123456780</p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Footer;