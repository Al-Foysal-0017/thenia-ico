import React, { useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiCloseLine } from "react-icons/ri";
import { ImInfo } from "react-icons/im";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import { hoverOnlyTxtBoxShadow } from "../../../utils/Animations";
import { ModalProps, chainItems, backdrop, modal } from "../ModalValue";
import "../_model.scss";
import "../model.css";

const Modal = ({ showModal, setShowModal }: ModalProps) => {
  const modalRef = useRef<any>();
  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };
  const [showchainItems, setShowChainItemsData] = React.useState(false);
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
              <div className="modal__titleCont__title">I want to sell</div>
              <div className="modal__titleCont__subtitle">
                Avalable: 3,829,000 TEA
              </div>
            </div>
            <div className="modal__inputCont">
              <input className="modal__inputCont__input" />
              <div className="modal__inputCont__input__right">
                <p className="modal__inputCont__input__right__paragraph">Max</p>
                <div
                  style={{ marginLeft: "12px" }}
                  className="modal__inputCont__input__right__text"
                >
                  TEAp
                </div>
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

            {/* Calculation All Inputs Value */}
            <div className="modal__calculateCont">
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
            </div>

            <motion.button
              whileHover={hoverOnlyTxtBoxShadow}
              className="modal__button"
              style={{ marginTop: "1.8rem" }}
            >
              Claim
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
