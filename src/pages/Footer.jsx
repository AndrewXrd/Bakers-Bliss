import React from "react";
import "../css/Footer.css";

function Footer() {

    return (
        <footer class="site-footer">
            <div class="newsletter">
                <p class="newsletter-heading">Join the Adventure newsletter to receive our best vacation deals</p>
                <p class="unsubscribe-text">You can unsubscribe at any time.</p>
                <div class="newsletter-form">
                    <input type="email" placeholder="Your Email"/>
                    <button>Subscribe</button>
                </div>
            </div>

            <nav class="footer-links">
                <div class="link-group">
                    <h4 class="group-title">About Us</h4>
                    <ul>
                        <li><a href="#">How it works</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Investors</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>

                <div class="link-group">
                    <h4 class="group-title">Contact Us</h4>
                    <ul>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Destinations</a></li>
                        <li><a href="#">Sponsorships</a></li>
                    </ul>
                </div>

                <div class="link-group">
                    <h4 class="group-title">Videos</h4>
                    <ul>
                        <li><a href="#">Submit Video</a></li>
                        <li><a href="#">Ambassadors</a></li>
                        <li><a href="#">Agency</a></li>
                        <li><a href="#">Influencer</a></li>
                    </ul>
                </div>

                <div class="link-group">
                    <h4 class="group-title">Social Media</h4>
                    <ul>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Youtube</a></li>
                        <li><a href="#">Twitter</a></li>
                    </ul>
                </div>
            </nav>
        </footer>
    )

}

export default Footer;

