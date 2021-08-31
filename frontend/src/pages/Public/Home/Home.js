import React from "react";

import withLayout from "../../../hoc/withLayout";

function Home() {
  return (
    <div className="row page-div">
      <div className="col col-8 page-left">Home page</div>
      <div className="col col-4 sidebar">Sidebar</div>
    </div>
  );
}

export default withLayout(Home);
