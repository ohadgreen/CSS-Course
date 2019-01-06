import React from 'react';
import './Body.css';

export const Body = (props) => {
    return (
        <div>
            <section id="product-overview">
                <h1 className="h1">
                    Get the Freedom You Deserve
          </h1>
            </section>
            <section id="plans">
                <h1 className="section-title">
                    Choose Your Plan
        </h1>
        <div>
                <article className="plan">
                    <h1 className="plan__title">FREE</h1>
                    <h2 className="plan__price">$0/month</h2>
                    <h3>For hobby projects or small teams.</h3>
                    <ul className="plan__features">
                        <li>1 Workspace</li>
                        <li>Unlimited Traffic</li>
                        <li>10GB Storage</li>
                        <li>Basic Support</li>
                    </ul>
                    <div>
                        <button className="button">CHOOSE PLAN</button>
                    </div>
                </article>
                <article className="plan plan--highlighted">
                    <h1 className="plan__annotation">RECOMMENDED</h1>
                    <h1 className="plan__title">PLUS</h1>
                    <h2 className="plan__price">$29/month</h2>
                    <h3>For ambitious projects.</h3>
                    <ul className="plan__features">
                        <li>5 Workspaces</li>
                        <li>Unlimited Traffic</li>
                        <li>100GB Storage</li>
                        <li>Plus Support</li>
                    </ul>
                    <div>
                        <button className="button">CHOOSE PLAN</button>
                    </div>
                </article>
                <article className="plan">
                    <h1 className="plan__title">PREMIUM</h1>
                    <h2 className="plan__price">$99/month</h2>
                    <h3>Your enterprise solution.</h3>
                    <ul className="plan__features">
                        <li>10 Workspaces</li>
                        <li>Unlimited Traffic</li>
                        <li>Unlimited Storage</li>
                        <li>Priority Support</li>
                    </ul>
                    <div>
                        <button className="button">CHOOSE PLAN</button>
                    </div>
                </article>
            </div>
            </section>
            <section className="key-features">
            <h1 className="section-title">Many Good Reasons to Stick Around</h1>
            <ul className="key-features__list">
                <li>
                    <div>

                    </div>
                    <p>3,857,000 Trusting Customers</p>
                </li>
                <li>
                    <div>

                    </div>
                    <p>99.999% Uptime Guarantee</p>
                </li>
                <li>
                    <div>

                    </div>
                    <p>Lightning Fast CDN</p>
                </li>
            </ul>
        </section>
        </div>
    );
}
