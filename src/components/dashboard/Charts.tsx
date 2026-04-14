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
  Filler,
} from "chart.js";
import type { Chart as ChartType, TooltipModel } from "chart.js";
import { Bar, Doughnut, Line } from "react-chartjs-2";

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
  Filler,
);

// --- Storage Doughnut Chart ---
export function StorageChart() {
  const data = {
    labels: ["Files", "Apps", "Folders", "Audios", "Videos", "Miscellaneous"],
    datasets: [
      {
        data: [35, 15, 20, 10, 15, 5],
        backgroundColor: [
          "#A855F7",
          "#3B82F6",
          "#F59E0B",
          "#EF4444",
          "#10B981",
          "#2563EB",
        ],
        borderWidth: 0,
        cutout: "75%",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
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
  const labels = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Public",
        data: [45, 60, 50, 40, 70, 80, 65, 50, 45, 50, 75, 50],
        backgroundColor: "#4F46E5",
        borderRadius: 4,
        barPercentage: 0.6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: { stepSize: 10, color: "#9CA3AF", font: { size: 10 } },
        grid: {
          color: "#F3F4F6",
          drawBorder: false,
          borderDash: [2, 4],
          lineWidth: 1,
        },
        border: { display: false },
      },
      x: {
        grid: { display: false },
        ticks: { color: "#9CA3AF", font: { size: 10 } },
        border: { display: false },
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div className="h-64 w-full">
      <Bar data={data} options={options} />
    </div>
  );
}

// --- File Sharing Line Chart ---
export function FileSharingLineChart() {
  const labels = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Public",
        data: [45, 60, 50, 40, 70, 80, 65, 50, 45, 50, 75, 50],
        borderColor: "#4F46E5",
        backgroundColor: "rgba(79, 70, 229, 0.08)",
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 5,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: { stepSize: 10, color: "#9CA3AF", font: { size: 10 } },
        grid: {
          color: "#F3F4F6",
          drawBorder: false,
          borderDash: [2, 4],
          lineWidth: 1,
        },
        border: { display: false },
      },
      x: {
        grid: { display: false },
        ticks: { color: "#9CA3AF", font: { size: 10 } },
        border: { display: false },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        mode: "index" as const,
        intersect: false,
      },
    },
    interaction: {
      mode: "nearest" as const,
      axis: "x" as const,
      intersect: false,
    },
  };

  return (
    <div className="h-64 w-full">
      <Line data={data} options={options} />
    </div>
  );
}

// --- Email Doughnut Chart ---
export function EmailChart() {
  const data = {
    labels: ["Sent", "Received", "Unsent"],
    datasets: [
      {
        data: [45, 45, 10],
        backgroundColor: ["#F59E0B", "#3B82F6", "#E5E7EB"],
        borderWidth: 0,
        cutout: "75%",
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
  const labels = [
    "JAN",
    "FEB",
    "MARCH",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const totals = [
    1000, 1200, 1100, 1500, 1800, 1600, 2500, 4000, 5000, 4500, 5500, 4800,
  ];

  function splitTotal(total: number) {
    const sent = Math.round(total * 0.39);
    const received = Math.round(total * 0.58);
    const unsent = Math.max(0, total - sent - received);
    return { sent, received, unsent, total };
  }

  function formatNumber(value: number) {
    return value.toLocaleString();
  }

  function getOrCreateTooltip(chart: ChartType<"line">) {
    const parent = chart.canvas.parentNode as HTMLElement;
    let tooltipEl = parent.querySelector<HTMLDivElement>(
      'div[data-chartjs-external-tooltip="total-email"]',
    );

    if (!tooltipEl) {
      tooltipEl = document.createElement("div");
      tooltipEl.dataset.chartjsExternalTooltip = "total-email";
      tooltipEl.className =
        "pointer-events-none absolute z-50 w-40 rounded-lg border border-indigo-100 bg-indigo-50 p-3 text-xs shadow-sm";
      tooltipEl.style.opacity = "0";
      tooltipEl.style.transition = "opacity 150ms ease";
      tooltipEl.style.transform = "translate(-50%, -110%)";
      parent.appendChild(tooltipEl);
    }

    return tooltipEl;
  }

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Total",
        data: totals,
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
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
          color: "#9CA3AF",
          font: { size: 10 },
          callback: (value: string | number) =>
            value === 0 ? "0" : value.toLocaleString(),
        },
        grid: { color: "#F3F4F6", drawBorder: false },
        border: { display: false },
      },
      x: {
        grid: { display: false },
        ticks: { color: "#9CA3AF", font: { size: 10 } },
        border: { display: false },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: false,
        mode: "index" as const,
        intersect: false,
        external: (context: {
          chart: ChartType<"line">;
          tooltip: TooltipModel<"line">;
        }) => {
          const { chart, tooltip } = context;
          const tooltipEl = getOrCreateTooltip(chart);

          if (!tooltip || tooltip.opacity === 0) {
            tooltipEl.style.opacity = "0";
            return;
          }

          const dataIndex = tooltip.dataPoints?.[0]?.dataIndex;
          if (typeof dataIndex !== "number") {
            tooltipEl.style.opacity = "0";
            return;
          }

          const month = String(chart.data.labels?.[dataIndex] ?? "");
          const total = Number(
            (
              chart.data.datasets?.[0]?.data as Array<number | null | undefined>
            )?.[dataIndex] ?? 0,
          );
          const breakdown = splitTotal(total);

          tooltipEl.innerHTML = `
            <div class="mb-2 text-[11px] font-semibold text-gray-700">${month}</div>
            <div class="flex justify-between mb-1"><span class="text-gray-500">Sent</span> <span class="font-medium text-gray-900">${formatNumber(breakdown.sent)}</span></div>
            <div class="flex justify-between mb-1"><span class="text-gray-500">Received</span> <span class="font-medium text-gray-900">${formatNumber(breakdown.received)}</span></div>
            <div class="flex justify-between mb-2"><span class="text-gray-500">Unsent</span> <span class="font-medium text-gray-900">${formatNumber(breakdown.unsent)}</span></div>
            <div class="flex justify-between bg-indigo-500 text-white rounded px-2 py-1 -mx-1"><span class="font-medium">Total</span> <span class="font-bold">${formatNumber(breakdown.total)}</span></div>
          `;

          tooltipEl.style.left =
            chart.canvas.offsetLeft + tooltip.caretX + "px";
          tooltipEl.style.top = chart.canvas.offsetTop + tooltip.caretY + "px";
          tooltipEl.style.opacity = "1";
        },
      },
    },
    interaction: {
      mode: "nearest" as const,
      axis: "x" as const,
      intersect: false,
    },
  };

  return (
    <div className="relative h-64 w-full">
      <Line data={data} options={options} />
    </div>
  );
}

// --- Total Email Bar Chart (toggle variant) ---
export function TotalEmailBarChart() {
  const labels = [
    "JAN",
    "FEB",
    "MARCH",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const totals = [
    1000, 1200, 1100, 1500, 1800, 1600, 2500, 4000, 5000, 4500, 5500, 4800,
  ];

  function splitTotal(total: number) {
    const sent = Math.round(total * 0.39);
    const received = Math.round(total * 0.58);
    const unsent = Math.max(0, total - sent - received);
    return { sent, received, unsent, total };
  }

  function formatNumber(value: number) {
    return value.toLocaleString();
  }

  function getOrCreateTooltip(chart: ChartType<"bar">) {
    const parent = chart.canvas.parentNode as HTMLElement;
    let tooltipEl = parent.querySelector<HTMLDivElement>(
      'div[data-chartjs-external-tooltip="total-email"]',
    );

    if (!tooltipEl) {
      tooltipEl = document.createElement("div");
      tooltipEl.dataset.chartjsExternalTooltip = "total-email";
      tooltipEl.className =
        "pointer-events-none absolute z-50 w-40 rounded-lg border border-indigo-100 bg-indigo-50 p-3 text-xs shadow-sm";
      tooltipEl.style.opacity = "0";
      tooltipEl.style.transition = "opacity 150ms ease";
      tooltipEl.style.transform = "translate(-50%, -110%)";
      parent.appendChild(tooltipEl);
    }

    return tooltipEl;
  }

  const data = {
    labels,
    datasets: [
      {
        label: "Total",
        data: totals,
        backgroundColor: "rgba(59, 130, 246, 0.55)",
        borderColor: "#3B82F6",
        borderWidth: 1,
        borderRadius: 6,
        barPercentage: 0.7,
        categoryPercentage: 0.8,
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
          color: "#9CA3AF",
          font: { size: 10 },
          callback: (value: string | number) =>
            value === 0 ? "0" : value.toLocaleString(),
        },
        grid: { color: "#F3F4F6", drawBorder: false },
        border: { display: false },
      },
      x: {
        grid: { display: false },
        ticks: { color: "#9CA3AF", font: { size: 10 } },
        border: { display: false },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: false,
        mode: "index" as const,
        intersect: false,
        external: (context: {
          chart: ChartType<"bar">;
          tooltip: TooltipModel<"bar">;
        }) => {
          const { chart, tooltip } = context;
          const tooltipEl = getOrCreateTooltip(chart);

          if (!tooltip || tooltip.opacity === 0) {
            tooltipEl.style.opacity = "0";
            return;
          }

          const dataIndex = tooltip.dataPoints?.[0]?.dataIndex;
          if (typeof dataIndex !== "number") {
            tooltipEl.style.opacity = "0";
            return;
          }

          const month = String(chart.data.labels?.[dataIndex] ?? "");
          const total = Number(
            (
              chart.data.datasets?.[0]?.data as Array<number | null | undefined>
            )?.[dataIndex] ?? 0,
          );
          const breakdown = splitTotal(total);

          tooltipEl.innerHTML = `
            <div class="mb-2 text-[11px] font-semibold text-gray-700">${month}</div>
            <div class="flex justify-between mb-1"><span class="text-gray-500">Sent</span> <span class="font-medium text-gray-900">${formatNumber(breakdown.sent)}</span></div>
            <div class="flex justify-between mb-1"><span class="text-gray-500">Received</span> <span class="font-medium text-gray-900">${formatNumber(breakdown.received)}</span></div>
            <div class="flex justify-between mb-2"><span class="text-gray-500">Unsent</span> <span class="font-medium text-gray-900">${formatNumber(breakdown.unsent)}</span></div>
            <div class="flex justify-between bg-indigo-500 text-white rounded px-2 py-1 -mx-1"><span class="font-medium">Total</span> <span class="font-bold">${formatNumber(breakdown.total)}</span></div>
          `;

          tooltipEl.style.left =
            chart.canvas.offsetLeft + tooltip.caretX + "px";
          tooltipEl.style.top = chart.canvas.offsetTop + tooltip.caretY + "px";
          tooltipEl.style.opacity = "1";
        },
      },
    },
    interaction: {
      mode: "nearest" as const,
      axis: "x" as const,
      intersect: false,
    },
  };

  return (
    <div className="relative h-64 w-full">
      <Bar data={data} options={options} />
    </div>
  );
}
