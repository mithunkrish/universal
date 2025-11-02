
import React from 'react';

const partners = [
    '/assets/images/partners/partner-1.png',
    '/assets/images/partners/partner-2.png',
    '/assets/images/partners/partner-3.png',
    '/assets/images/partners/partner-4.png',
    '/assets/images/partners/partner-5.png',
];

const Partners: React.FC = () => {
    return (
        <div className="py-16 bg-brand-dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-lg text-brand-light-gray mb-8">More Than 100+ Companies Trusted Us Worldwide</p>
                <div className="flex justify-around items-center flex-wrap gap-8">
                    {partners.map((logo, index) => (
                        <img key={index} src={logo} alt={`Partner ${index + 1}`} className="h-8 object-contain opacity-50 hover:opacity-100 transition-opacity" />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Partners;