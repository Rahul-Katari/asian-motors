import Link from "next/link";

export const metadata = {
  title: "Page Not Found | Asian Motors",
  description: "The page you are looking for could not be found.",
};

const NotFound = () => {
  return (
    <section className="contact-us-section layout-radius contact-page">
      <div className="boxcar-container">
        <div
          style={{
            textAlign: "center",
            padding: "80px 20px",
            minHeight: "50vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "120px", fontWeight: "700", marginBottom: "0", lineHeight: "1" }}>
            404
          </h1>
          <h2 style={{ fontSize: "32px", fontWeight: "600", marginTop: "16px" }}>
            Page Not Found
          </h2>
          <p style={{ fontSize: "16px", maxWidth: "520px", margin: "16px auto 32px" }}>
            The page you are looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/" className="boxcar-button boxcar-button-1">
              Go to Homepage
            </Link>
            <Link href="/buy-used-cars-hyderabad" className="boxcar-button boxcar-button-1">
              Browse Cars
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
