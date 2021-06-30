import React from "react";
import "./panel.scss";
import Header from "../Header/Header";
import EmailComponent from "../Email/EmailComponent";
import Footer from "../Footer/Footer";

const BLOCK_NAME = "panel";
const Panel = () => {
  return (
    <div className={BLOCK_NAME}>
      <div className={`${BLOCK_NAME}__body`}>
        <Header />
        <EmailComponent />
      </div>
      <div className={`${BLOCK_NAME}__footer`}>
        <Footer />
      </div>
    </div>
  );
};

export default Panel;
