
import React, { useState } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ServicesPage from './pages/ServicesPage';
import CalculatorPage from './pages/CalculatorPage';
import ContactUsPage from './pages/ContactUsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>('Home');

    const navigateTo = (page: Page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'Home':
                return <HomePage navigateTo={navigateTo} />;
            case 'About':
                return <AboutUsPage />;
            case 'Services':
                return <ServicesPage />;
            case 'Calculator':
                return <CalculatorPage />;
            case 'Contact':
                return <ContactUsPage />;
            case 'Privacy':
                return <PrivacyPolicyPage />;
            case 'Terms':
                return <TermsAndConditionsPage />;
            default:
                return <HomePage navigateTo={navigateTo} />;
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
            <Header currentPage={currentPage} navigateTo={navigateTo} />
            <main className="flex-grow">
                {renderPage()}
            </main>
            <Footer navigateTo={navigateTo} />
        </div>
    );
};

export default App;
