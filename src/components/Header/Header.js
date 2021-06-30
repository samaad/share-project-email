import React from "react";
import PropTypes from "prop-types";
import "./header.scss";

const BLOCK_NAME = "header";
const Header = ({ title }) => {
  return (
    <div className={BLOCK_NAME}>
      <p
        dangerouslySetInnerHTML={{
          __html: title,
        }}
      />
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title:
    "Share&nbsp;<span class='header__projectname'>Project name</span>&nbsp;with others",
};

export default Header;
