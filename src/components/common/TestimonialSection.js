import React from 'react';
import TestimonialCard from './TestimonialCard';  // Import the TestimonialCard component
import author1 from '../../assets/images/testimonials/test-auther-1.jpg'
import author2 from '../../assets/images/testimonials/test-auther-2.jpg'
import author3 from '../../assets/images/testimonials/test-auther-3.jpg'
import TestimonialsSlider from './TestimonialsSlider';
const testimonials = [
    {
        tag: 'Great Work',
        image: author1,
        author: 'Leslie Alexander',
        role: 'Nintendo',
        testimonialText: '“Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.”'
    },
    {
        tag: 'Awesome Design',
        image: author2,
        author: 'John Doe',
        role: 'CEO, TechCorp',
        testimonialText: '“Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.”'
    },
    {
        tag: 'Perfect Quality',
        image: author3,
        author: 'Sarah Wilson',
        role: 'Marketing Manager',
        testimonialText: '“Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.”'
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
                        {/* {testimonials.map((testimonial, index) => (
                            <TestimonialCard
                                tag={testimonial.tag}
                                image={testimonial.image}
                                author={testimonial.author}
                                role={testimonial.role}
                                testimonialText={testimonial.testimonialText}
                                key={index}
                            />
                        ))} */}
                        <TestimonialsSlider testimonials={testimonials}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestimonialSection;
