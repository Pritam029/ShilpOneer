import React from "react";

export default function About() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-8">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4 p-md-5">
              <header className="mb-4">
                <h1 className="h2 mb-2">About ShilpOneer</h1>
                <p className="text-muted mb-0">Where tradition, craft, and rural enterprise meet technology.</p>
              </header>

              <section className="mb-4">
                <h2 className="h5">Our Mission</h2>
                <p className="mb-0">ShilpOneer was created to connect rural artisans — makers of sal‑leaf plates, broomsticks, wooden boxes, and other handmade crafts — directly with buyers. We aim to promote sustainable livelihoods, preserve cultural heritage, and enable economic self‑reliance by building an accessible digital marketplace for artisans.</p>
              </section>

              <section className="mb-4">
                <h2 className="h5">Who We Are</h2>
                <p className="mb-0">A small team of developers, designers and community advocates who care about technology and social impact. ShilpOneer uses modern web technologies to deliver a simple, reliable, and scalable platform for artisans and shoppers alike.</p>
              </section>

              <section className="mb-4">
                <h2 className="h5">What We Offer</h2>
                <ul className="mb-0">
                  <li>Marketplace tailored for handmade crafts with full product CRUD support.</li>
                  <li>Secure and simple shopping flow — browse, add to cart, and checkout.</li>
                  <li>Tools that empower artisans to reach wider audiences and retain better margins.</li>
                </ul>
              </section>

              <section className="mb-4">
                <h2 className="h5">Why It Matters</h2>
                <p className="mb-0">By supporting local artisans we help preserve cultural traditions, encourage sustainable local economies, and create inclusive growth opportunities for people in rural areas.</p>
              </section>

              <section className="mb-4">
                <h2 className="h5">Our Values</h2>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="border rounded p-3 h-100">
                      <h3 className="h6 mb-1">Empowerment</h3>
                      <p className="text-muted mb-0">Artisan-first approach — enable creators rather than exploit them.</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="border rounded p-3 h-100">
                      <h3 className="h6 mb-1">Transparency</h3>
                      <p className="text-muted mb-0">Clear processes, fair pricing, and honest dealings.</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="border rounded p-3 h-100">
                      <h3 className="h6 mb-1">Quality</h3>
                      <p className="text-muted mb-0">High standards for both craft and user experience.</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="border rounded p-3 h-100">
                      <h3 className="h6 mb-1">Sustainability</h3>
                      <p className="text-muted mb-0">Environmentally and economically responsible choices.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="h5">Looking Forward</h2>
                <p className="mb-3">We plan to grow ShilpOneer into a broader platform with partnerships, educational resources for artisans, improved logistics, and expanded product categories — all while keeping artisans at the center of every decision.</p>
                <a
                  href="https://github.com/RishavLaha3/ShilpOneer.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-secondary btn-sm"
                >
                  View on GitHub
                </a>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
