
import React, { useState, useMemo } from 'react';

const Calculator: React.FC = () => {
    const [amount, setAmount] = useState<string>('');
    const withdrawalAmount = useMemo(() => parseFloat(amount) || 0, [amount]);
    const serviceFee = useMemo(() => withdrawalAmount * 0.05, [withdrawalAmount]);

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 2,
        }).format(value);
    };
    
    const exampleCalculations = [
        { amount: 1000, fee: 50 },
        { amount: 2000, fee: 100 },
        { amount: 5000, fee: 250 },
        { amount: 10000, fee: 500 },
        { amount: 50000, fee: 2500 },
    ];

    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Side - Input & Output */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-center text-gray-800">Fee Calculator</h2>
                    <div>
                        <label htmlFor="pf-amount" className="block text-sm font-medium text-gray-700 mb-2">
                            Apna PF Withdrawal Amount Darj Karein (INR):
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="text-gray-500 sm:text-sm">₹</span>
                            </div>
                            <input
                                type="number"
                                name="pf-amount"
                                id="pf-amount"
                                className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md py-3"
                                placeholder="0.00"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg space-y-4">
                        <div className="flex justify-between items-center">
                            <p className="text-gray-600">Aapka Anumanit Withdrawal Amount:</p>
                            <p className="font-semibold text-lg text-gray-800">{formatCurrency(withdrawalAmount)}</p>
                        </div>
                        <div className="border-t border-gray-200"></div>
                        <div className="flex justify-between items-center text-blue-600">
                            <p className="font-medium">Hamari Service Fees (5%):</p>
                            <p className="font-bold text-xl">{formatCurrency(serviceFee)}</p>
                        </div>
                    </div>
                     <p className="text-xs text-center text-red-600 bg-red-100 p-3 rounded-md">
                       Kripya dhyan dein ki service fees ka bhugtan PF nikalwane se pehle karna hoga.
                    </p>
                </div>

                {/* Right Side - Example Calculations */}
                <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-center text-gray-700 mb-4">Example Calculations</h3>
                    <div className="space-y-3">
                        {exampleCalculations.map((calc, index) => (
                            <div key={index} className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm">
                                <span className="text-gray-600">Withdrawal: <span className="font-medium">{formatCurrency(calc.amount)}</span></span>
                                <span className="text-gray-800 font-semibold">Fee: <span className="text-blue-600">{formatCurrency(calc.fee)}</span></span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
