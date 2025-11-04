
import React from 'react';
import { Page } from '../types';

interface FooterProps {
    navigateTo: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold text-blue-400 mb-4">PF Suvidha</h3>
                        <p className="text-gray-400">EPFO PF withdrawal ko saral aur sulabh banate hue. Aapka vishwas, hamari zimmedari.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a onClick={() => navigateTo('Home')} className="cursor-pointer text-gray-400 hover:text-white transition-colors">Home</a></li>
                            <li><a onClick={() => navigateTo('About')} className="cursor-pointer text-gray-400 hover:text-white transition-colors">About Us</a></li>
                            <li><a onClick={() => navigateTo('Services')} className="cursor-pointer text-gray-400 hover:text-white transition-colors">Services</a></li>
                            <li><a onClick={() => navigateTo('Calculator')} className="cursor-pointer text-gray-400 hover:text-white transition-colors">Calculator</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><a onClick={() => navigateTo('Privacy')} className="cursor-pointer text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a onClick={() => navigateTo('Terms')} className="cursor-pointer text-gray-400 hover:text-white transition-colors">Terms & Conditions</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} PF Suvidha. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
