
import React from 'react';

const AboutUsPage: React.FC = () => {
    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 tracking-tight">About Us</h1>
                    <p className="mt-4 text-lg text-gray-600">Humare baare mein aur jaanein</p>
                </div>

                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="bg-gray-50 p-8 rounded-xl shadow-md">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Company Vision</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Humara lakshya hai ki EPFO PF withdrawal process ko har kisi ke liye saral aur sulabh banaya jaye. Hum technology ka istemal karke is prakriya ko tez, surakshit aur paardarshi banana chahte hain.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-xl shadow-md">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Story</h2>
                        <p className="text-gray-700 leading-relaxed">
                            PF Suvidha ki shuruaat ek saral vichar se hui: PF nikalwane ki jatil prakriya ko aam aadmi ke liye aasan banana. Humne dekha ki bahut se log zaroori jaankari aur sahi margdarshan ke abhav mein apna paisa nikalne mein pareshan hote hain. Isi samasya ko suljhane ke liye humne is platform ko banaya.
                        </p>
                    </div>

                    <div className="bg-blue-600 text-white p-8 rounded-xl shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
                        <p className="leading-relaxed">
                            Hum ek vishwasniya company hain jo aapko surakshit aur tezi se PF nikalwane mein madad karti hai. Hamari team anubhavi peshevaron se bani hai jo aapke har kadam par sahayata ke liye taiyar hain. Aapki suvidha aur santushti hamari prathmikta hai.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;
