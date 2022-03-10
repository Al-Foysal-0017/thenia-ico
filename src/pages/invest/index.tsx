import React from "react";
import DataAndChart from "../../layout/invest/dataAndchart";
import InvestTopbar from "../../layout/invest/investTopbar";
import Container from "../../components/container/Container";
import Cards from "../../layout/invest/cards";
import "./_invest.scss";
import ProjectDetails from "../../layout/invest/projectDetails";
import useWindowDimensions from "../../hooks/useWindowDimensions";
// import img from "../../assets/image/investBg.png";

const Invest = () => {
  const { width } = useWindowDimensions();
  return (
    <>
      <Container>
        <div className="invest">
          {width > 740 ? (
            <section className="invest__bg" />
          ) : (
            <section className="invest__bg-small" />
          )}
          <InvestTopbar />
          <DataAndChart />
          <Cards />
          <ProjectDetails />
        </div>
      </Container>
    </>
  );
};

export default Invest;
