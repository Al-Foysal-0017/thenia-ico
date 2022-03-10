import React from "react";
import "./_navbar.scss";
import { RiMenu3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Container from "../../container/Container";
import logo from "../../../assets/svg/logo.svg";
import Modal from "../../modal/previewInvest/Modal";
import Modal2 from "../../modal/investConfirm/Modal";
import Modal3 from "../../modal/previewSell/Modal";
import Modal4 from "../../modal/sellConfirm/Modal";
import Modal5 from "../../modal/agreement/Modal";
import {
  hoverTxtBoxShadow,
  hoverTxtShadow,
  hoverZoom,
} from "../../../utils/Animations";

export const navRoutes = [
  { name: "Mint", route: "/mint" },
  { name: "404", route: "/404" },
];

interface NavProps {
  showDropdown: boolean;
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ showDropdown, setShowDropdown }: NavProps) => {
  const [showModal, setShowModal] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);
  const [showModal3, setShowModal3] = React.useState(false);
  const [showModal4, setShowModal4] = React.useState(false);
  const [showModal5, setShowModal5] = React.useState(false);
  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <Modal2 showModal={showModal2} setShowModal={setShowModal2} />
      <Modal3 showModal={showModal3} setShowModal={setShowModal3} />
      <Modal4 showModal={showModal4} setShowModal={setShowModal4} />
      <Modal5 showModal={showModal5} setShowModal={setShowModal5} />
      <nav style={{ width: "100%" }}>
        <Container>
          <div className="navbar">
            <ul className="navbar__container">
              <div className="navbar__container__left">
                <div className="navbar__container__left__logo">
                  <Link to="/">
                    <motion.img whileHover={hoverZoom} src={logo} alt="logo" />
                  </Link>
                </div>
              </div>

              <div className="navbar__container__right">
                {navRoutes.map((item) => (
                  <li
                    key={item.name}
                    className="navbar__container__right__link"
                  >
                    <motion.p whileHover={hoverTxtShadow}>
                      <Link to={item.route}>{item.name}</Link>
                    </motion.p>
                  </li>
                ))}
                <motion.p
                  onClick={() => {
                    setShowModal(!showModal);
                  }}
                  whileHover={hoverTxtBoxShadow}
                  className="margin-l-1 nav-big-button"
                >
                  M1
                </motion.p>
                <motion.p
                  onClick={() => {
                    setShowModal2(!showModal2);
                  }}
                  whileHover={hoverTxtBoxShadow}
                  className="margin-l-1 nav-big-button"
                >
                  M2
                </motion.p>
                <motion.p
                  onClick={() => {
                    setShowModal3(!showModal3);
                  }}
                  whileHover={hoverTxtBoxShadow}
                  className="margin-l-1 nav-big-button"
                >
                  M3
                </motion.p>
                <motion.p
                  onClick={() => {
                    setShowModal4(!showModal4);
                  }}
                  whileHover={hoverTxtBoxShadow}
                  className="margin-l-1 nav-big-button"
                >
                  M4
                </motion.p>
                <motion.p
                  onClick={() => {
                    setShowModal5(!showModal5);
                  }}
                  whileHover={hoverTxtBoxShadow}
                  className="margin-l-1 nav-big-button"
                >
                  M5
                </motion.p>
              </div>
              <div
                onClick={() => {
                  setShowDropdown(!showDropdown);
                }}
                className="NavbarMenuBtn"
              >
                <RiMenu3Line size={32} />
              </div>
            </ul>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
