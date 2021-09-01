import React from "react";

import "./DashButton.scss";

function DashButton({ children, classes, ...props }) {
  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}

export default DashButton;
