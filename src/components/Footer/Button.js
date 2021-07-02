import React from 'react'
import PropTypes from 'prop-types'
import './footer.scss';

const BLOCK_NAME= 'button';

const Button = ({lable, clickHandler}) => {
  return (
    <button className={BLOCK_NAME} onClick={clickHandler}>
      {lable}
    </button>
  )
}

Button.propTypes = {
  lable: PropTypes.string.isRequired
}

export default Button
