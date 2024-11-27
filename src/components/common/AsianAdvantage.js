import React from 'react';
import AdvantageCard from './AdvantageCard';  // Import the AdvantageCard component

const advantages = [
    {
        icon: 'images/icons/odometer.png',
        title: 'Odometer Authenticity',
        description: 'Guaranteed accurate mileage readings.'
    },
    {
        icon: 'images/icons/engine.png',
        title: 'Engine Performance',
        description: 'Top-notch performance with no hidden issues.'
    },
    {
        icon: 'images/icons/safety.png',
        title: 'Safety Assurance',
        description: 'We prioritize your safety with advanced safety features.'
    }
];


const AsianAdvantage = () => {
    return (
        <section className="asian-advantage-section why-choose-us-section pt-0">
            <div className="boxcar-container">
                <div className="boxcar-title wow fadeInUp">
                    <h2 className="title">Asian Advantage</h2>
                </div>
                <div className="row">
                    {advantages.map((advantage, index) => (
                            <AdvantageCard
                            key={index}
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

export default AsianAdvantage;
