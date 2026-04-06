# 🚀 Jira Automation & Integration App (Forge)

## 📌 Overview

This project is a backend automation system built with Atlassian Forge.
It listens to Jira events, processes them asynchronously using queues, and stores state using Forge SQL.

The system is designed using an event-driven architecture and simulates a production-ready backend service.

---

## 🧠 Key Features

- Trigger-based processing (Jira issue events)
- Async job handling with queues and consumers
- SQL-based state management (Forge SQL)
- External integration via Web Trigger API
- Scheduled jobs (cron) for retry/cleanup
- Clean architecture (service + repository pattern)

---

## 🏗️ Architecture

```text
User / Jira Event
        ↓
Trigger Module
        ↓
Service Layer
        ↓
Repository (SQL)
        ↓
Queue (Async Jobs)
        ↓
Consumer (Worker)
        ↓
External Service / DB Update
```

---

## 📁 Project Structure

```text
src/
  trigger/       # Jira event handlers
  consumer/      # Queue workers
  services/      # Business logic
  repository/    # SQL queries
  api/           # Webtrigger endpoints
  cron/          # Scheduled jobs
  utils/         # Logger and helpers
```

---

## ⚙️ Tech Stack

- Atlassian Forge (FaaS platform)
- Forge SQL (serverless database)
- Node.js runtime
- Event-driven architecture
- Async queue processing

---

## 🔁 Flow Example

### When a Jira issue is created:

1. Trigger captures the event
2. System checks if the issue was already processed
3. A job is pushed to a queue
4. Consumer processes the job (e.g., send email / sync data)
5. Database is updated with the result

---

## 🧪 How to Run

### 1. Install dependencies

```bash
npm install
```

### 2. Deploy the app

```bash
forge deploy
```

### 3. Install on Jira site

```bash
forge install
```

### 4. View logs

```bash
forge logs --tail
```

---

## 🗄️ Initialize Database

This project uses Forge SQL.
To create the schema:

1. Get webtrigger URL:

```bash
forge webtrigger
```

2. Call the init endpoint:

```bash
curl <init-db-url>
```

3. After initialization, remove the init endpoint from the manifest for security.

---

## 🌐 API (Web Trigger)

Example request:

```bash
curl -X POST <webtrigger-url> \
  -H "Content-Type: application/json" \
  -d '{"issueKey":"TEST-123"}'
```

---

## ⏰ Scheduled Jobs

The app includes a scheduled trigger that runs periodically to:

- Retry failed jobs
- Clean up old data

---

## 🧩 Example Use Cases

- Auto-send email when issue is created
- Sync Jira issues to external systems (CRM, Notion, etc.)
- Log and audit issue activity
- Prevent duplicate processing

---

## 📌 Future Improvements

- Retry mechanism with exponential backoff
- Job tracking table
- Real email integration (SendGrid)
- Slack/Notion integration
- Dashboard UI (Forge Custom UI)

---

## 📄 License

MIT

---

## ✨ Author

Built as a learning and portfolio project to explore Atlassian Forge and event-driven backend architecture.
