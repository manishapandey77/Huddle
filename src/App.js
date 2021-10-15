import React, { Fragment } from "react";
import Header from "./component/Header";
import MainSection from "./component/MainSection";
import Section from "./component/section";
import Footer from "./component/Footer";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <MainSection></MainSection>
      <Section></Section>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
