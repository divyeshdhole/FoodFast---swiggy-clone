import React from 'react';
import { LOGO_URL } from "../utils/constants";
const Footer = () => {
    return (
        <footer className="bg-gray-950 text-gray-400 p-10">
            <div className="container mx-auto gap-20 flex justify-center">
                <div>
                    <div className='flex g-10 items-center'>
                        <div className="w-[70px]">
                            <img src={LOGO_URL} alt="Logo" />
                        </div>
                        <h4 className="text-white font-bold text-xl mb-4">FoodFast</h4>

                    </div>

                    <p>© 2024 Divyesh Dhole</p>
                </div>


                <div>
                    <h5 className="text-white font-bold mb-2">Company</h5>
                    <ul className='my-4'>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Team</li>
                        <li>FoodFast One</li>
                        <li>FoodFast Instamart</li>
                        <li>FoodFast Genie</li>
                    </ul>
                </div>

                <div>
                    <h5 className="text-white font-bold mb-2">Contact us</h5>
                    <ul className='my-4'>
                        <li>Help & Support</li>
                        <li>Partner with us</li>
                        <li>Ride with us</li>
                    </ul>
                    <h5 className="text-white font-bold mt-6 mb-2">Legal</h5>
                    <ul className='my-4'>
                        <li>Terms & Conditions</li>
                        <li>Cookie Policy</li>
                        <li>Privacy Policy</li>
                        <li>Investor Relations</li>
                    </ul>
                </div>

                <div>
                    <h5 className="text-white font-bold mb-2">We deliver to:</h5>
                    <ul className='my-4'>
                        <li>Bangalore</li>
                        <li>Gurgaon</li>
                        <li>Hyderabad</li>
                        <li>Delhi</li>
                        <li>Mumbai</li>
                        <li>Pune</li>
                    </ul>
                    <button className="mt-4 border border-gray-600 px-3 py-1 text-sm rounded-lg text-white">589 cities</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
