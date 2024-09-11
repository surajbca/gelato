import React from "react";
import "./Footer.css";
import App from "./images/App-store.svg";
import google from "./images/google-store.svg";
import gelato from "./images/gelato-logo-white.svg";
import instagram from "./images/instagram.svg";
import facebook from "./images/facebook.svg";
import tiktok from "./images/tiktok.svg";
import linkedin from "./images/linkedin.svg";
import youtube from "./images/youtube.svg";
const Footer = () => {
  return (
    <footer className="footer-bar">
      <div className="footer-div">
        <div className="social_icon">
          <div>
            <img className="gelato-white-icon" src={gelato} alt="" />
          </div>
          <div>
            <span>Find Gelato on:</span>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <span>
              <img className="instagram-icon" src={instagram} alt=""></img>
            </span>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <span>
              <img className="instagram-icon" src={facebook} alt=""></img>
            </span>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <span>
              <img className="instagram-icon" src={tiktok} alt=""></img>
            </span>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <span>
              <img className="instagram-icon" src={linkedin} alt=""></img>
            </span>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <span>
              <img className="instagram-icon" src={youtube} alt=""></img>
            </span>
          </div>
        </div>
        <div className="footer-item">
          <div style={{ marginTop: "25px" }}>
            <span>
              Gelato has created the world's largest network for local
              production and distribution of customized products. Together we
              bring creativity to life - and into business.
            </span>

            <div style={{ marginTop: "20px" }}>
              <button
                className="button"
                style={{ color: "black", background: "white" }}
              >
                Get started
              </button>
            </div>
            <br />
            <p>Get the app</p>
            <br />
            <div>
              <span>
                <img src={App} alt="img" />
              </span>
              &nbsp;&nbsp;
              <span>
                <img src={google} alt="img" />
              </span>
            </div>
          </div>
          <div style={{ marginTop: "25px" }}>
            <h6 style={{ fontSize: "15px" }}>Print on demand</h6>
            <ul>
              <li>
                <a href="#">What is print on demand?</a>
              </li>
              <li>
                <a href="#">Product catalog</a>
              </li>
              <li>
                <a href="#">Shipping and delivery</a>
              </li>
              <li>
                <a href="#">Dropshipping products</a>
              </li>
              <li>
                <a href="#">Pro sellers</a>
              </li>
              <li>
                <a href="#">White label products</a>
              </li>
              <li>
                <a href="#">Returns policy</a>
              </li>
              <li>
                <a href="#">Global, yet local</a>
              </li>
              <li>
                <a href="#">Sustainability</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
          <div style={{ marginTop: "25px" }}>
            <h6 style={{ fontSize: "15px" }}>Integrations</h6>
            <ul>
              <li>
                <a href="#">Shopify</a>
              </li>

              <li>
                <a href="#">Etsy</a>
              </li>
              <li>
                <a href="#">WooCommerce</a>
              </li>
              <li>
                <a href="#">Wix</a>
              </li>
              <li>
                <a href="#">Squarespace</a>
              </li>
              <li>
                <a href="#">BigCommerce</a>
              </li>
              <li>
                <a href="#">API</a>
              </li>
            </ul>
          </div>
          <div style={{ marginTop: "25px" }}>
            <h6 style={{ fontSize: "15px" }}>Start selling</h6>
            <ul>
              <li>
                <a href="#">Embroidery</a>
              </li>
              <li>
                <a href="#">Print on demand t-shirts</a>
              </li>
              <li>
                <a href="#">Print on demand hoodies</a>
              </li>
              <li>
                <a href="#">Print on demand posters</a>
              </li>
              <li>
                <a href="#">Print on demand canvas</a>
              </li>
              <li>
                <a href="#">Print on demand calendars</a>
              </li>
              <li>
                <a href="#">Print on demand mugs</a>
              </li>
              <li>
                <a href="#">Custom products</a>
              </li>
              <li>
                <a href="#">Custom clothing</a>
              </li>
              <li>
                <a href="#">Custom merchandise</a>
              </li>
              <li>
                <a href="#">Custom phone cases</a>
              </li>
              <li>
                <a href="#">Print on demand Europe</a>
              </li>
              <li>
                <a href="#">Print on demand UK</a>
              </li>
              <li>
                <a href="#">Print on demand France</a>
              </li>
              <li>
                <a href="#">Print on demand Canada</a>
              </li>
              <li>
                <a href="#">Merch maker</a>
              </li>
            </ul>
          </div>
          <div style={{ marginTop: "25px" }}>
            <h6 style={{ fontSize: "15px" }}>Company</h6>
            <ul>
              <li>
                <a href="#">GelatoConnect</a>
              </li>
              <li>
                <a href="#">About Gelato</a>
              </li>
              <li>
                <a href="#">Leadership team</a>
              </li>
              <li>
                <a href="#">Board & investors</a>
              </li>
              <li>
                <a href="#">Newsroom</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Customer Stories</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Affiliates program</a>
              </li>
            </ul>
          </div>
        </div>
        <div style={{ marginTop: "25px" }}>
          <p style={{ display: "flex" }}>
            <span>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <a href="" style={{ textDecoration: "none", color: "white" }}>
                    Contact us
                  </a>
                </li>
              </ul>
            </span>
            &nbsp;
            <span>|</span>&nbsp;
            <span>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="#"
                  >
                    Privacy policy
                  </a>
                </li>
              </ul>
              &nbsp;
            </span>
            &nbsp;
            <span>|</span>&nbsp;
            <span>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="#"
                  >
                    Cookie policy
                  </a>
                  &nbsp;
                  <span>|</span>
                  &nbsp;
                </li>
              </ul>
            </span>
            &nbsp;
            <span>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="#"
                  >
                    API terms
                  </a>
                  &nbsp;
                  <span>|</span>
                  &nbsp;
                </li>
              </ul>
            </span>
            <span>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="#"
                  >
                    Sitemap
                  </a>
                </li>
              </ul>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
