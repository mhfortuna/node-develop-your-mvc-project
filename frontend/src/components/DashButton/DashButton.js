import React from "react";
import cn from "clsx";

import "./DashButton.scss";

function DashButton({
  children,
  white = false,
  dark = false,
  handleClick,
  ...props
}) {
  const classes = cn({
    customDashBtn: true,
    white: white,
    customDark: dark,
  });

  return (
    <button type="button" className={classes} onClick={handleClick} {...props}>
      {children}
    </button>
  );
}

export default DashButton;
