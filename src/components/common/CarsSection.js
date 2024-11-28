import { default as CarCard } from './CarCard';
const cars = [
    { id: 1, title: 'Mercedes-Benz, C Class', price: '$399', detailsLink: 'car-details.html' },
    { id: 2, title: 'BMW, 3 Series', price: '$499', detailsLink: 'car-details.html' },
    // Add more cars here...
];


const CarsSection = () => {
    return (
        <section className="cars-section-nine">
            <div className="boxcar-container">
                <div className="boxcar-title wow fadeInUp">
                    <h2>Featured Listings</h2>
                    <a href="cars.html" className="btn-title">
                        View All
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <g clipPath="url(#clip0_601_243)">
                                <path
                                    d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z"
                                    fill="#050B20"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_601_243">
                                    <rect width="14" height="14" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                </div>
                <div className="row car-slider-three slider-layout-1" data-preview="4.8">
                    {cars.map((car) => {
                        return (
                            <CarCard key={car.id} car={car} />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CarsSection;