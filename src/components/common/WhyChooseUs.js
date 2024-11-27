import React from 'react';
import AdvantageCard from './AdvantageCard';  // Import the AdvantageCard component
import ChooseUsCard from './ChooseUsCard';

const advantages = [
    {
        icon: 'images/icons/odometer.png',
        title: 'Odometer Authenticity',
        description: 'Guaranteed accurate mileage readings.'
    },
    {
        icon: 'images/icons/financing.png',
        title: 'Special Financing Offers',
        description: 'Exclusive, flexible financing options to make owning your dream car hassle-free.'
    },
    {
        icon: 'images/icons/quality.png',
        title: 'Top-Notch Quality',
        description: 'Our cars undergo rigorous quality checks to ensure you get the best.'
    },
    {
        icon: 'images/icons/customer-support.png',
        title: '24/7 Customer Support',
        description: 'We are always available to assist you with your needs.'
    }
];


const WhyChooseUs = () => {
    return (
        <section className="why-choose-us-section-four">
            <div className="boxcar-container">
                <div className="boxcar-title text-center wow fadeInUp">
                    <h2 className="title" style={{ color: 'white' }}>Why Choose Us?</h2>
                </div>
                <div className="row">
                    {advantages.map((advantage, index) => (
                        <ChooseUsCard key={index}
                            icon={advantage.icon}
                            title={advantage.title}
                            description={advantage.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;
