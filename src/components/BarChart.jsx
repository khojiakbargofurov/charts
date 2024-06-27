import { useEffect, useState } from "react"
import ReactApexChart from "react-apexcharts"

function BarChart() {
  useEffect(()=> {
    fetch("https://restcountries.com/v3.1/all")
      .then((data) => data.json())
      .then((countries) => {})
  })
  const [data, setData] = useState({       
    series: [{
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderRadiusApplication: 'end',
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
          'United States', 'China', 'Germany'
        ],
      }
    },
  
  
  })

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={data.options} series={data.series} type="bar" height={350} />
        </div>
      <div id="html-dist"></div>
    </div>
  )
}

export default BarChart
