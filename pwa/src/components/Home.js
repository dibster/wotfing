import React from "react";

import { allActiveIds } from "./data/db";

class Home extends React.Component {
  allIds() {
    return JSON.stringify(allActiveIds());
  }

  render() {
    return (
      <div>
        <h1>Home : All Ids I have </h1>
        <div>{this.allIds()}</div>
      </div>
    );
  }
}
export default Home;
