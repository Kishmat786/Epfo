import React from 'react';

const TermsAndConditionsPage: React.FC = () => {
    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-800">Terms & Conditions</h1>
                        <p className="mt-4 text-lg text-gray-600">Hamari services ka upyog karne se pehle kripya in niyam aur sharton ko dhyan se padhein.</p>
                    </div>

                    <div className="space-y-8 text-gray-700 leading-relaxed">
                        <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                            <h2 className="text-2xl font-semibold text-blue-600 mb-3">1. Service Agreement</h2>
                            <p>
                                PF Suvidha (hum/hamari company) aapko (user) Employees' Provident Fund (EPF) nikalwane mein sahayata pradan karti hai. Hamari service ka upyog karke, aap yeh sweekar karte hain ki aapne in niyam aur sharton ko padh liya hai aur aap inse sehmat hain. Aap yeh bhi sunishchit karte hain ki aap dwara di gayi sabhi jaankari sahi aur satya hai.
                            </p>
                        </div>
                        
                        <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                            <h2 className="text-2xl font-semibold text-blue-600 mb-3">2. Fee Structure Details</h2>
                            <p>
                                Hamari service ke liye ek non-refundable processing fee li jaati hai. Yeh fee aapke withdrawal amount ka 5% hai. Service fee ka bhugtan aapko application process shuru hone se pehle karna hoga. Fee ki jaankari hamare Calculator page par bhi uplabdh hai.
                            </p>
                        </div>

                        <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                            <h2 className="text-2xl font-semibold text-blue-600 mb-3">3. Refund Policy</h2>
                            <p>
                                Hamari service fee non-refundable (gair-wapsi) hai. Yadi aapka application EPFO dwara kisi kaaran se reject ho jaata hai, to service fee wapas nahi ki jayegi, kyunki humne aapki application ko process karne mein apna samay aur sansadhan lagaya hai. Hum application ko dobara file karne mein aapki sahayata kar sakte hain.
                            </p>
                        </div>
                        
                        <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                            <h2 className="text-2xl font-semibold text-blue-600 mb-3">4. Disclaimer</h2>
                            <p>
                                Hum ek private consultancy service hain aur hum EPFO se seedhe taur par jude nahi hain. PF withdrawal mein lagne wala samay poori tarah se EPFO ke upar nirbhar karta hai. Hum process ko tez karne ka har sambhav prayas karte hain, lekin samay-seemao ki guarantee nahi de sakte. Hum kisi bhi tarah ke delay ya application rejection ke liye zimmedar nahi honge.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditionsPage;
