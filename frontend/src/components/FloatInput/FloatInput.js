import React from "react";
import cn from "clsx";

import "./FloatInput.scss";

export default function FloatInput({
  type = "text",
  label = "input-01",
  id = "input-01",
  value = "",
  placeholder = "",
  handleChange = () => {},
  handleBlur = () => {},
  errorMessage,
  hasErrorMessage,
  ...props
}) {
  const classes = cn({
    "rounded-0 float-input": true,
    "is-invalid": hasErrorMessage && errorMessage,
    "is-valid": hasErrorMessage && !errorMessage,
  });

  return (
    <>
      <div className="form-floating mb-2">
        <input
          type={type}
          className={classes}
          id={id}
          name={id}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          {...props}
        />
        {hasErrorMessage && errorMessage && (
          <p className="error-msg">{errorMessage}</p>
        )}
        <label htmlFor={id}>{label}</label>
      </div>
    </>
  );
}
