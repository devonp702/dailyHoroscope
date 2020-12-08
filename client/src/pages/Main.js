import React, { Component } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import JournalContainer from "../components/JournalContainer";
import Aztro from "../components/selectors/Aztro";

class Main extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-7 col-lg-7">
              <Aztro />
              {/* <br />
              <h2>Readings, Links, and More.</h2>
              <br />
              <p>
                Enjoy the links and prediction readings below to help you plan
                your day. Use the Journal to the right to write your thoughts,
                dreams, and feelings.
              </p> */}
            </div>
            <div className="col-sm-12 col-md-5 col-lg-5">
              <div className="scrollHeader">
                <h1 className="display-4">Journal</h1>
                <JournalContainer />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Main;
