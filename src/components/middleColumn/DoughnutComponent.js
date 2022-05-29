import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { options } from "./chartDiv";




function DoughnutComponent(props) {
  ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  datasets: [
    {
      label: "# of Votes",
      data: [props.val, 100-props.val],
      backgroundColor: [
        "rgb(102, 204, 153)",
        "rgba(102, 204, 153, 0.2)",

      ],
      borderColor: [
        "rgb(102, 204, 153)",
        "white",
      ],
      borderWidth:3,
      cutout: 35,

    }

  ]
};

const plugins = [{
  beforeDraw: function(chart) {
    var width = chart.width,
        height = chart.height,
        ctx = chart.ctx;
        ctx.restore();
        var fontSize = (height / 160).toFixed(2);
        ctx.font = "20px Helvetica";
        ctx.textBaseline = "top";
        var text = props.text,
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2.3;
        ctx.fillText(text, textX, textY);
        ctx.save();
   } 
}]
  return (
    <div className="doughnutDiv">
      <Doughnut data={data} plugins={plugins}/>
      <span>{props.span}</span>
    </div>
  )
}
export default DoughnutComponent

