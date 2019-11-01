import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './all.sass'
import { FaHome, FaEnvelope, FaPhone, FaGlobe, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

const black = {
  color: 'black'
};

const marign = {
  width: "60px"
};

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="page-footer font-small unique-color-dark">


        <div className="footer-background">
          <div className="container">


            <div className="row py-4 d-flex align-items-center">

              <div id="footer" className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                <h6 className="mb-0">Get connected with us on social networks!</h6>
              </div>



              <div className="col-md-6 col-lg-7 text-center text-md-right">


                <a href="https://www.facebook.com/thefork.online" className="social-btn">
                  <i className="fab white-text"><FaFacebookF /></i>
                </a>

                <a href="https://twitter.com/foodchained" className="social-btn">
                  <i className="fab white-text"><FaTwitter /></i>
                </a>

                <a href="https://www.linkedin.com/company/thefork/" className="social-btn">
                  <i className="fab white-text"><FaLinkedinIn /></i>
                </a>
                <a href="https://www.instagram.com/_thefork_/" className="social-btn">
                  <i className="fab white-text"><FaInstagram /></i>
                </a>
                <a href="https://www.youtube.com/channel/UCsyBw9YNtg9KVm_XUgjW6jA" className="social-btn">
                  <i className="fab white-text"><FaYoutube /></i>
                </a>
              </div>

            </div>

          </div>
        </div>

        <div className="container text-center text-md-left mt-5">

          <div className="row mt-3">

            <div className="col-md-3 col-lg-4 col-xl-5 mx-auto mb-4">

              <h6 className="text-uppercase font-weight-bold">The Fork</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto line-width" style={marign} />
              <p>
                the company that is on the frontier of blockchain technology. The Fork offers blockchain courses in Amsterdam, blockchain in-house trainings and assists companies in the agrifood industry implementing blockchain technology.
                            </p>

            </div>

            <div id="footer" className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

              <h6 className="text-uppercase font-weight-bold" style={black}>Sitemap</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={marign} />
              <p>
                <a href="test.com">fakelink</a>
              </p>
              <p>
                <a href="test.com">fakelink</a>
              </p>
              <p>
                <a href="test.com">fakelink</a>
              </p>
              <p>
                <a href="test.com">fakelink</a>
              </p>

            </div>

            <div id="footer" className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

              <h6 className="text-uppercase font-weight-bold" style={black}>Contact</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={marign} />
              <p>
                <i className="fas mr-3"><FaHome /></i> Science Park 608</p>
              <p>
                <i className="fa mr-3"><FaMapMarkerAlt /></i> 1098 XH Amsterdam</p>
              <p><a href="mailto:hi@thefork.online">
                <i className="fas mr-3"><FaEnvelope /></i> hi@thefork.online</a></p>
              <p><a href="tel:+31613502191">
                <i className="fas mr-3"><FaPhone /></i> +31 6 13502191</a></p>
              <p><a href="thefork.online">
                <i className="fa mr-3"><FaGlobe /></i> thefork.online</a></p>
            </div>

          </div>
        </div>

        <div className="container-fluid">
          <hr />
        </div>

        <div id="footer" className="footer-copyright text-center py-3">
          <strong>© 2019 Copyright:<a href="thefork.online"> thefork.online</a></strong>
        </div>


      </footer>
    )
  }
}

export default Footer
