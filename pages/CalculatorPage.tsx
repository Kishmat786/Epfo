
import React from 'react';
import Calculator from '../components/Calculator';

const CalculatorPage: React.FC = () => {
    return (
        <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800">Pricing / Calculator</h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Humari services ke liye ek chhota sa shulk lagta hai, jo aapke PF withdrawal amount par nirbhar karta hai. Niche diye gaye calculator se apni fees ka anuman lagayein.
                    </p>
                </div>

                <Calculator />
            </div>
        </div>
    );
};

export default CalculatorPage;
