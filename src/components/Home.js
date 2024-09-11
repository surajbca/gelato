import React from "react";
import Tshirt from "./images/cap.png";
import shopify from "./images/shopify.svg";
import choose from "./images/choose.png";
import mateo from "./images/mateo.png";
import connect from "./images/connect.png";
import printing from "./images/printing.png";
import start from "./images/star.svg";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <section className="sec1">
        <div className="contant-div">
          <div className="inline">
            <h1 className="H1">Print on demand for your ecommerce business</h1>
            <p className="p1">
              Sign up for free and only pay for what you sell
            </p>
            <p className="p2">
              Turn your passion into profit with the world's largest
              <span>
                <a style={{ color: "black" }} href="">
                  {" "}
                  print on demand
                </a>
              </span>{" "}
              network.
            </p>
            <div className="btn-div">
              <button className="button">Get started for free</button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button
                className="button"
                style={{ color: "black", background: "white" }}
              >
                See our products
              </button>
            </div>
            <div>
              <img className="shopify" src={shopify} alt="img" />
              <div>
                <span>
                  <img className="start" src={start} alt="img" />
                </span>
                &nbsp;
                <span>
                  <img className="start" src={start} alt="img" />
                </span>
                &nbsp;
                <span>
                  <img className="start" src={start} alt="img" />
                </span>
                &nbsp;
                <span>
                  <img className="start" src={start} alt="img" />
                </span>
                &nbsp;&nbsp;
                <span>4.8 / 5</span>
              </div>
              <span style={{ marginTop: "20px" }}>based on 887 reviews</span>
            </div>
          </div>
          <div className="inline">
            <img className="img" src={Tshirt}></img>
          </div>
        </div>
      </section>
      <section style={{ background: "#faf6ef" }}>
        <div className="score-div" style={{ textAlign: "center" }}>
          <div className="inline">
            <p style={{ fontSize: "30px", padding: "50px" }}>
              90% <br />
              of all orders are produced locally
            </p>
          </div>
          <div className="inline">
            <p style={{ fontSize: "30px", padding: "50px" }}>
              90% <br />
              of orders arrive within 5 days of ordering
            </p>
          </div>
          <div className="inline">
            <p style={{ fontSize: "30px", padding: "50px" }}>
              140+ <br />
              print providers across 32 countries
            </p>
          </div>
        </div>
      </section>
      <section className="sec3">
        <h2 className="h2">Why choose Gelato</h2>
        <div className="contant-div">
          <div className="inline">
            <img className="img" src={choose} alt="img" />
          </div>
          <div className="inline">
            <div>
              <p className="p4">
                <span>▻</span>World's largest print-on-demand network
              </p>
              <span>
                140+ print partners in 32 countries. Gelato is a truly global
                service.
              </span>
            </div>
            <div>
              <p className="p4">
                <span>▻</span>World's largest print-on-demand network
              </p>
              <span className="span-div">
                140+ print partners in 32 countries. Gelato is a truly global
                service.
              </span>
            </div>
            <div>
              <p className="p4">
                <span>▻</span>World's largest print-on-demand network
              </p>
              <span className="span-div">
                140+ print partners in 32 countries. Gelato is a truly global
                service.
              </span>
            </div>
            <div>
              <p className="p4">
                <span>▻</span>World's largest print-on-demand network
              </p>
              <span className="span-div">
                140+ print partners in 32 countries. Gelato is a truly global
                service.
              </span>
            </div>
            <div>
              <p className="p4">
                <span>▻</span>World's largest print-on-demand network
              </p>
              <span className="span-div">
                140+ print partners in 32 countries. Gelato is a truly global
                service.
              </span>
            </div>
            <div>
              <p className="p4">
                <span>▻</span>World's largest print-on-demand network
              </p>
              <span className="span-div">
                140+ print partners in 32 countries. Gelato is a truly global
                service.
              </span>
            </div>
            <div>
              <p className="p4">
                <span>▻</span>World's largest print-on-demand network
              </p>
              <span className="span_div">
                140+ print partners in 32 countries. Gelato is a truly global
                service.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="sec4">
        <div className="contant-div sellers-div">
          <div className="inline">
            <p className="p5">For print on demand sellers</p>
            <h3 className="h3">
              Accelerate business <br />
              growth with <br />
              innovative design
              <br /> tools and apps
            </h3>
            <p className="p6">
              See how our cutting-edge solutions can help you reach new
              customers and maximize your profits.
            </p>
            <button className="button">Get started</button>
          </div>
          <div className="inline">
            <img className="img" src={mateo} alt="img" />
          </div>
        </div>
      </section>
      <section className="sec5">
        <div className="contant-div">
          <div className="inline">
            <img className="img" src={connect} alt="img" />
          </div>
          <div className="inline print-div">
            <p className="p7">For print producers</p>
            <h4 className="h4">GelatoConnect</h4>
            <p className="p8">
              Elevate efficiency, cut costs, and seamlessly automate with our
              all-in-one software solution for the print industry
            </p>
            <button className="button">Lern more</button>
          </div>
        </div>
      </section>
      <section className="sec6">
        <div className="contant-div printing-div">
          <div className="inline">
            <h5 className="h5">
              Meet <br />
              GelatoConnect at <br />
              Printing United
            </h5>
            <p className="p9">
              Meet us at Printing United from September 10-12 in Las Vegas. Book
              your meeting slot to discover the innovative ways GelatoConnect is
              transforming the landscape and driving success for businesses like
              yours.
            </p>
            <button className="button">Book a meeting</button>
          </div>
          <div className="inline">
            <img className="img" src={printing} alt="img" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
