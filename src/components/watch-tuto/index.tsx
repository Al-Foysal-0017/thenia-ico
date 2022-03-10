import React, { useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiCloseLine } from "react-icons/ri";
import ReactPlayer from "react-player";
import { ModalProps, backdrop, modal } from "./ModalValue";
import "./_model-watchTuto.scss";

const WatchTutorial = ({ showModal, setShowModal }: ModalProps) => {
  const modalRef = useRef<any>();
  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

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
          className="backdrop-watchTuto"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          ref={modalRef}
          onClick={closeModal}
        >
          <motion.div variants={modal} className="modal-watchTuto">
            <div
              onClick={() => {
                setShowModal(!showModal);
              }}
              className="modal-watchTuto__cross-icon"
            >
              <RiCloseLine
                style={{
                  fontSize: "22px",
                  cursor: "pointer",
                }}
              />
            </div>
            <ReactPlayer
              playing={true}
              controls={true}
              playsinline={true}
              width="100%"
              height="100%"
              url="https://vimeo.com/669377715"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WatchTutorial;
