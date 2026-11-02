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

document.addEventListener('Dfunction simulateGitAction(action) {\n' +
    '  const syncStatus = document.getElementById("sync-status");\n' +
    '  const commitLog = document.getElementById("commit-log");\n' +
    '\n' +
    '  if (!syncStatus) return;\n' +
    '\n' +
    '  const timestamp = new Date().toLocaleTimeString();\n' +
    '\n' +
    '  if (action === \'commit\') {\n' +
    '    syncStatus.textContent = "Changes committed locally";\n' +
    '    syncStatus.style.color = "#38bdf8";\n' +
    '    if (commitLog) {\n' +
    '      commitLog.innerHTML += `<div style="font-size:0.85rem; color:#94a3b8; margin-top:0.25rem;">[${timestamp}] Committed staged changes.</div>`;\n' +
    '    }\n' +
    '  } else if (action === \'push\') {\n' +
    '    syncStatus.textContent = "Synced with origin/main";\n' +
    '    syncStatus.style.color = "#4ade80";\n' +
    '    if (commitLog) {\n' +
    '      commitLog.innerHTML += `<div style="font-size:0.85rem; color:#4ade80; margin-top:0.25rem;">[${timestamp}] Pushed commits to GitHub.</div>`;\n' +
    '    }\n' +
    '  } else if (action === \'pull\') {\n' +
    '    syncStatus.textContent = "Up to date";\n' +
    '    syncStatus.style.color = "#f43f5e";\n' +
    '    if (commitLog) {\n' +
    '      commitLog.innerHTML += `<div style="font-size:0.85rem; color:#38bdf8; margin-top:0.25rem;">[${timestamp}] Pulled latest changes from remote.</div>`;\n' +
    '    }\n' +
    '  }\n' +
    '}OMContentLoaded', renderCommits);