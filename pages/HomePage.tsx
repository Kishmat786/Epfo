
import React from 'react';
import { Page } from '../types';
import CheckCircleIcon from '../components/icons/CheckCircleIcon';
import LightningBoltIcon from '../components/icons/LightningBoltIcon';
import ShieldCheckIcon from '../components/icons/ShieldCheckIcon';

interface HomePageProps {
    navigateTo: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigateTo }) => {
    const features = [
        {
            icon: <CheckCircleIcon className="h-10 w-10 text-white" />,
            title: 'Bharosemand Service',
            description: 'Ek vishwasniya platform jo aapke PF withdrawal ko surakshit banata hai.',
        },
        {
            icon: <LightningBoltIcon className="h-10 w-10 text-white" />,
            title: 'Tez aur Surakshit Process',
            description: 'Humara streamlined process aapko jaldi se jaldi aapka paisa dilata hai.',
        },
        {
            icon: <ShieldCheckIcon className="h-10 w-10 text-white" />,
            title: 'Transparent Fees',
            description: 'Koi chhupe hue charge nahi. Sab kuch aapke saamne, bilkul saaf.',
        },
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-teal-500 text-white">
                <div className="container mx-auto px-6 py-20 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                        EPFO PF Withdrawal Ab Hua Aasaan!
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        Turant Payein Apna PF Apne Bank Khate Mein.
                    </p>
                    <p className="max-w-3xl mx-auto mb-8 text-blue-100">
                        Kya aap apna EPFO PF nikalwana chahte hain? Humari trusted service ke zariye, bina kisi jhanjhat ke, aap apna PF balance seedhe apne account mein prapt kar sakte hain. Bas kuch aasan steps follow karein aur paayein apna paisa!
                    </p>
                    <div className="flex justify-center space-x-4">
                        <button
                            onClick={() => navigateTo('Services')}
                            className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition-transform transform hover:scale-105 shadow-lg"
                        >
                            Abhi Withdraw Karein
                        </button>
                        <button
                            onClick={() => navigateTo('Calculator')}
                            className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-blue-600 transition-colors duration-300 shadow-lg"
                        >
                            Calculator Dekhein
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800">Hamari Visheshtayein</h2>
                        <p className="text-gray-600 mt-2">Hum aapko behtareen service pradan karne ke liye pratibaddh hain.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-500 mx-auto mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
