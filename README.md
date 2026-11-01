# ◈ SYNAPSE // Local Resource & Task Dashboard

**Synapse** is a sleek, real-time web command center designed for developers. It unifies system telemetry, local command snippets, workflow quick-launches, and version control tracking into a single, cohesive dashboard interface.

---

## 🚀 Core Features

* **System Telemetry & Health Widget:** Live-updating line charts tracking CPU usage and RAM allocation via a lightweight Chart.js integration.
* **Snippet & Command Vault:** A searchable repository of frequently used terminal commands, Python scripts, and virtual environment utilities featuring one-click copy triggers.
* **Quick Launch Grid:** Instant access to local development servers, documentation links, and terminal shortcuts.
* **Refined Aesthetics:** Styled with a professional, human-centric color palette (deep slate backgrounds paired with deep burgundy accents).

---

## 📂 Project Architecture

```text
Synapse/
├── index.html        # Main dashboard structure & layout
├── css/
│   └── styles.css    # Deep slate & burgundy theme styling
└── js/
    ├── app.js        # Core application initialization & live clock
    ├── telemetry.js  # System metrics display & Chart.js simulation
    ├── commands.js   # Snippet vault & clipboard copy triggers
    └── git-vault.js  # Git repository status & workflow simulation