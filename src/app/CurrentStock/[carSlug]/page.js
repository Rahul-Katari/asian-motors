const { default: CarDetailsPage } = require("@/components/pages/CarDetailsPage")

const CarDetails = ({ params }) => {
    return (
        <CarDetailsPage carSlug ={params.carSlug} />
    )
}
export default CarDetails;