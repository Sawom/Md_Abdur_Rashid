import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div>
            <footer className="footer footer-center p-5 bg-black text-white">
                    <div>
                        <p>Copyright {currentYear} © Abdur Rashid Sawom. </p>
                        <p>All rights reserved.</p>
                    </div>
                </footer>
        </div>
    );
};

export default Footer;