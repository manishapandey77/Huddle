import React, { Fragment } from "react";
const MainSection = () => {
  return (
    <Fragment>
      <div className="main">
        <h1>Build The Community Your Fans Will Love</h1>
        <p>It is a long established fact that a reader will be</p>
        <p>readable content of a page when at its layout.</p>
        <button className="btn">Get Started For Free</button>

        <div className="img">
          <img src="./images/screen-mockups.svg"></img>
        </div>
        <div className="com-mesg">
          <div className="community">
            <img src="./images/icon-communities.svg"></img>
            <h2>1.4k+ </h2>
            <p>Communities Members</p>
          </div>
          <div className="message">
            <img src="./images/icon-messages.svg"></img>

            <h2>2.7m+</h2>
            <p>Messages Save</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default MainSection;
