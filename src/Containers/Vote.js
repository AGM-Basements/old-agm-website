import React, { Component } from "react";
import { Helmet } from "react-helmet";
import GeneralBanner from "../Common/BannerParts/GeneralBanner";
import { Link } from "react-router-dom";

class ContactUs extends Component {
  static propTypes = {};

  state = {};

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Renovations | Vote</title>
        </Helmet>
        <GeneralBanner title="Vote" />
        <section id="vote-options" className="sticky-nav-top-margin">
          <div className="options">
            <div className="single-option">
              <div className="left">
                <div className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M448 64V12c0-6.6-5.4-12-12-12H140c-6.6 0-12 5.4-12 12v52H12C5.4 64 0 69.4 0 76v61.6C0 199.7 68.1 272 160.7 285.7c29.4 60.7 73.7 90.3 111.3 96.9V480h-86c-14.4 0-26 11.7-26 26.1 0 3.3 2.7 5.9 6 5.9h244c3.3 0 6-2.6 6-5.9 0-14.4-11.6-26.1-26-26.1h-86v-97.4c37.7-6.6 81.9-36.2 111.3-96.9C508 272 576 199.6 576 137.6V76c0-6.6-5.4-12-12-12H448zM32 137.6V96h96v24c0 51.8 7 94.9 18.5 130.2C77.9 232.5 32 178 32 137.6zM288 352c-72 0-128-104-128-232V32h256v88c0 128-56 232-128 232zm256-214.4c0 40.4-46 94.9-114.5 112.6C441 214.9 448 171.8 448 120V96h96v41.6z" />
                  </svg>
                </div>
              </div>
              <div className="right">
                <h3>Employee of the Month</h3>
                <p>
                  Employees Include: Office Staff, Sales Team, Project Managers,
                  General Managers, Designers, and Measurers.
                </p>
                <Link to="/employeeofthemonth">Vote for Employee</Link>
              </div>
            </div>

            <div className="single-option">
              <div className="left">
                <div className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M448 64V12c0-6.6-5.4-12-12-12H140c-6.6 0-12 5.4-12 12v52H12C5.4 64 0 69.4 0 76v61.6C0 199.7 68.1 272 160.7 285.7c29.4 60.7 73.7 90.3 111.3 96.9V480h-86c-14.4 0-26 11.7-26 26.1 0 3.3 2.7 5.9 6 5.9h244c3.3 0 6-2.6 6-5.9 0-14.4-11.6-26.1-26-26.1h-86v-97.4c37.7-6.6 81.9-36.2 111.3-96.9C508 272 576 199.6 576 137.6V76c0-6.6-5.4-12-12-12H448zM32 137.6V96h96v24c0 51.8 7 94.9 18.5 130.2C77.9 232.5 32 178 32 137.6zM288 352c-72 0-128-104-128-232V32h256v88c0 128-56 232-128 232zm256-214.4c0 40.4-46 94.9-114.5 112.6C441 214.9 448 171.8 448 120V96h96v41.6z" />
                  </svg>
                </div>
              </div>
              <div className="right">
                <h3>Trade of the month</h3>
                <p>Trades include Employed and Sub trades.</p>
                <Link to="/tradeofthemonth">Vote for Trade</Link>
              </div>
            </div>
          </div>
        </section>

        <section id="below-options" className="">
          <p>
            <strong>Let’s work together</strong> to grow AGM Basements to new
            heights while recognizing members of our team that go above and
            beyond for our clients.
          </p>
        </section>
      </>
    );
  }
}

export default ContactUs;
