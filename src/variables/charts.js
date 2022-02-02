/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// import  { useState, useEffect } from "react";

// function dashboardBarChart() {
//   const options = {
//     indexAxis: 'x',
//     elements: {
//       bar: {
//         borderWidth: 2
//       },
//     },
//     responsive: true, //responsive means visible to any screen
//     plugins: {
//       legend: {
//         position: 'left',
//       },
//       title: {
//         display: true,
//         text: 'PRODUCTS SUMMERY'
//       },
//     },

//   }

//   const getDataFormLS = () => {
//     const data = localStorage.getItem('products')
//     if (data) {
//       return JSON.parse(data);
//     }
//     else {
//       return []
//     }
//   }


//   const [products, setProducts] = useState(getDataFormLS());

//   const [data, setData] = useState({
//     labels: [],
//     datasets: [
//       {
//         label: 'dataset',
//         data: [2, 4, 8, 10, 12, 16],
//         borderColor: 'rgb(255,99,132)',
//         backgroundcolor: 'rgba(53, 162, 132,0.5)',
//       }
//     ]
//   }
//   )

// getting product list from local storage
//  useEffect(() => {
//   localStorage.getItem('products', JSON.stringify(products));
//   console.log("product from local storage", products)

//creating array for getting productNo
// const dataSet = [];
// const labelSet = [];



//     for (const val of products) {
//       dataSet.push(val.quantity)
//       labelSet.push(val.productName)
//     }

//     console.log("arraydata for product quantity", dataSet)
//     console.log("arraydata for product name", labelSet)

//     setData({
//       labels: labelSet,
//       datasets: [
//         {
//           label: 'dataset',
//           data: dataSet,
//           borderColor: 'rgb(255,99,132)',
//           backgroundcolor: 'rgba(53, 162, 132,0.5)',
//         }
//       ]
//     })

//   }, [products])  
// }

// const dashboard24HoursPerformanceChart = {
//   data: (canvas) => {
//     return {
//       datasets: [
//         {
//           borderColor: "#6bd098",
//           backgroundColor: "#6bd098",
//           pointRadius: 0,
//           pointHoverRadius: 0,
//           borderWidth: 3,
//           tension: 0.4,
//           fill: true,
//           data: [],
//         },
//         {
//           borderColor: "#f17e5d",
//           backgroundColor: "#f17e5d",
//           pointRadius: 0,
//           pointHoverRadius: 0,
//           borderWidth: 3,
//           tension: 0.4,
//           fill: true,
//           data: [],
//         },
//         {
//           borderColor: "#fcc468",
//           backgroundColor: "#fcc468",
//           pointRadius: 0,
//           pointHoverRadius: 0,
//           borderWidth: 3,
//           tension: 0.4,
//           fill: true,
//           data: [],
//         },
//       ],
//     };
//   },

//   options: {
//     plugins: {
//       legend: { display: false },
//       tooltip: { enabled: false },
//     },
//     scales: {
//       y: {
//         ticks: {
//           color: "#9f9f9f",
//           beginAtZero: false,
//           maxTicksLimit: 5,
//         },
//         grid: {
//           drawBorder: false,
//           display: false,
//         },
//       },
//       x: {
//         barPercentage: 1.6,
//         grid: {
//           drawBorder: false,
//           display: false,
//         },
//         ticks: {
//           padding: 20,
//           color: "#9f9f9f",
//         },
//       },
//     },
//   },
// };

const dashboardEmailStatisticsChart = {
  data: (canvas) => {

    return {
      labels: [1, 2, 3],
      datasets: [
        {
          label: "Emails",
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: ["#e3e3e3", "#4acccd", "#fcc468", "#ef8157"],
          borderWidth: 0,
          data: [342, 480, 530, 120],
        },
      ],
    };
  },
  options: {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    maintainAspectRatio: false,
    pieceLabel: {
      render: "percentage",
      fontColor: ["white"],
      precision: 2,
    },
    scales: {
      y: {
        ticks: {
          display: false,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      x: {
        barPercentage: 1.6,
        grid: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  },

};

// const dashboardNASDAQChart = {
//   data: (canvas) => {
//     return {
//       // labels: [
//       //   "Jan",
//       //   "Feb",
//       //   "Mar",
//       //   "Apr",
//       //   "May",
//       //   "Jun",
//       //   "Jul",
//       //   "Aug",
//       //   "Sep",
//       //   "Oct",
//       //   "Nov",
//       //   "Dec",
//       // ],
//      
//       datasets: [
//         {
//           data: [0, 19, 15, 20, 30, 40, 40, 50, 25, 30, 50, 70],
//           fill: false,
//           borderColor: "#fbc658",
//           backgroundColor: "transparent",
//           pointBorderColor: "#fbc658",
//           pointRadius: 4,
//           pointHoverRadius: 4,
//           pointBorderWidth: 8,
//           tension: 0.4,
//         },
//         {
//           data: [0, 5, 10, 12, 20, 27, 30, 34, 42, 45, 55, 63],
//           fill: false,
//           borderColor: "#51CACF",
//           backgroundColor: "transparent",
//           pointBorderColor: "#51CACF",
//           pointRadius: 4,
//           pointHoverRadius: 4,
//           pointBorderWidth: 8,
//           tension: 0.4,
//         },
//       ],
//     };
//   },
//   options: {
//     plugins: {
//       legend: { display: false },
//     },
//   },
// };
//export default dashboardBarChart;

module.exports = {
  //dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  //dashboardNASDAQChart,
};


