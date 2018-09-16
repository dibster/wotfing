import React from "react";

import { allActiveIds } from "./data/db";

import ItemReviewCard from "./Card";

class Home extends React.Component {
  allIds() {
    const allItems = allActiveIds();
    return allItems;
  }

  render() {
    return (
      <div>
        {/* <h1>Home : All Ids I have </h1>
        <div>{this.allIds()}</div> */}
        {this.allIds().map(item => {
          return (
            <div key={item.id}>
              <ItemReviewCard item={item} />
              <br />
            </div>
          );
        })}
      </div>
    );
  }
}
export default Home;
