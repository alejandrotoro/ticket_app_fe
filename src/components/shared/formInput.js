import React from 'react';
import PropTypes from 'prop-types';

const FormInput = (props) => {
  const {
    id,
    name,
    type,
    placeholder,
    onChange,
    className,
    value,
    error,
    label
  } = props;
  const inputClass = error ? `${className} input-error` : className;
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        className={inputClass}
        onChange={onChange}
        autoComplete="false"
      />
      {
        error ? <p className='input-error-label'>{error}</p> : ''
      }
    </>
  )
}

FormInput.defaultProps = {
  type: 'text',
  className: ''
}

FormInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'number', 'password']),
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired
}

export default FormInput;
