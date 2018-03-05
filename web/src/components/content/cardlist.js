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
  },
  {
    user: "Dan",
    avatar: "../../images/dibster.jpg",
    added: "about 5 days ago",
    picture: "../../images/StockSnap_G8QICMKLUV.jpg",
    name: "Salmon",
    rating: 5,
    heat: 5,
    tags: ["Fish"]
  }
];

const WfCardList = props => (
  // <div>content</div>;

  <div>{testCards.map(carditem => <WfCard card={carditem} />)}</div>
);

export default WfCardList;
