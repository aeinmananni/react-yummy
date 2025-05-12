import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useReactContext } from '../../../../../../context/context';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function BarChart() {
  const { dropDownInfo, ALL_YEARS_DATA } = useReactContext();
  const yearData = ALL_YEARS_DATA.find((y) => y.year === dropDownInfo.year);

  const data = {
    labels: yearData?.months.map((m) => m.name),
    datasets: [
      {
        label: `Income for ${dropDownInfo.year}`,
        data: yearData?.months.map((month) => month.incomes.income),
        backgroundColor: '#facc15',
        borderRadius: 8
      }
    ]
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return <Bar key={dropDownInfo.year} data={data} options={options} />;
}
