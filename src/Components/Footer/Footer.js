import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div>
            <footer className="footer mt-10 footer-center p-4 bg-black text-white">
                    <div>
                        <p>Copyright {currentYear} © Md Abdur Rashid. <br /> All rights reserved.</p>
                    </div>
            </footer>
        </div>
    );
};

export default Footer;