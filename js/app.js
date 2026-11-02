/**
 * Synapse Main Application Logic
 */

// Live system clock updater
function initClock() {
    const clockEl = document.getElementById('clock-display');
    if (!clockEl) return;

    function updateTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        clockEl.textContent = `${hours}:${minutes}:${seconds}`;
    }

    updateTime();
    setInterval(updateTime, 1000);
}

// Application initialization sequence
document.addEventListener('DOMContentLoaded', () => {
    console.log('SYNAPSE // Dashboard Initialized.');
    initClock();
});