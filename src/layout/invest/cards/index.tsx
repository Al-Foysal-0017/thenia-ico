import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { RiRefreshLine } from "react-icons/ri";
import { FaPercent } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { BiInfoCircle } from "react-icons/bi";
import "./_cards.scss";

const cardsData1 = [
  {
    title: "45 Days",
    subtitle: "Until Beginning of Conversion",
    icon: <AiOutlineCalendar size={30} />,
    style: "cards__card card-1st",
  },
  {
    title: "12 Month",
    subtitle: "Long Conversion Period",
    icon: <RiRefreshLine size={30} />,
    style: "cards__card card-2nd",
  },
];

const cardsData2 = [
  {
    title: "15%",
    subtitle: "Investment Commission",
    icon: <FaPercent size={20} />,
    style: "cards__card card-3rd",
  },
  {
    title: "5%",
    subtitle: "Selling Fee",
    icon: <FiShoppingCart size={25} />,
    style: "cards__card card-4th",
  },
];

const Cards = () => {
  return (
    <div className="cards-container">
      <div className="cards">
        {cardsData1.map((item, index) => (
          <div key={index} className={item.style}>
            <span>
              <BiInfoCircle size={20} color={"#BABABA"} />
            </span>
            <div className="cards__card__icon">{item.icon}</div>
            <div className="cards__card__content">{item.title}</div>
            <p>{item.subtitle}</p>
          </div>
        ))}
      </div>
      <div className="cards">
        {cardsData2.map((item, index) => (
          <div key={index} className={item.style}>
            <span>
              <BiInfoCircle size={20} color={"#BABABA"} />
            </span>
            <div className="cards__card__icon">{item.icon}</div>
            <div className="cards__card__content">{item.title}</div>
            <p>{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
