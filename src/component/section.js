import React, { Fragment } from "react";
import images from "../bg-section-top-desktop-1.svg";
const Section = () => {
  return (
    <Fragment>
      <div
        className="about"
        style={{
          backgroundImage: `url(${images})`,
        }}
      >
        <div className="section">
          <h1>Grow Together</h1>
          <p>Generate meaningful discussions with your audience and build a</p>
          <p>
            strong, loyal community. Think of the insightful conversations you
          </p>
          <p> miss out on with a feedback form</p>
        </div>
        <div className="aboutimg">
          <img src="./images/illustration-grow-together.svg"></img>
        </div>
      </div>

      <div className="flowing-section">
        <div className="aboutimg">
          <img src="./images/illustration-flowing-conversation.svg"></img>
        </div>
        <div className="">
          <h1>Flowing conversation</h1>
          <p>Generate meaningful discussions with your audience and build a</p>
          <p>
            strong, loyal community. Think of the insightful conversations you
          </p>
          <p> miss out on with a feedback form</p>
        </div>
      </div>
      <div
        className="about"
        style={{
          backgroundImage: `url(${images})`,
        }}
      >
        <div className="section">
          <h1>Your Users</h1>
          <p>Generate meaningful discussions with your audience and build a</p>
          <p>
            strong, loyal community. Think of the insightful conversations you
          </p>
          <p> miss out on with a feedback form</p>
        </div>
        <div className="aboutimg">
          <img src="./images/illustration-your-users.svg"></img>
        </div>
      </div>
      <div className="last">
        <h1>Ready To Build Your Community</h1>
        <button className="btn">Get Started For Free</button>
      </div>
    </Fragment>
  );
};
export default Section;
