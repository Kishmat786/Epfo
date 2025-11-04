import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-800">Privacy Policy</h1>
                        <p className="mt-4 text-lg text-gray-600">Aapki jaankari hamare liye mahatvapurna hai.</p>
                    </div>

                    <div className="space-y-8 text-gray-700 leading-relaxed">
                        <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                            <h2 className="text-2xl font-semibold text-blue-600 mb-3">1. Data Collection</h2>
                            <p>
                                Hum aapki suvidha ke liye kuch zaroori jaankari collect karte hain, jaise aapka naam, email, phone number, aur PF withdrawal ke liye zaroori documents (jaise Aadhaar, PAN, Bank Details). Yeh jaankari aapse contact karne aur aapki application process karne ke liye istemal ki jaati hai.
                            </p>
                        </div>
                        
                        <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                            <h2 className="text-2xl font-semibold text-blue-600 mb-3">2. Data Protection</h2>
                            <p>
                                Aapki niji jaankari ki suraksha hamari prathmikta hai. Hum aapke data ko surakshit rakhne ke liye industry-standard security measures ka istemal karte hain. Aapka data encrypted form mein store kiya jaata hai aur sirf authorized personnel hi use access kar sakte hain.
                            </p>
                        </div>

                        <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                            <h2 className="text-2xl font-semibold text-blue-600 mb-3">3. Third-Party Disclosure</h2>
                            <p>
                                Hum aapki personal jaankari ko kisi bhi teesre paksh (third-party) ke saath aapki anumati ke bina share nahi karte, sivay un mamlon ke jahan kanoon anivarya ho. Aapki jaankari ka upyog sirf PF withdrawal process ko poora karne ke liye hi kiya jaata hai.
                            </p>
                        </div>
                        
                        <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                            <h2 className="text-2xl font-semibold text-blue-600 mb-3">Changes to This Policy</h2>
                            <p>
                                Hum samay-samay par apni privacy policy ko update kar sakte hain. Kisi bhi bade badlav ki soochna aapko email ya hamari website par notice ke zariye di jayegi.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
