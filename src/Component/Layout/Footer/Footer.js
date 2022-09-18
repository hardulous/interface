import React from "react";
import Classes from "./Footer.module.css";
import ScrollAnimation from "react-animate-on-scroll";

import "animate.css/animate.min.css";
const Footer = () => {
  return (
    <>
      <section className={Classes.Footer}>
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 100 102"
          height="75"
          width="100%"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="svgcolor-light"
        >
          <path
            d="M0 0 L50 100 L100 0 Z"
            fill="#f6f5f5"
            stroke="#f6f5f5"
          ></path>
        </svg>
        <ScrollAnimation animateOnce={true} animateIn="fadeIn">
          <div className={Classes.Developer + " row"}>
            <div className="col-md-6" style={{ fontSize: "20px" }}>
              For Website Related Queries :<br />{" "}
              <span className={Classes.orange} style={{ fontSize: "15px" }}>
                <a href="tel:9315933365">+91 9315933365</a> ( Aman Bisht )
                <br />
                <a href="tel:8920109779">+91 8920109779</a> ( Priyanshu Miglani )
              </span>
              <br />
              <br />
              For Event Related Queries : <br />{" "}
              <span className={Classes.orange} style={{ fontSize: "15px" }}>
                <a href="tel:9311863534">+91 9149204845</a> ( Pranshul )
                <br />
              </span>
              <br />
              <br />
            </div>
            <div className="col-md-6">
              <h5>Locate us:</h5>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.9605831669023!2d77.06617501508187!3d28.60095928243042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b31d6b7e947%3A0x9236de49bb264e3b!2sBhaskaracharya%20College%20of%20Applied%20Sciences%2C%20Pocket%202%2C%20Sector%202%20Dwarka%2C%20Dwarka%2C%20New%20Delhi%2C%20Delhi%20110075!5e0!3m2!1sen!2sin!4v1580306237577!5m2!1sen!2sin"
                width="300"
                height="250"
                frameborder="0"
                allowfullscreen=""
              ></iframe>
              <br />
              <br />
            </div>
            <div className="col-12 text-center">
              <img
                src="https://hitwebcounter.com/counter/counter.php?page=7187861&style=0025&nbdigits=5&type=page&initCount=0"
                title="Free-Counter"
                Alt="hitwebcounter"
                border="0"
              ></img>
              <br />
              © Department Of Computer Science
              <br />
              <span>
                Bhaskaracharya College of Applied Sciences,
                <br />
                University of Delhi
              </span>
            </div>
          </div>
        </ScrollAnimation>
      </section>
    </>
  );
};

export default Footer;
