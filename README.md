# 🧠 The Introspection Project: Emotional AI Platform

**By MO Cavada (a.k.a. Botski)**  
_“Emotional Authentic Intelligence” for deeper self-awareness, relational insight, and human connection._

---

## 📌 Overview

**The Introspection Project** is a full-stack emotional intelligence platform designed to help users reflect on their emotional patterns, analyze relationships, and grow in self-awareness. Combining OpenAI GPT-4 and IBM InspectorRAGet, the platform supports journaling, interaction analysis, and AI-powered emotional insights based on the **3 Constants of Human Connection**:

1. **Change** – Act, React, Attract  
2. **Power** – Negative, Positive, Balanced Influence  
3. **Moments** – Past Reflections, Present Awareness, Future Insights

> 💡 **Emotional AI = Emotional Authentic Intelligence**  
> This project is NOT about simulating emotions but helping humans understand their emotional patterns and relational dynamics.

---

## 🧱 Architecture

### 🎯 Stack

| Area            | Tech Stack |
|-----------------|------------|
| Frontend (Admin) | React, Vite, Carbon Design System |
| Mobile (User)   | React Native (PWA MVP) |
| Backend/API     | Node.js, Express |
| AI Integration  | OpenAI GPT-4, IBM InspectorRAGet |
| Database        | PostgreSQL + SQLAlchemy |
| DevOps          | Docker, GitHub Actions (CI/CD ready) |
| Design          | Figma Wireframes ([View](https://www.figma.com/design/AcpskXz9xS0Y0qE7zngR9E)) |

---

## 💡 Features

- 📖 **Journaling Interface** – Users can log their thoughts and reflect on emotional events.
- 🤖 **AI-Powered Introspection** – GPT-4 responds with emotionally relevant insights based on journaling context.
- 🔍 **Emotional Analysis** – IBM InspectorRAGet provides real-time sentiment and effect classification.
- 🧩 **3 Constants Algorithm** – Custom-built framework maps emotional interactions across Change, Power, and Moments.
- 📊 **ERD & Data Modeling** – SQL schema for users, interactions, effects, moments, and relationships.
- 🧭 **Spiritual Guidance Mode** – Contextual Bible verses and mindfulness prompts for faith-based users.
- 🔐 **Modular Architecture** – Admin UI and user-facing apps are decoupled for scalability.

---

## 🔄 Workflow Integration

```mermaid
sequenceDiagram
    participant User
    participant Frontend (Chat UI)
    participant GPT-4
    participant IBM InspectorRAGet
    participant Backend API
    participant Database

    User->>Frontend (Chat UI): Enters journal or interaction text
    Frontend->>GPT-4: Generates emotional reflection
    Frontend->>InspectorRAGet: Analyzes sentiment/emotions
    GPT-4-->>Frontend: Reflection Response
    InspectorRAGet-->>Frontend: Emotional Summary
    Frontend->>Backend API: Stores session data
    Backend API->>Database: Persist logs, effects, moments



⸻

📁 Project Structure

emotional-ai/
├── backend/                # Node.js API server
│   ├── app.js
│   ├── models/
│   └── ...
├── admin-ui/              # React admin interface (Carbon Design System)
│   ├── src/
│   └── ...
├── mobile-app/            # React Native PWA (prototype)
├── erd/                   # SQLAlchemy models, ERAlchemy script
├── docker/
│   ├── Dockerfile.api
│   ├── Dockerfile.ui
├── .env.sample
└── README.md



⸻

📌 Try It Live
	•	🌐 Web: https://kentoverse.com
	•	📱 Mobile PWA (Prototype): https://botski.info

⸻

🧠 The 3 Constants of Human Connection

Constant	Subcategories	AI Application
Change	Act, React, Attract	GPT-4 parses conversation flow and user interaction style
Power	Positive, Negative, Neutral	InspectorRAGet evaluates influence and effect
Moments	Past, Present, Future	GPT-4 generates insights across time-bound patterns



⸻

📊 Data Modeling

Entities:
	•	Users: Personal profile, journaling settings
	•	Interactions: Types (Act, React, Attract)
	•	Effects: Emotional outcome (Negative, Neutral, Positive)
	•	Moments: Reflections across past, present, future
	•	Relationships: Interaction history between users

🖼️ Entity Relationship Diagram (ERD)

⸻

🚀 Local Development

1. Clone the Repo

git clone https://github.com/your-username/emotional-ai.git
cd emotional-ai

2. Set Up Environment Variables

cp .env.sample .env
# Add your OpenAI API key and DB credentials

3. Run Backend & Admin UI

# Backend
cd backend && npm install && npm run dev

# Admin UI
cd ../admin-ui && npm install && npm run dev



⸻

🧠 Author’s Note

This project merges AI and emotional healing to guide people through introspection, honest self-evaluation, and spiritually aligned growth.
– MO Cavada / Botski

⸻

📚 Related Work
	•	📖 Emotional AI (Book, in development)
	•	🧠 The 3 Constants of Human Connection

⸻

🛡️ License

MIT License. Use freely, but give credit. 🙏

⸻

💌 Contact

📧 marc@kentoverse.com
🔗 LinkedIn
🌐 kentoverse.com

---
