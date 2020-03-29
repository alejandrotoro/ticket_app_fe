import React from 'react'

const formInput = (props) => {
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

export default formInput
