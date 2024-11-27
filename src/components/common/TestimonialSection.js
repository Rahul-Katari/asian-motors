import React from 'react';
import TestimonialCard from './TestimonialCard';  // Import the TestimonialCard component

const testimonials = [
    {
        image: 'images/resource/test-auther-1.jpg',
        author: 'Leslie Alexander',
        role: 'Nintendo',
        testimonialText: '“Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.”'
    },
    {
        image: 'images/resource/test-auther-2.jpg',
        author: 'John Doe',
        role: 'CEO, TechCorp',
        testimonialText: '“This is a game-changer for our business. The results are outstanding!”'
    },
    {
        image: 'images/resource/test-auther-3.jpg',
        author: 'Sarah Wilson',
        role: 'Marketing Manager',
        testimonialText: '“We saw a significant increase in engagement after using this solution. Highly recommend it!”'
    }
];


const TestimonialSection = () => {
    return (
        <section className="boxcar-testimonial-section-four v7">
            <div className="boxcar-container">
                <div className="right-box">
                    <div className="boxcar-title wow fadeInUp">
                        <h2>What our customers say</h2>
                    </div>
                    <div className="row stories-slider">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard
                                image={testimonial.image}
                                author={testimonial.author}
                                role={testimonial.role}
                                testimonialText={testimonial.testimonialText}
                                key={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestimonialSection;
