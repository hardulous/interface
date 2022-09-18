import React from "react";
import Classes from "./Section3.module.css";
import { Element } from "react-scroll";
const Section3 = () => {
  return (
    <>
      <Element name="CSnet" id="CSnet">
        <section
          className={Classes.Section3}
          style={{ padding: "40px", background: "#f4f6f6" }}
        >
          <br />
          <h1>TEAM.</h1>
          <br />
          <div className="row">
            <div className="col-md-2 offset-md-1 col-6">
              <div className={Classes.Modal}>
                <div>
                  <img src="assets/csnet/Vishnu.jpg" />
                </div>
                <div className={Classes.Details}>
                  <br />
                  <h4>Vishnu Kumar</h4>
                  <h6>President</h6>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-6">
              <div className={Classes.Modal}>
                <div>
                  <img src="assets/csnet/Sandeep.jpeg" />
                </div>
                <div className={Classes.Details}>
                  <br />
                  <h4>Sandeep</h4>
                  <h6>Vice President</h6>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-6">
              <div className={Classes.Modal}>
                <div>
                  <img src="assets/csnet/Surya1.jpg" />
                </div>
                <div className={Classes.Details}>
                  <br />
                  <h4>Surya Pratap</h4>
                  <h6>Secretary</h6>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-6">
              <div className={Classes.Modal}>
                <div>
                  <img src="assets/csnet/Ananya.JPG" />
                </div>
                <div className={Classes.Details}>
                  <br />
                  <h4>Anannya Singh</h4>
                  <h6>Joint Secretary</h6>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-6">
              <div className={Classes.Modal}>
                <div>
                  <img src="assets/csnet/Pankaj.jpeg" />
                </div>
                <div className={Classes.Details}>
                  <br />
                  <h4>Pankaj</h4>
                  <h6>Treasurer</h6>
                </div>
              </div>
            </div>
            <div className="col-md-2 offset-md-2 col-6">
              <div className={Classes.Modal}>
                <div>
                  <img src="assets/csnet/itzhrithan.jpg" />
                </div>
                <div className={Classes.Details}>
                  <br />
                  <h4>Ritik Chauhan</h4>
                  <h6>Web Developer</h6>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-6">
              <div className={Classes.Modal}>
                <div>
                  <img src="assets/csnet/Neelam.jpeg" />
                </div>
                <div className={Classes.Details}>
                  <br />
                  <h4>Neelam</h4>
                  <h6>Creative Committee</h6>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-6">
              <div className={Classes.Modal}>
                <div>
                  <img src="assets/csnet/Nitin.JPG" />
                </div>
                <div className={Classes.Details}>
                  <br />
                  <h4>Nitin Mishra</h4>
                  <h6>Event Management #1</h6>
                </div>
              </div>
            </div>

            <div className="col-md-2 col-6">
              <div className={Classes.Modal}>
                <div>
                  <img src="assets/csnet/Ashish.JPG" />
                </div>
                <div className={Classes.Details}>
                  <br />
                  <h4>Ashish</h4>
                  <h6>Event Management #2</h6>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>
    </>
  );
};

export default Section3;
