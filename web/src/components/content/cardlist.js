import React from "react";
import WfCard from "./card";
import {
  momentFromTimestamp,
  timestampFromDate
} from "../../utils/datefunctions";

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
    avatar:
      "https://content.screencast.com/users/Dashenhurst/folders/Jing/media/3fa726cd-820a-4e9a-9e7a-e39935b3f593/00002395.png",
    added: "about 5 days ago",
    picture: "../../images/StockSnap_G8QICMKLUV.jpg",
    name: "Salmon",
    rating: 5,
    heat: 5,
    tags: ["Fish"]
  },
  {
    user: "Claire",
    avatar:
      "https://content.screencast.com/users/Dashenhurst/folders/Jing/media/7ec56199-4bbd-4c91-93f9-5414e798c9e0/00002396.png",
    added: "about 10 days ago",
    picture: "../../images/StockSnap_LVXXHV4D98.jpg",
    name: "Kebab a Chip",
    rating: 5,
    heat: 5,
    tags: ["Chicken"]
  }
];

console.log(momentFromTimestamp());
console.log(timestampFromDate());

const WfCardList = props => (
  // <div>content</div>;

  <div>{testCards.map(carditem => <WfCard card={carditem} />)}</div>
);

export default WfCardList;
