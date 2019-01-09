import React from "react";
import "./Packages.css";

export const Packages = props => {
  return (
    <div className="packages__main">
      <section className="package__box">
        
          <h1 className="package__title">Our PLUS Plan</h1>
          <h2 className="package__meta">The most popular choice of our customers.</h2>
          <p className="package__desc">
            Benefit from increased storage and faster support to ensure that
            your mission-critical data and applications are always available!
          </p>
      </section>
      <div className="clearfix"></div>
      <section className="package__box" id="free">
          <h1 className="package__title">Our FREE Plan</h1>
          <h2 className="package__meta">An extremely solid start into our hosting world.</h2>
          <p className="package__desc">Get started immediately at zero cost!</p>
      </section>
      
      <section className="package__box" id="premium">
          <h1 className="package__title">Our PREMIUM Plan</h1>
          <h2 className="package__meta">
            All your enterprise needs. Instant support, guaranteed uptime.{" "}
          </h2>
          <p className="package__desc">
            The best solution for small to large enterprises. Because hosting
            shouldn't be in the way!
          </p>
      </section>
    </div>
  );
};
