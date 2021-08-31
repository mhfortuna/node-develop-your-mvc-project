import React from "react";
import cn from "clsx";

import "./Button.scss";

export default function Button({
  submitButton = false,
  disabled = false,
  black = false,
  grey = false,
  children,
  ...props
}) {
  const classes = cn({
    btn: true,
    black: black,
    grey: grey,
    "w-100": true,
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
