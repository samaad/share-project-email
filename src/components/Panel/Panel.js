import React, { useState } from "react";
import "./panel.scss";
import Header from "../Header/Header";
import EmailComponent from "../Email/EmailComponent";
import Footer from "../Footer/Footer";

const BLOCK_NAME = "panel";
const Panel = () => {
  const [randomEmail, setRandomEmail] = useState([]);
  const [checkValidEmail, setCheckValidEmail] = useState(false);

  const checkValidEmails = () => {
    setCheckValidEmail(!checkValidEmail);
  };

  return (
    <div className={BLOCK_NAME}>
      <div className={`${BLOCK_NAME}__body`}>
        <Header />
        <EmailComponent emailList={randomEmail} checkEmail={checkValidEmail} />
      </div>
      <div className={`${BLOCK_NAME}__footer`}>
        <Footer funRandomEmail={setRandomEmail} checkEmail={checkValidEmails} />
      </div>
    </div>
  );
};

export default Panel;
