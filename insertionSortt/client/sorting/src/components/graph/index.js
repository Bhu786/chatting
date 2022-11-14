import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = (props) => {
    const {arr1,b} = props
    console.log(arr1)
  const labels = arr1;
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Pass" + b ,
        backgroundColor: "rgb(0 123 255)",
        borderColor: "rgb(0 123 255)",
        data: arr1,
      },
    ],
    
  };
  return (
    <>
    <div className="col-lg-6 p-4 ">
      <div className="mt-5 shadow jojo p-2 ">
      <Bar  data={data} />
      </div>
      
    </div>

    
    </>
  );
};

export default BarChart;