import React, { useState, memo, useEffect } from "react";
import "./email.scss";

const BLOCK_NAME = "email";
const EmailComponent = ({ emailList, checkEmail }) => {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    const validEmail =
      items && items.filter((item) => isValid(item) === true).length;
    if (validEmail > 0) {
      alert(
        `Total Email entered are ${items.length} and valid Email Count is ${validEmail}`
      );
    }
  }, [checkEmail]);

  useEffect(() => {
    if (emailList && emailList.length > 0) {
      setItems([...emailList]);
    }
  }, [emailList]);

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

  const handlePaste = (e) => {
    const pasterEmail = e.clipboardData.getData("Text");
    if (pasterEmail) {
      const emails = pasterEmail.split(",");
      setItems([...items, ...emails]);
    }
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
          onPaste={(e) => handlePaste(e)}
        />
      </div>
    </div>
  );
};

export default memo(EmailComponent);
