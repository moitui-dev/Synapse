document.addEventListener("DOMContentLoaded", () => {
    const clockElement = document.getElementById("live-clock");
    if (clockElement) {
        setInterval(() => {
            const now = new Date();
            clockElement.textContent = now.toLocaleTimeString();
        }, 1000);
    }
});