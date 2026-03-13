import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  Filler
} from 'chart.js';
import { Bar, Doughnut, Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  Filler
);

// --- Storage Doughnut Chart ---
export function StorageChart() {
  const data = {
    labels: ['Files', 'Apps', 'Folders', 'Audios', 'Videos', 'Miscellaneous'],
    datasets: [
      {
        data: [35, 15, 20, 10, 15, 5],
        backgroundColor: [
          '#A855F7', // Purple
          '#3B82F6', // Blue
          '#F59E0B', // Orange
          '#EF4444', // Red
          '#10B981', // Green
          '#2563EB', // Dark Blue
        ],
        borderWidth: 0,
        cutout: '75%',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false }
    },
  };

  return (
    <div className="relative h-40 w-40 mx-auto">
      <Doughnut data={data} options={options} />
      {/* Blue dashed tick circle */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg className="w-60 h-28 absolute" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="37"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="4"
            strokeDasharray="3 6"
            strokeLinecap="round"
          />
          
        </svg>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-gray-900">80%</span>
        <span className="text-xs text-gray-500">Used</span>
      </div>
    </div>
  );
}

// --- File Sharing Bar Chart ---
export function FileSharingChart() {
  const labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Public',
        data: [45, 60, 50, 40, 70, 80, 65, 50, 45, 50, 75, 50],
        backgroundColor: '#4F46E5', // Indigo
        borderRadius: 4,
        barPercentage: 0.6,
      },
      // In a real app, you'd stack these or group them. The design shows grouped bars but some are taller.
      // Simulating the visual with a single dataset for simplicity of matching the exact look.
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: { stepSize: 10, color: '#9CA3AF', font: { size: 10 } },
        grid: { color: '#F3F4F6', drawBorder: false },
        border: { display: false }
      },
      x: {
        grid: { display: false },
        ticks: { color: '#9CA3AF', font: { size: 10 } },
        border: { display: false }
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  return <div className="h-64 w-full"><Bar data={data} options={options} /></div>;
}

// --- Email Doughnut Chart ---
export function EmailChart() {
  const data = {
    labels: ['Sent', 'Received', 'Unsent'],
    datasets: [
      {
        data: [45, 45, 10],
        backgroundColor: ['#F59E0B', '#3B82F6', '#E5E7EB'],
        borderWidth: 0,
        cutout: '75%',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
  };

  return (
    <div className="relative h-48 w-48 mx-auto">
      <Doughnut data={data} options={options} />
      {/* Blue dashed tick circle */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg className="w-60 h-36 absolute" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="37"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="4"
            strokeDasharray="3 6"
            strokeLinecap="round"
          />
          
        </svg>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-sm font-medium text-gray-900">Emails</span>
        <span className="text-sm font-medium text-gray-900">Chart</span>
      </div>
    </div>
  );
}

// --- Total Email Area Chart ---
export function TotalEmailChart() {
  const labels = ['JAN', 'FEB', 'MARCH', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Total',
        data: [1000, 1200, 1100, 1500, 1800, 1600, 2500, 4000, 5000, 4500, 5500, 4800],
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 7000,
        ticks: { 
          stepSize: 2000, 
          color: '#9CA3AF', 
          font: { size: 10 },
          callback: (value: string | number) => value === 0 ? '0' : value.toLocaleString()
        },
        grid: { color: '#F3F4F6', drawBorder: false },
        border: { display: false }
      },
      x: {
        grid: { display: false },
        ticks: { color: '#9CA3AF', font: { size: 10 } },
        border: { display: false }
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      }
    },
    interaction: {
      mode: 'nearest' as const,
      axis: 'x' as const,
      intersect: false
    }
  };

  return <div className="h-64 w-full"><Line data={data} options={options} /></div>;
}
