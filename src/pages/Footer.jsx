import React from "react";
import "../css/Footer.css";

function Footer() {

    return (
        <footer className="site-footer">
            <div className="newsletter">
                <p className="newsletter-heading">Join our Sweet Community to get fresh updates!</p>
                <p className="unsubscribe-text">You can unsubscribe at any time.</p>
                <div className="newsletter-form">
                    <input type="email" placeholder="Your Email" />
                    <button>Subscribe</button>
                </div>
            </div>

            <nav className="footer-links">
                <div className="link-group">
                    <h4 className="group-title">About Us</h4>
                    <ul>
                        <li><a href="#">Our Story</a></li>
                        <li><a href="#">Our Team</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Testimonials</a></li>
                    </ul>
                </div>

                <div className="link-group">
                    <h4 className="group-title">Our Menu</h4>
                    <ul>
                        <li><a href="#">Cakes & Pastries</a></li>
                        <li><a href="#">Fresh Breads</a></li>
                        <li><a href="#">Cookies</a></li>
                        <li><a href="#">Beverages</a></li>
                    </ul>
                </div>

                <div className="link-group">
                    <h4 className="group-title">Contact Us</h4>
                    <ul>
                        <li><a href="#">Locations</a></li>
                        <li><a href="#">Catering Services</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Franchise</a></li>
                    </ul>
                </div>

                <div className="link-group">
                    <h4 className="group-title">Social Media</h4>
                    <ul>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Youtube</a></li>
                        <li><a href="#">Twitter</a></li>
                    </ul>
                </div>
            </nav>
            <div className="footer-bottom">
                <p>&copy; 2024 Bakers Bliss. All rights reserved.</p>
            </div>
        </footer>
    )

}

export default Footer;

