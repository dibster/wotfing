import React from "react";
import WfCard from "./card";

const testCards = [
  {
    user: "The Dibster",
    avatar: "../../images/dibster.jpg",
    added: "about 2 days ago",
    picture: "../../images/StockSnap_2FQVE28HNU.jpg",
    name: "Chilli",
    rating: 5,
    heat: 5,
    tags: ["kids"]
  }
];

const WfCardList = props => (
  // <div>content</div>;
  <div>
    <WfCard card={testCards[0]} />
    <WfCard card={testCards[0]} />
  </div>
);

export default WfCardList;
