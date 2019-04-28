import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import 'typeface-roboto';
import { Chart } from "react-charts";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];
class Layout extends React.Component {

    render() {

        const {children} = this.props;
        return (
            <Fragment>

              <div id="statistics_container">
              <div id="title_chart_page">
                  <h1>Estadisticas</h1>
                  <p>Alguna descripcion cool por aca pa explicar esta joda</p>
              </div>
                <div id="chart_container">
                <div style={{
                  width: "100%",
                  height: "400px"
                }}>
                  <Chart
                    data={[
                      {
                        label: "Series 1",
                        data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
                      },
                      {
                        label: "Series 2",
                        data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
                      }
                    ]}
                    axes={[
                      { primary: true, type: "linear", position: "bottom" },
                      { type: "linear", position: "left" }
                    ]}
                  />
                  </div>
                </div>
                <div id = "statistic_description">
                  <h3>Resultados</h3>
                  <p>Algun texto por aca</p>
                  <br/>
                  <h3>Resultados2</h3>
                  <p>Algun texto por aca tambien</p>
                  <br/>
                  <h3>Resultados3</h3>
                  <p>Algun texto por aca tambien</p>
                </div>

                </div>
            </Fragment>
        );
    }
}

export default Layout;
