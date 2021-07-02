import React, { memo } from "react";
import "./footer.scss";
import Button from "./Button";
import { randomElement } from "../Email/constant";

const BLOCK_NAME = "footer";

const Footer = ({ funRandomEmail, checkEmail }) => {
  const addRandomEmail = () => {
    const random = Math.floor(Math.random() * randomElement.length);
    funRandomEmail(randomElement.slice(0, random === 0 ? 1 : random));
  };

  const validEmailCount = () => {
    checkEmail();
  };

  return (
    <div className={BLOCK_NAME}>
      <Button lable={"Add email"} clickHandler={addRandomEmail} />
      <Button lable={"Get emails count"} clickHandler={validEmailCount} />
    </div>
  );
};

export default memo(Footer);
