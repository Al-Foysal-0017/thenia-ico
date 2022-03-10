import React, { useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { RiCloseLine } from "react-icons/ri";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import { ImInfo } from "react-icons/im";
import { hoverOnlyTxtBoxShadow } from "../../../utils/Animations";
import {
  ModalProps,
  coinData,
  chainItems,
  recommendedCoins,
  backdrop,
  modal,
} from "../ModalValue";

const coins = coinData.map((item, index) => (
  <div key={index} className="selectItem">
    <img src={item.image} alt="" />
    <p>{item.name}</p>
  </div>
));

const Modal = ({ showModal, setShowModal }: ModalProps) => {
  const modalRef = useRef<any>();
  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };
  const [selectItem, setSelectItem] = React.useState(coins[5]);
  const [showchainItems, setShowChainItemsData] = React.useState(false);
  const [dropdown, setDropdown] = React.useState(false);
  const [currentChainItem, setCurrentChainItem] = React.useState(
    chainItems[0].name
  );

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          ref={modalRef}
          onClick={closeModal}
        >
          <motion.div variants={modal} className="modal">
            <div
              onClick={() => {
                setShowModal(!showModal);
              }}
              className="modal__cross-icon"
            >
              <RiCloseLine
                style={{
                  fontSize: "22px",
                  marginBottom: "6px",
                  cursor: "pointer",
                }}
              />
            </div>

            {/* 1st Input Feild Start*/}
            <div className="modal__titleCont">
              <div className="modal__titleCont__title">You want to buy</div>
            </div>
            <div className="modal__inputCont">
              <input className="modal__inputCont__input" />
              <div className="modal__inputCont__input__right">
                <div className="modal__inputCont__input__right__text">TEAp</div>
              </div>
            </div>
            {/* 2nd Input Feild Start*/}
            <div className="modal__titleCont" style={{ marginTop: "2rem" }}>
              <div className="modal__titleCont__title">Choose Chain</div>
            </div>
            <div
              onClick={() => {
                setShowChainItemsData(!showchainItems);
              }}
              className="modal__inputCont"
              style={{ cursor: "pointer" }}
            >
              <div
                className="modal__inputCont__input"
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  opacity: "0.8",
                }}
              >
                {currentChainItem}
              </div>

              <div className="modal__inputCont__input__right">
                <div
                  onClick={() => {
                    setShowChainItemsData(!showchainItems);
                  }}
                  className="modal__inputCont__input__right__text"
                  style={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  {!showchainItems ? (
                    <HiOutlineChevronDown size={26} />
                  ) : (
                    <HiOutlineChevronUp size={26} />
                  )}
                </div>
              </div>
            </div>
            <div
              className={` modal__chainItemCont transition-all duration-100 ${
                showchainItems ? "open-chainItems" : "close-chainItems"
              } `}
            >
              {chainItems.map((item, index) => (
                <div
                  onClick={() => {
                    setCurrentChainItem(item.name);
                    setShowChainItemsData(!showchainItems);
                  }}
                  key={index}
                  className="modal__chainItemCont__chainItem"
                >
                  {item.name}
                </div>
              ))}
            </div>

            {/* 3rd Input Feild Start*/}
            <div className="modal__titleCont" style={{ marginTop: "2rem" }}>
              <div className="modal__titleCont__title">It will cost</div>
              <div className="modal__titleCont__subtitle">
                Avalable: 1,000,000 USDT{" "}
              </div>
            </div>
            <div className="modal__inputCont">
              <input className="modal__inputCont__input" />

              <div className="modal__inputCont__input__right">
                <p className="modal__inputCont__input__right__paragraph">Max</p>
                <div
                  className="modal__inputCont__input__right__selectCont"
                  onClick={() => {
                    setDropdown(!dropdown);
                  }}
                >
                  {selectItem}
                  <p>
                    {!dropdown ? (
                      <FiChevronDown className="modal__inputCont__input__right__iconDown" />
                    ) : (
                      <FiChevronUp className="modal__inputCont__input__right__iconDown" />
                    )}
                  </p>
                </div>
              </div>
              <>
                <div
                  className={`modal__inputCont__input__right__selectItemsList transition-all duration-100 ${
                    dropdown ? "open-coinCoise" : "close-coinCoise"
                  }`}
                >
                  <div className="modal__inputCont__input__right__selectItemsList__top">
                    <div className="modal__inputCont__input__right__selectItemsList__top__title">
                      Recommended (Low fees)
                    </div>
                    <div className="modal__inputCont__input__right__selectItemsList__top__recommended">
                      {recommendedCoins.map((item, index) => (
                        <span
                          onClick={() => {
                            setSelectItem(coins[item.id]);
                            setDropdown(!dropdown);
                          }}
                          style={
                            selectItem === coins[item.id]
                              ? { background: "#404040" }
                              : { background: "#000" }
                          }
                          className="modal__inputCont__input__right__selectItemsList__top__recommended__item"
                          key={index}
                        >
                          <img
                            className="modal__inputCont__input__right__selectItemsList__top__recommended__img"
                            src={item.image}
                            alt=""
                          />
                          <span className="modal__inputCont__input__right__selectItemsList__top__recommended__name">
                            {item.name}
                          </span>
                        </span>
                      ))}
                    </div>
                  </div>
                  <div
                    className="custom-scrollbar"
                    style={{ marginTop: "6px" }}
                  >
                    {coinData.map((item, index) => (
                      <div
                        key={index}
                        className="modal__inputCont__input__right__selectItemsList__selectItem"
                        onClick={() => {
                          setSelectItem(coins[item.id]);
                          setDropdown(!dropdown);
                        }}
                      >
                        <img src={item.image} alt="" />
                        <p>{item.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            </div>
            <div className="modal__inputBtmTxt">
              Your impact on token price: +2.3%
            </div>

            {/* Calculation All Inputs Value */}
            <div className="modal__calculateCont">
              <div className="modal__calculateCont__items">
                <div className="modal__calculateCont__items__left">
                  Avg. TEAp Price
                </div>
                <div className="modal__calculateCont__items__right">$5,47</div>
              </div>
              <div className="modal__border" />
              <div className="modal__calculateCont__items">
                <div className="modal__calculateCont__items__left">
                  <div className="info-wrapper">
                    <div className="info-icon info">
                      Total Fees
                      <div className="tooltip">
                        <span>Network Fee: $0,5</span>
                        <span>Protocol Fee: $0,5</span>
                        <span>Project Fee: $0,4</span>
                      </div>
                      <span style={{ marginLeft: "8px" }}>
                        <ImInfo className="" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="modal__calculateCont__items__right">$1,4</div>
              </div>
              <div className="modal__border" />
              <div className="modal__calculateCont__items">
                <div
                  className="modal__calculateCont__items__left"
                  style={{ opacity: 1 }}
                >
                  Total
                </div>
                <div className="modal__calculateCont__items__right">
                  $700,001,4
                </div>
              </div>
            </div>

            {/* Button Feild Start*/}
            <motion.button
              whileHover={hoverOnlyTxtBoxShadow}
              className="modal__button"
              style={{ marginTop: "20px" }}
            >
              Confirm
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
