
import React from 'react';

const ServicesPage: React.FC = () => {
    const processSteps = [
        {
            step: "1",
            title: "Fees ka Bhugtan Karein",
            description: "Sabse pehle, hamari calculator ka upyog karke apni service fee ka anuman lagayein aur uska bhugtan karein."
        },
        {
            step: "2",
            title: "Zaroori Documents Upload Karein",
            description: "Apne KYC documents jaise Aadhaar, PAN card, aur bank passbook ki copy surakshit roop se upload karein."
        },
        {
            step: "3",
            title: "Hum Aapka Application Process Karenge",
            description: "Hamari team aapke documents ko verify karke EPFO portal par aapka withdrawal application file karegi."
        },
        {
            step: "4",
            title: "1 Week Ke Andar Aapke Account Mein Paisa",
            description: "Application approve hone ke baad, aam taur par 1 hafte ke andar PF amount seedhe aapke bank account mein credit ho jaata hai."
        }
    ];

    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800">Our Services</h1>
                    <p className="mt-4 text-lg text-gray-600">Aapki PF withdrawal ki poori prakriya, hamari zimmedari.</p>
                </div>

                <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-xl shadow-lg mb-12">
                    <h2 className="text-2xl font-semibold text-blue-600 mb-4">Detailed Service Description</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Hum aapko EPFO se PF nikalwane ki poori prakriya mein sahayata karte hain. Ismein application, documentation aur follow-up shamil hai. Aapko sirf kuch aasan steps follow karne hain, baki hum par chhod dijiye. Hum sunishchit karte hain ki aapka kaam bina kisi pareshani ke, samay par poora ho.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Process Flow</h2>
                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="absolute left-1/2 top-10 bottom-10 w-0.5 bg-blue-200 hidden md:block" aria-hidden="true"></div>
                        
                        <div className="space-y-12">
                            {processSteps.map((item, index) => (
                                <div key={index} className="flex flex-col md:flex-row items-center">
                                    <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'} md:order-${index % 2 === 0 ? 1 : 2}`}>
                                        <h3 className="text-xl font-semibold text-blue-600 mb-2">{item.title}</h3>
                                        <p className="text-gray-600">{item.description}</p>
                                    </div>
                                    <div className="flex-shrink-0 w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold my-4 md:my-0 md:order-1 relative z-10">
                                        {item.step}
                                    </div>
                                    <div className={`flex-1 md:order-${index % 2 === 0 ? 2 : 1}`}></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
