const { default: CarDetailsPage } = require("@/components/pages/CarDetailsPage")

const CarDetails = ({ params }) => {
    return (
        <CarDetailsPage carId ={params.carId} />
    )
}
export default CarDetails;