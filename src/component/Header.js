import React, { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <nav className="nav">
        <ul>
          <li>
            <img src="../images/logo.svg"></img>
          </li>

          <button>Try It Free</button>
        </ul>
      </nav>
    </Fragment>
  );
};
export default Header;
