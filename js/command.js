// Pre-populated local commands and code snippets
const snippetVault = [
    {
        title: "Start Local Server",
        command: "python -m http.server 8000",
        category: "Python"
    },
    {
        title: "Check Git Status",
        command: "git status --short",
        category: "Git"
    },
    {
        title: "Create Python Virtual Environment",
        command: "python -m venv venv",
        category: "Python"
    },
    {
        title: "Activate Virtual Environment (Windows)",
        command: ".\\venv\\Scripts\\activate",
        category: "Windows"
    }
];

// Render snippets into the vault container
function renderSnippets() {
    const container = document.getElementById('snippet-list');
    if (!container) return;

    container.innerHTML = snippetVault.map((item, index) => `
    <div class="snippet-item" style="background: var(--bg-secondary); padding: 12px; border-radius: 6px; margin-bottom: 10px; border-left: 3px solid var(--accent-burgundy);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
        <strong style="font-size: 0.9rem; color: var(--text-main);">${item.title}</strong>
        <span style="font-size: 0.75rem; color: var(--text-muted); background: var(--bg-primary); padding: 2px 6px; border-radius: 4px;">${item.category}</span>
      </div>
      <div style="display: flex; gap: 8px; align-items: center;">
        <code style="flex: 1; background: var(--bg-primary); padding: 6px 10px; border-radius: 4px; font-family: monospace; font-size: 0.85rem; color: var(--text-main); overflow-x: auto;">${item.command}</code>
        <button onclick="copySnippet(${index})" style="background: var(--accent-burgundy); color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-size: 0.8rem; font-weight: 600;">Copy</button>
      </div>
    </div>
  `).join('');
}

// Copy snippet text to clipboard
function copySnippet(index) {
    const target = snippetVault[index];
    if (!target) return;

    navigator.clipboard.writeText(target.command).then(() => {
        alert(`Copied to clipboard: "${target.command}"`);
    }).catch(err => {
        console.error('Failed to copy snippet: ', err);
    });
}

// Quick launch action triggers
function triggerAction(actionType) {
    switch (actionType) {
        case 'localhost':
            window.open('http://localhost:8000', '_blank');
            break;
        case 'terminal':
            alert('Terminal shortcut triggered: Use Ctrl + ` in IntelliJ to open the integrated terminal.');
            break;
        case 'docs':
            window.open('https://docs.github.com/en', '_blank');
            break;
        default:
            console.log(`Action ${actionType} triggered.`);
    }
}

document.addEventListener('DOMContentLoaded', renderSnippets);