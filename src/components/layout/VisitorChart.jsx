import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

function VisitorChart() {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgb(238, 178, 12)',
                borderWidth: 5,
                hoverBackgroundColor: 'rgba(75, 192, 192, 0.4)',
                hoverBorderColor: 'rgba(75, 192, 192, 1)',
                data: [65, 59, 80, 81, 56, 55, 40],
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            title: {
                display: true,
                text: 'My First Bar Chart',
            },
        },
    };


    return <Line data={data} options={options} />;
}

export default VisitorChart