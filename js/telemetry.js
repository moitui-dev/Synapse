document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("telemetryChart");
    if (!ctx) return;

    const telemetryChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: Array(10).fill(""),
            datasets: [
                {
                    label: "CPU (%)",
                    data: [30, 45, 35, 50, 40, 60, 55, 65, 50, 58],
                    borderColor: "#f43f5e",
                    backgroundColor: "rgba(244, 63, 94, 0.1)",
                    tension: 0.4,
                    fill: true
                },
                {
                    label: "RAM (%)",
                    data: [60, 62, 65, 63, 67, 70, 68, 72, 71, 75],
                    borderColor: "#38bdf8",
                    backgroundColor: "rgba(56, 189, 248, 0.1)",
                    tension: 0.4,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    grid: { color: "rgba(255, 255, 255, 0.05)" },
                    ticks: { color: "#94a3b8" }
                },
                x: {
                    grid: { display: false },
                    ticks: { display: false }
                }
            },
            plugins: {
                legend: { labels: { color: "#f8fafc" } }
            }
        }
    });

    setInterval(() => {
        const cpuData = telemetryChart.data.datasets[0].data;
        const ramData = telemetryChart.data.datasets[1].data;

        cpuData.shift();
        cpuData.push(Math.floor(Math.random() * 40) + 30);

        ramData.shift();
        ramData.push(Math.floor(Math.random() * 10) + 65);

        telemetryChart.update();
    }, 2000);
});