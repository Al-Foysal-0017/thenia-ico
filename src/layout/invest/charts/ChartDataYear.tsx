const chartData = {
  height: 335,
  type: "area",
  options: {
    chart: {
      id: "area-chart",
      stacked: false,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    xaxis: {
      type: "category",
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    fill: {
      type: "solid",
      colors: ["#4D4F80"],
    },
    dataLabels: {
      enabled: false,
    },
    // markers: {
    //   colors: ["#F44336", "#E91E63", "#9C27B0"],
    // },
    grid: {
      show: true,
      borderColor: "#181919",
    },
  },
  fill: {
    colors: ["#4D4F80"],
  },
  series: [
    {
      name: "Investment",
      data: [5, 50, 35, 35, 35, 40, 35, 20, 35, 45, 15, 85],
    },
  ],
};

export default chartData;
