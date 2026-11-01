const mockCommits = [
    { hash: "a1b2c3d", message: "Initial commit: Setup dashboard skeleton", time: "2 hours ago" },
    { hash: "e4f5g6h", message: "Add telemetry charts and dark theme styles", time: "1 hour ago" }
];

function renderCommits() {
    const logContainer = document.getElementById('commit-log');
    if (!logContainer) return;

    logContainer.innerHTML = mockCommits.map(c => `
    <div class="commit-item">
      <span class="commit-message">${c.message}</span>
      <span class="commit-hash">${c.hash}</span>
    </div>
  `).join('');
}

function simulateGitAction(action) {
    const statusEl = document.getElementById('sync-status');
    if (action === 'commit') {
        statusEl.textContent = "Unpushed local commits";
        alert("Simulated: Changes staged and committed locally.");
    } else if (action === 'push') {
        statusEl.textContent = "Up to date with origin/main";
        alert("Simulated: Pushed local commits to GitHub repository!");
    } else if (action === 'pull') {
        statusEl.textContent = "Up to date";
        alert("Simulated: Pulled latest changes from GitHub origin.");
    }
}

document.addEventListener('DOMContentLoaded', renderCommits);