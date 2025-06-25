import React, { useState } from "react";
import { Helmet } from "react-helmet";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    service: "",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [userImages, setUserImages] = useState([]);
  const services = [
    "Basic Wash",
    "Interior Detail",
    "Premium Package",
  ];

  const reviews = [
  {
    name: "Jessica P.",
    rating: 5,
    text: "Prestige Auto Detailing did an amazing job! My car looks brand new.",
  },
  {
    name: "Michael S.",
    rating: 4,
    text: "Professional and timely service. Highly recommend the Premium Package.",
  },
  {
    name: "Samantha R.",
    rating: 5,
    text: "Love the attention to detail. My interior looks spotless!",
  },
];


  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
  e.preventDefault();
  console.log("Booking submitted:", formData);
  setSubmitted(true);
  setFormData({
    name: "",
    contact: "",
    service: "",
    date: "",
    message: "",
  });
}


  function handleImageUpload(e) {
    const files = Array.from(e.target.files);
    const fileURLs = files.map((file) => URL.createObjectURL(file));
    setUserImages((prev) => [...prev, ...fileURLs]);
  }

  const galleryImages = [
    "/images/car1.jpg",
    "/images/car2.jpg",
    "/images/car3.jpg",
  ];

  return (
    <main style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh", fontFamily: "sans-serif" }}>
{/* Hero Section with Background Image */}
<section style={{ position: "relative", height: "500px", overflow: "hidden" }}>
  <img
    src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    alt="Clean luxury car"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: "brightness(60%)",
    }}
  />
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "white",
      textAlign: "center",
      padding: "1rem",
    }}
  >
    <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem" }}>
      Prestige Auto Detailing
    </h1>
    <p
      style={{
        fontSize: "1.25rem",
        marginBottom: "2rem",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      High-end mobile car detailing. We bring the shine to you — interior & exterior perfection.
    </p>
   <button
  onClick={() =>
    document
      .getElementById("booking-form")
      .scrollIntoView({ behavior: "smooth" })
  }
  style={{
    backgroundColor: "#fff",
    color: "#000",
    padding: "0.75rem 2rem",
    borderRadius: "9999px",
    fontSize: "1.125rem",
    cursor: "pointer",
    fontWeight: "bold",
  }}
>
  Book Now
</button>

  </div>
</section>

{/* Packages & Pricing Section */}
<section style={{ padding: "3rem 1.5rem", maxWidth: "900px", margin: "0 auto", backgroundColor: "#111" }}>
  <h2 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "1.5rem", textAlign: "center", color: "#fff" }}>
    Packages & Pricing
  </h2>
  <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
    {/* Basic Package */}
    <div style={{
      flex: "1 1 250px",
      backgroundColor: "#222",
      borderRadius: "12px",
      padding: "1.5rem",
      color: "#eee",
      boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
    }}>
      <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#f0a500" }}>Basic Package</h3>
      <p>Exterior hand wash, tire shine, window cleaning.</p>
      <ul style={{ paddingLeft: "1rem", marginBottom: "1rem" }}>
        <li>Hand wash & dry</li>
        <li>Tire & wheel cleaning</li>
        <li>Windows cleaned inside & out</li>
      </ul>
      <p style={{ fontWeight: "700", fontSize: "1.25rem" }}>$79</p>
    </div>

    {/* Standard Package */}
    <div style={{
      flex: "1 1 250px",
      backgroundColor: "#333",
      borderRadius: "12px",
      padding: "1.5rem",
      color: "#eee",
      boxShadow: "0 6px 12px rgba(0,0,0,0.4)",
      border: "2px solid #f0a500",
    }}>
      <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#f0a500" }}>Standard Package</h3>
      <p>Basic package plus interior vacuum, dashboard cleaning, and more.</p>
      <ul style={{ paddingLeft: "1rem", marginBottom: "1rem" }}>
        <li>Everything in Basic</li>
        <li>Interior vacuum & wipe down</li>
        <li>Dashboard & console cleaned</li>
        <li>Door jambs wiped</li>
      </ul>
      <p style={{ fontWeight: "700", fontSize: "1.25rem" }}>$149</p>
    </div>

    {/* Premium Package */}
    <div style={{
      flex: "1 1 250px",
      backgroundColor: "#222",
      borderRadius: "12px",
      padding: "1.5rem",
      color: "#eee",
      boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
    }}>
      <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#f0a500" }}>Premium Package</h3>
      <p>Full detail including paint correction, engine bay cleaning, and more.</p>
      <ul style={{ paddingLeft: "1rem", marginBottom: "1rem" }}>
        <li>Everything in Standard</li>
        <li>Paint correction & polishing</li>
        <li>Engine bay cleaning & dressing</li>
        <li>Leather conditioning</li>
      </ul>
      <p style={{ fontWeight: "700", fontSize: "1.25rem" }}>$299</p>
    </div>
  </div>
</section>

  {/* Gallery Section - 5 Car Detailing Photos */}
<section style={{ padding: "4rem 1.5rem", maxWidth: "1200px", margin: "0 auto" }}>
  <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "2rem", textAlign: "center" }}>
    Our Work
  </h2>
  <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "center" }}>
    {[
      {
        src: "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2018_13/1275414/clean-car-vacuum-today-170814-tease.jpg",
        caption: "Interior — Deep vacuum & detail",
      },
      
      {
        src: "https://wallpapercave.com/wp/wp2913496.jpg",
        caption: "Exterior — Glossy shine and polish",
      },
      {
        src: "https://autoimage.capitalone.com/cms/Auto/assets/images/1645-hero-clean-engine-bay-001.jpg",
        caption: "Engine bay — Spotless and detailed",
      },
    ].map((item, idx) => (
      <div key={idx} style={{ width: "300px", borderRadius: "1rem", overflow: "hidden", backgroundColor: "#111" }}>
        <img
          src={item.src}
          alt={item.caption}
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
        <div style={{ padding: "0.75rem", color: "#ccc", fontSize: "0.9rem", textAlign: "center" }}>
          {item.caption}
        </div>
      </div>
    ))}
  </div>
</section>

{/* Reviews Section */}
<section style={{ padding: "3rem 1.5rem", maxWidth: "900px", margin: "0 auto", backgroundColor: "#111", color: "#eee" }}>
  <h2 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "2rem", textAlign: "center" }}>
    What Our Customers Say
  </h2>
  <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
    {reviews.map((review, idx) => (
      <div
        key={idx}
        style={{
          flex: "1 1 300px",
          backgroundColor: "#222",
          padding: "1.5rem",
          borderRadius: "12px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
        }}
      >
        <p style={{ fontStyle: "italic", marginBottom: "1rem" }}>"{review.text}"</p>
        <p style={{ fontWeight: "700", marginBottom: "0.5rem" }}>{review.name}</p>
        <p style={{ color: "#f0a500" }}>{'⭐'.repeat(review.rating)}</p>
      </div>
    ))}
  </div>
</section>


      {/* Booking Form Section */}
      {/* Booking Form Section */}
<section
  id="booking-form"
  style={{ padding: "4rem 1.5rem", maxWidth: "600px", margin: "0 auto" }}
>

        <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "1.5rem", textAlign: "center" }}>Book Your Service</h2>

        {submitted ? (
          <p style={{ textAlign: "center", color: "#4CAF50", fontWeight: "600" }}>
            Thank you! We received your booking request and will get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ padding: "0.75rem", borderRadius: "0.5rem", border: "none" }}
            />
            <input
              type="text"
              name="contact"
              placeholder="Email or Phone Number"
              value={formData.contact}
              onChange={handleChange}
              required
              style={{ padding: "0.75rem", borderRadius: "0.5rem", border: "none" }}
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              style={{ padding: "0.75rem", borderRadius: "0.5rem", border: "none" }}
            >
              <option value="" disabled>
                Select a Service
              </option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
               min={new Date().toISOString().split("T")[0]}
              style={{ padding: "0.75rem", borderRadius: "0.5rem", border: "none" }}
            />
            <textarea
              name="message"
              placeholder="Additional message (optional)"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              style={{ padding: "0.75rem", borderRadius: "0.5rem", border: "none" }}
            />
         <button
  type="submit"
  style={{
    backgroundColor: "#fff",
    color: "#000",
    padding: "0.75rem 2rem",
    borderRadius: "9999px",
    fontSize: "1.125rem",
    cursor: "pointer",
    fontWeight: "bold",
  }}
>
  Book Now
</button>


          </form>
        )}
      </section>

      {/* Call to Action */}
      <section style={{ padding: "4rem 1.5rem", textAlign: "center", color: "#bbb" }}>
        <h2 style={{ fontSize: "1.75rem", fontWeight: "600", marginBottom: "1rem" }}>Ready to make your car shine?</h2>
        <p>Contact us today and experience luxury detailing at your convenience.</p>
      </section>
    </main>
  );
}

export default App;
