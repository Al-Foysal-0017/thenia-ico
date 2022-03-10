import React from "react";
import { motion } from "framer-motion";
import { BsMedium } from "react-icons/bs";
import { IoPlayOutline } from "react-icons/io5";
import { FaDiscord, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import logo from "../../../assets/svg/logoTriangle.svg";
import { hoverTxtBoxShadow, hoverTxtShadow } from "../../../utils/Animations";
import "./_invest_topbar.scss";
import WatchTutorial from "../../../components/watch-tuto";

const socialLinks = [
  {
    href: "https://discord.com/invite/sjBjnQkEYP",
    name: "Discord",
    logo: <FaDiscord size={20} className="logo-color" />,
  },
  {
    href: "https://twitter.com/Theia_Labs",
    name: "Twitter",
    logo: <FaTwitter size={20} className="logo-color" />,
  },
  {
    href: "https://medium.com/@theia.finance",
    name: "Medium",
    logo: <BsMedium size={20} className="logo-color" />,
  },
  {
    href: "https://t.me/THEIAfinance",
    name: "Telegram",
    logo: <FaTelegramPlane size={20} className="logo-color" />,
  },
];

const InvestTop = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <WatchTutorial showModal={showModal} setShowModal={setShowModal} />
      <div className="invest-top">
        <div
          data-aos="fade-zoom-in"
          data-aos-duration="600"
          className="invest-top__left"
        >
          <img src={logo} alt="logo" />
          <div className="invest-top__left__container">
            <span>THEIA</span>
            <div>
              {socialLinks.map((item, index) => (
                <motion.li whileHover={hoverTxtShadow} key={index}>
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.logo}
                  </a>
                </motion.li>
              ))}
            </div>
          </div>
        </div>
        <div className="invest-top__right">
          <div className="invest-top__right__container">
            <motion.button
              onClick={() => {
                setShowModal(!showModal);
              }}
              whileHover={hoverTxtBoxShadow}
            >
              <IoPlayOutline />
              Watch Tutorial
            </motion.button>
            <motion.span
              whileHover={hoverTxtBoxShadow}
              className="invest-top__right__cont_walt_btn"
            >
              Connect Wallet
            </motion.span>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestTop;
