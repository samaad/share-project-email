import React, { memo } from "react";
import "./footer.scss";
import Button from "./Button";

const BLOCK_NAME = "footer";

const Footer = () => {
  return (
    <div className={BLOCK_NAME}>
      <Button lable={"Add email"} />
      <Button lable={"Get emails count"} />
    </div>
  );
};

export default memo(Footer);
