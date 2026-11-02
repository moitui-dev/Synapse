/**
 * Synapse Telemetry & Metrics Simulation Module
 */

let telemetryChartInstance = null;
const maxDataPoints = 15;

// Initialize Chart.js telemetry line graph
function initTelemetryChart() {
    const ctx = document.getElementById('telemetryChart');
    if (!ctx) return;

    // Initial time labels and random base data
    const initialLabels = Array.from({ length: maxDataPoints }, (_, i) => `-${(maxDataPoints - i) * 2}s`);
    const initialCpuData = Array.from({ length: maxDataPoints }, () => Math.floor(Math.random() * 20) + 15);
    const initialRamData = Array.from({ length: maxDataPoints }, () => Math.floor(Math.random() * 5) + 40);

    telemetryChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: initialLabels,
            datasets: [
                {
                    label: 'CPU (%)',
                    data: initialCpuData,
                    borderColor: '#9e1b32', // Accent burgundy-light
                    backgroundColor: 'rgba(128, 0, 32, 0.1)',
                    borderWidth: 2,
                    tension: 0.3,
                    fill: true
                },
                {
                    label: 'RAM (%)',
                    data: initialRamData,
                    borderColor: '#94a3b8', // Muted text/slate tone
                    backgroundColor: 'transparent',
                    borderWidth: 2,
                    tension: 0.3,
                    borderDash: [4, 4]
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    min: 0,
                    max: 100,
                    grid: { color: '#2e3446' },
                    ticks: { color: '#94a3b8', font: { size: 10 } }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: '#94a3b8', font: { size: 10 } }
                }
            },
            plugins: {
                legend: {
                    labels: { color: '#e2e8f0', font: { size: 11 } }
                }
            }
        }
    });

    // Start live polling loop to simulate metrics updates
    setInterval(updateTelemetryData, 2000);
}

// Generate live fluctuations and update the UI metrics
function updateTelemetryData() {
    if (!telemetryChartInstance) return;

    // Generate simulated fluctuating values
    const newCpu = Math.floor(Math.random() * 35) + 15; // 15% - 50%
    const newRam = Math.floor(Math.random() * 4) + 42;  // 42% - 46%
    const ramGigabytes = (newRam * 0.16).toFixed(1);    // Simulated out of 16 GB total

    // Update DOM readouts
    const cpuValEl = document.getElementById('cpu-val');
    const ramValEl = document.getElementById('ram-val');
    if (cpuValEl) cpuValEl.textContent = `${newCpu}%`;
    if (ramValEl) ramValEl.textContent = `${ramGigabytes} GB (${newRam}%)`;

    // Update Chart Data Stream
    const chart = telemetryChartInstance;
    const now = new Date();
    const timeLabel = `${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;

    chart.data.labels.push(timeLabel);
    chart.data.labels.shift();

    chart.data.datasets[0].data.push(newCpu);
    chart.data.datasets[0].data.shift();

    chart.data.datasets[1].data.push(newRam);
    chart.data.datasets[1].data.shift();

    chart.update('none'); // Update smoothly without full re-animation lag
}

document.addEventListener('DOMContentLoaded', initTelemetryChart);