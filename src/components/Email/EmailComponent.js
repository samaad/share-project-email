import React, { useState } from "react";
import "./email.scss";

const BLOCK_NAME = "email";
const EmailComponent = () => {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");

  const handleKeyDown = (evt) => {
    if (["Enter", "Tab", ","].includes(evt.key)) {
      evt.preventDefault();
      const inputVal = value.trim();
      if (inputVal && isValid(inputVal)) {
        setItems([...items, inputVal]);
        setValue("");
      }
    }
  };

  const handleDelete = (item) => {
    setItems(items.filter((i) => i !== item));
  };

  const isValid = (email) => {
    let error = null;

    if (!isEmail(email)) {
      error = `${email} is not a valid email address.`;
    }

    if (error) {
      // TODO: if invalid email is enterd then do show some error message
      return false;
    }
    return true;
  };

  const isEmail = (email) => {
    return /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(email);
  };

  return (
    <div className={BLOCK_NAME}>
      <div className={`${BLOCK_NAME}__wrapper`}>
        {items.map((item) => (
          <div className={`${BLOCK_NAME}__wrapper__tag-item`} key={item}>
            {item}
            <span
              className={`${BLOCK_NAME}__wrapper__close-button`}
              onClick={() => handleDelete(item)}
            >
              &times;
            </span>
          </div>
        ))}
        <input
          className={`${BLOCK_NAME}__wrapper__inputtext`}
          value={value}
          placeholder="Type email addresses..."
          onKeyDown={(e) => handleKeyDown(e)}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default EmailComponent;
