import localFont from "next/font/local";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./globals.css";
import "./style.css";
// import '../assets/css/style.css'
import "../assets/css/animate.css";
import "../assets/css/owl.css";
import "../assets/css/jquery.fancybox.min.css";
import "../assets/css/linear.css"; 
import "../assets/css/fontawesome.css";
import "../assets/css/flaticon.css";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Asian Motors",
  description: "Asian Motors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
        <script src="../assets/js/main.js"></script>
        <script src="../assets/js/jquery.js"></script>
        <script src="../assets/js/popper.min.js"></script>
        <script src="../assets/js/bootstrap.min.js"></script>
        <script src="../assets/js/slick.min.js"></script>
        <script src="../assets/js/slick-animation.min.js"></script>
        <script src="../assets/js/jquery.fancybox.js"></script>
        <script src="../assets/js/wow.js"></script>
        <script src="../assets/js/appear.js"></script>
        <script src="../assets/js/mixitup.js"></script>
        <script src="../assets/js/knob.js"></script>
        <script src="../assets/js/mmenu.js"></script>
        <script src="../assets/js/main.js"></script>
        <script src="../assets/js/navbar.js"></script>
        <script src="../assets/js/footer.js"></script>

      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
