import React, { Component } from 'react'
import ApexCharts from 'apexcharts'
import ReactApexChart from "react-apexcharts"


export  class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'Javascript',
          data: [31, 40, 28, 51, 42, 109, 100,100]
        }, {
          name: 'Html',
          data: [11, 32, 45, 32, 34, 52, 41,100]
        },
        {
          name: 'Css',
          data: [16, 40, 50, 50, 34, 50, 71,100]
        },
      {
        name: 'React',
        data: [17, 40, 50, 35, 34, 75, 45,100]
      },
    {
      name: 'GO',
      data: [18, 35, 28, 30, 34, 55, 56,100]
    }
      ],
        
        options: {
          chart: {
            height: 350,
            type: 'area',
            background: 'white'
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          
          xaxis: {
            type: 'datetime',
            categories: ["2013","2014","2015", "2016", "2017", "2018", "2019", "2020"]
          },
          tooltip: {
            x: {
              format: 'yyyy'
            },
            y: {
              format: 'hh'
            }
          },
        },
      
      
      };
    }

    render() {
      return (
  <div id="chart" style={style}>

   
       <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} />
         </div>
           )
             }
    }



    const style ={
        width:"500px"
    }
export default ApexChart
