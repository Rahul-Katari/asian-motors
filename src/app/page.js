const { default: HomePage } = require("@/components/pages/HomePage")

export const metadata = {
    title: "Luxury Preowned Cars Showroom in Hyderabad | Asian Motors Attapur",
    description: "Explore the best preowned car showroom in Hyderabad at Asian Motors, Attapur. Building trust since 1969, offering non-accident cars, transparent documentation, buy-back guarantee, and 6 months warranty.",
    alternates: {
        canonical: "https://www.asianmotors.co.in/"
    }
}

const Home =() =>{
    return (
        <HomePage/>
    )
}
export default Home;
