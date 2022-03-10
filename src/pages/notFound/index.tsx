import { ImArrowLeft2 } from "react-icons/im";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "../../components/container/Container";
import { Title, Subtitle } from "../../components";
import "./_notFound.scss";
import { hoverTxtBoxShadow } from "../../utils/Animations";

const NotFound = () => {
  return (
    <Container>
      <div className="not-found">
        <div
          className="not-found__container"
          data-aos="fade-zoom-in"
          data-aos-duration="600"
        >
          <Title>404</Title>
          <Subtitle>PAGE NOT FOUND</Subtitle>
          <div className="not-found__container__btnContainer">
            <Link to="/">
              <motion.button
                className="not-found__container__btnContainer__btn"
                type="button"
                whileHover={hoverTxtBoxShadow}
              >
                <ImArrowLeft2
                  style={{ fontSize: "24px", marginRight: "12px" }}
                />
                Back To Home
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NotFound;
