import React from "react";
import "./_data-and-chart.scss";
import ProgressBar from "@ramonak/react-progress-bar";
import Chart from "../charts/Charts";
import { FaChartLine } from "react-icons/fa";
import { AiFillCaretUp } from "react-icons/ai";

const leftContainerData = [
  {
    title: "Price Change",
    time: "24h",
    value: "$+3.27",
    increase: "2.6%",
  },
  {
    title: "Invested Volume",
    time: "24h",
    value: "$13,234",
    increase: null,
  },
  {
    title: "Current Token Supply",
    time: null,
    value: "234625",
    increase: null,
  },
  {
    title: "Number of Investors",
    time: null,
    value: "126",
    increase: null,
  },
  {
    title: "THEIA Total Valuation",
    time: null,
    value: "$1,234",
    increase: null,
  },
  {
    title: "Locked",
    time: null,
    value: "$1234",
    increase: null,
  },
  {
    title: "Market Cap",
    time: null,
    value: "$6,234,625",
    increase: null,
  },
  {
    title: "TEA Allocation",
    time: null,
    value: "5%",
    increase: null,
  },
];

const DataAndChart = () => {
  return (
    <div className="data-chart">
      <div className="data-chart__left">
        <div className="data-chart__left__row">
          <span className="data-chart__left__row__title">
            Token Price (TEAp)
          </span>
          <span className="data-chart__left__row__value">$5.47</span>
        </div>
        <div className="data-chart__left__row__row2">
          <FaChartLine
            size={25}
            color="#7D7E7E"
            style={{ marginRight: "10px" }}
          />
          <div>
            You affect the price by investing and selling the project token
          </div>
        </div>
        <hr />
        <div style={{ marginTop: "10px" }} />
        {leftContainerData.map((item, index) => (
          <div key={index} className="data-chart__left__row__items">
            <span className="data-chart__left__row__items__title">
              {item.title}
              {item.time && <span>{item.time}</span>}
            </span>
            <span className="data-chart__left__row__items__value">
              {item.value}
              {item.increase && (
                <div>
                  <AiFillCaretUp style={{ margin: "0 3px" }} />
                  {item.increase}
                </div>
              )}
            </span>
          </div>
        ))}
      </div>
      <div className="data-chart__right">
        <Chart />
        <div className="data-chart__right__progressBar">
          <div className="data-chart__right__progressBar__title">
            Funding Threshold
          </div>
          <ProgressBar
            completed={50}
            isLabelVisible={false}
            bgColor="#989DFF"
            height="8px"
          />
          <div className="data-chart__right__progressBar__value">
            <span>$0</span>
            <span>$100000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataAndChart;
