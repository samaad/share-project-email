import React from 'react'
import PropTypes from 'prop-types'
import './footer.scss';

const BLOCK_NAME= 'button';

const Button = ({lable}) => {
  return (
    <button className={BLOCK_NAME}>
      {lable}
    </button>
  )
}

Button.propTypes = {
  lable: PropTypes.string.isRequired
}

export default Button
