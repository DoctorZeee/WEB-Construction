import React from "react";
import AboutImg from "../../assets/images/about-us.jpg";

const About = () => {
    return (
        <>
            <section className="section-2 py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={AboutImg} className="w-100" />
                        </div>

                        <div className="col-md-6">
                            <span>About Us</span>
                            <h2>Crafting structures that last a lifetime</h2>
                            <p>
                                Building enduring structures requires
                                comprehensive aproach that combines advanced
                                materials, resilient design, routine maintence,
                                and sustainable practices. By drawing on
                                historical insight and utilizing modern
                                technology.
                            </p>
                            <p>
                                Designing structures that stand he test of the
                                time involves a seamless blend of cutting-edge
                                materials, durable design, ongoing upkeep, and
                                eco-friendly practices. By combining lesson from
                                the past with the power of modern technology
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;