import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <div className="footer">
        <img src="../images/logo.svg"></img>
        <p className="para">Lorem Ipsum is simply dummy text of </p>

        <div className="details">
          <img src="../images/icon-phone.svg"></img>
          <h3>Phone: +11 -8958795473</h3>
        </div>
        <div className="detail-msg">
          <img src="../images/icon-email.svg"></img>
          <h3>example@huddle.com</h3>
        </div>
        <div className="social-icon">
          <img src="../images/facebook.svg"></img>
          <img src="../images/twitter.svg"></img>
          <img src="../images/instagram.svg"></img>
        </div>
        <div className="news">
          <h4>NEWSLETTER</h4>
          <p className="para">
            Lorem Ipsum is simply dummy text of Lorem Ipsum is simply dummy text
            of
          </p>
          <input></input>
        </div>
      </div>
    </Fragment>
  );
};
export default Footer;
