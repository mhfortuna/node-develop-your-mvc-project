import React from "react";

import "./DashButton.scss";

function DashButton({ children, ...props }) {
  return (
    <button type="button" className="customDashBtn" {...props}>
      {children}
    </button>
  );
}

export default DashButton;
