import React, { useState } from 'react';
import { Page } from '../types';

interface HeaderProps {
    currentPage: Page;
    navigateTo: (page: Page) => void;
}

const navLinks: { page: Page; label: string }[] = [
    { page: 'Home', label: 'Home' },
    { page: 'About', label: 'About Us' },
    { page: 'Services', label: 'Services' },
    { page: 'Calculator', label: 'Calculator' },
    { page: 'Contact', label: 'Contact Us' },
];

const EpfoLogo = 'data:image/jpeg;base64,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';

const Header: React.FC<HeaderProps> = ({ currentPage, navigateTo }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo and Brand Name */}
                    <div className="flex items-center cursor-pointer" onClick={() => navigateTo('Home')}>
                        <img src={EpfoLogo} alt="EPFO Logo" className="h-12 w-12 mr-3"/>
                        <span className="text-2xl font-bold text-blue-600">
                            PF Suvidha
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navLinks.map(({ page, label }) => (
                            <a
                                key={page}
                                onClick={() => navigateTo(page)}
                                className={`cursor-pointer text-lg font-medium transition-colors duration-300 ${
                                    currentPage === page
                                        ? 'text-blue-600 border-b-2 border-blue-600'
                                        : 'text-gray-600 hover:text-blue-600'
                                }`}
                            >
                                {label}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-blue-600 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map(({ page, label }) => (
                            <a
                                key={page}
                                onClick={() => {
                                    navigateTo(page);
                                    setIsMenuOpen(false);
                                }}
                                className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${
                                    currentPage === page
                                        ? 'bg-blue-100 text-blue-700'
                                        : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                {label}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
