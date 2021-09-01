import React from "react";
import cn from "clsx";

import "./Button.scss";

export default function Button({
  submitButton = false,
  disabled = false,
  black = false,
  light = false,
  // transparent = false,
  children,
  ...props
}) {
  const classes = cn({
    "custom-btn w-100": true,
    backgroundDark: black,
    backgroundLight: light,
    // "btn-outline-dark medium-text": transparent,
  });

  return (
    <button
      className={classes}
      type={submitButton ? "submit" : "button"}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
