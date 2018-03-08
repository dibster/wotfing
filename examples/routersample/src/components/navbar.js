import React from "react";
import { withRouter } from "react-router-dom";

const Navbar = withRouter(({ history }) => (
  <div>
    <button
      type="button"
      onClick={() => {
        history.push("/");
      }}
    >
      Main
    </button>
    <button
      type="button"
      onClick={() => {
        history.push("/admin");
      }}
    >
      Admin
    </button>
  </div>
));

export default Navbar;
