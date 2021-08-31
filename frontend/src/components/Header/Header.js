import React from "react";

import "./Header.scss";

export default function Header() {
  return (
    <header className="container-fluid m-0 row">
      <div className="col col-8 title p-0 font-bold ">The Camera Project</div>
      <div className="col col-4 row d-flex p-0 user-wrapper ">
        <div className="col col-10 p-0 pe-3 user-name">Username</div>
        <div className="col col-2 btn btn-outline-dark">Log in</div>
      </div>
    </header>
  );
}
