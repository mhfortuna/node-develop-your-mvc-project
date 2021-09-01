import React from "react";
import cn from "clsx";

import "./Button.scss";

export default function Button({
  submitButton = false,
  disabled = false,
  black = false,
  light = false,
  transparent = false,
  fullWidth = false,
  children,
  handleClick = () => {},
  ...props
}) {
  const classes = cn({
    "custom-btn": true,
    "px-4": !fullWidth,
    "w-100": fullWidth,
    backgroundDark: black,
    backgroundLight: light,
    "btn-outline-dark medium-text": transparent,
  });

  return (
    <button
      className={classes}
      type={submitButton ? "submit" : "button"}
      disabled={disabled}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}
