import React, { useState } from "react";
import workAPi from "./workApi";

const HowItWorks = () => {
  const [workData, setWorkData] = useState();
  console.log(workData);
  return (
    <div>
      <section>
        <div className="work-container container">
          <h1 className="main-heading text-center">How does it work</h1>
          <div className="row">
            {workAPi.map((curElem) => {
              const { id, title, logo, info } = curElem;
              return (
                <>
                  <div className="col-12 col-lg-4 text-center work-container-subdiv">
                    <i className={`fontawesome-style ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para w-100">{info}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
