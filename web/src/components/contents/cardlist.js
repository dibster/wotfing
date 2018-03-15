import React from "react";
import WfCard from "./card";
import {
  momentFromTimestamp,
  timestampFromDate
} from "../../utils/datefunctions";

import { allItems } from "../db/jsondb";

// return all items in the freezer
const testCards = allItems("freezer");

const WfCardList = props => (
  <div>{testCards.map(carditem => <WfCard card={carditem} />)}</div>
);

export default WfCardList;
