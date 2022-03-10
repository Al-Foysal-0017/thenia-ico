import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Container, Title } from "../../components";
import galaxy from "../../assets/video/galaxy.mp4";
import "./_mint.scss";
import { hoverTxtBoxShadow } from "../../utils/Animations";

const Mint = () => {
  return (
    <Container>
      <div>
        <div className="mint">
          <div className="mint__hero">
            <video
              className="mint__hero__video"
              autoPlay
              loop
              muted
              src={galaxy}
            />
          </div>

          <div className="mint__hero__content">
            <div data-aos="fade-zoom-in" data-aos-duration="600">
              <Title>THeia 5000 NFTs</Title>
            </div>

            <div className="mint__hero__content__paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>

            <div className="mint__hero__content__btnContainer">
              <Link to="/mint" style={{ width: "100%" }}>
                <motion.button
                  className="mint__hero__content__btn"
                  whileHover={hoverTxtBoxShadow}
                >
                  Mint
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Mint;
