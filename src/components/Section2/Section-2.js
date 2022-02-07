import Card from "./Card";
import bg43 from "../../assets/images/bg43.png";
import bg45 from "../../assets/images/bg45.png";
import bg48 from "../../assets/images/bg48.png";
import upside46 from "../../assets/images/upside46.png";
import downside47 from "../../assets/images/downside47.png";

import peace from "../../assets/images/peace.png";
import fiscal from "../../assets/images/fiscal.png";
import gender from "../../assets/images/gender.png";
import extract from "../../assets/images/extract.png";
import citizens from "../../assets/images/citizens.png";

import "./Style.css";
import Path from "../../routes";
import { Link } from "react-router-dom";

function Section2() {
  return (
    <section className="section-2">
      <div className="section">
        <div
          style={{
            backgroundImage: `url(${bg45})`,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-end",
            width: "12rem",
            height: "50rem",
            backgroundSize: "80%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center right",
          }}
        >
          <div
            style={{
              backgroundImage: `url(${bg48})`,
              width: "8rem",
              height: "25rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-end",
              backgroundRepeat: "no-repeat",
              backgroundSize: "50%",
            }}
          >
            <img
              src={upside46}
              alt="p"
              style={{
                // color: "royalblue",
                // backgroundColor: "royalblue",
                width: "2.5rem",
                height: "2rem",
              }}
            />
            <img
              src={downside47}
              alt="p"
              style={{
                // color: "brown",
                // backgroundColor: "brown",
                width: "2.5rem",
                height: "2rem",
              }}
            />
          </div>
        </div>
        <div className="top" style={{ backgroundImage: `url(${bg43})` }}>
          <div className="sideA">
            <div className="card-title">
              <Link to={Path.register}>
                <button className="btn">Login/Register</button>
              </Link>
              <div className="Title">
                <h1>Current</h1>
                <h1
                  style={{
                    color: "#FF7D45",
                  }}
                >
                  Action Plan
                </h1>
              </div>
            </div>
            <div>
              <p className="description">
                Plateau joined OGP as part of the 2020 cohort. They are
                currently implementing five commitments from their 2021-2023
                action plan. This action plan features commitments related to
                open contracting, public participation, gender, and extractive
                industries.
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              padding: "2rem",
              width: "100%",
              flexWrap: "wrap",
            }}
          >
            <Card
              imageUrl={fiscal}
              description="Lorem ipsum dolor, sit amet consejdusjctetur adipisicing elit.
                Architecto, neque. Quaerat vel"
              Title="Fiscal Transparency"
            />
            <Card
              imageUrl={citizens}
              description="Lorem ipsum dolor, sit amet consejdusjctetur adipisicing elit.
                Architecto, neque. Quaerat vel"
              Title="Citizen Engagement"
            />
            <Card
              imageUrl={extract}
              description="Lorem ipsum dolor, sit amet consejdusjctetur adipisicing elit.
                Architecto, neque. Quaerat vel"
              Title="Extractive Transparency"
            />
            <Card
              imageUrl={gender}
              description="Lorem ipsum dolor, sit amet consejdusjctetur adipisicing elit.
                Architecto, neque. Quaerat vel"
              Title="Gender Commitment"
              style={{
                backgroundColor: "#ffff",
                borderBottom: "0.3rem solid #ff7d45",
              }}
              styleb={{ color: "rgb(170,170,170)" }}
              stylec={{ color: "rgb(15,15,15)" }}
            />
            <Card
              imageUrl={peace}
              description="Lorem ipsum dolor, sit amet consejdusjctetur adipisicing elit.
                Architecto, neque. Quaerat vel"
              Title="Peace & Security"
              style={{
                backgroundColor: "#ffff",
                borderBottom: "0.3rem solid #ff7d45",
              }}
              styleb={{ color: "rgb(170,170,170)" }}
              stylec={{ color: "rgb(15,15,15)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
