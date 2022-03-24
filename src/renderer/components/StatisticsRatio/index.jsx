import { Col, Row } from 'antd';
import { Chart, registerables } from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

const StatisticsRatio = () => {
  Chart.register(...registerables);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Sales Amount and Order',
      },
    },
  };

  const data = {
    labels: ['Red', 'Orange', 'Yellow', 'Blue', 'Purple'],
    datasets: [
      {
        label: 'Sale Amount',
        backgroundColor: ['Red'],
        borderColor: 'red',
        data: [0, 12, 38, 20, 38],
      },
      {
        label: 'Order Amount',
        backgroundColor: ['green'],
        borderColor: 'green',
        data: [5, 20, 25, 32, 48],
      },
    ],
  };

  const option = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Online Vs Offline Order & Sales',
      },
    },
  };

  const data2 = {
    labels: ['Blue', 'Yellow', 'Pink', 'Purple', 'Red'],
    datasets: [
      {
        label: 'Online',
        backgroundColor: 'green',
        borderColor: 'green',
        data: [10, 45, 25, 55, 30],
      },
      {
        label: 'Offline',
        backgroundColor: 'red',
        borderColor: 'red',
        data: [5, 15, 18, 35, 20],
      },
    ],
  };

  return (
    <div className="statistics_area">
      <h1>Statistics</h1>
      <Row>
        <Col lg={12}>
          <div style={{ padding: '1rem' }}>
            <Line options={options} data={data} />
          </div>
        </Col>

        <Col lg={12}>
          <div style={{ padding: '1rem' }}>
            <Bar options={option} data={data2} />
          </div>
        </Col>

        {/* <Col lg={6}>
          <div style={{ padding: '1rem' }}>
            <Pie data={data} />
          </div>
        </Col> */}
      </Row>
    </div>
  );
};

export default StatisticsRatio;
