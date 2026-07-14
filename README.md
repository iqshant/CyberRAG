# 🛡️ CyberRAG

> An AI-powered Cybersecurity Knowledge Assistant that uses Retrieval-Augmented Generation (RAG) to provide accurate, source-backed answers from trusted cybersecurity resources.

![Python](https://img.shields.io/badge/Python-3.11+-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-green)
![React](https://img.shields.io/badge/React-Frontend-61DAFB)
![Qdrant](https://img.shields.io/badge/Qdrant-Vector%20Database-red)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## 📖 Overview

CyberRAG is a production-inspired Retrieval-Augmented Generation (RAG) application designed for cybersecurity professionals, students, and researchers.

Instead of relying solely on an LLM's internal knowledge, CyberRAG retrieves relevant information from trusted cybersecurity documentation and generates grounded responses with citations.

The project demonstrates modern AI engineering concepts including semantic search, vector databases, document ingestion pipelines, prompt engineering, and hybrid retrieval.

---

## ✨ Features

* 🔍 Semantic document search
* 📚 Retrieval-Augmented Generation (RAG)
* 📄 PDF and document ingestion
* 🧠 Vector embeddings
* ⚡ Fast semantic retrieval
* 📌 Source citations
* 💬 Conversational chat interface
* 🛡️ Cybersecurity-focused knowledge base
* 📈 Modular and scalable architecture
* 🌙 Dark mode interface *(planned)*

---

## 🛡️ Knowledge Sources

CyberRAG indexes trusted cybersecurity resources such as:

* MITRE ATT&CK Framework
* OWASP Top 10
* NIST Publications
* Sigma Detection Rules
* Splunk Documentation
* CVE Database
* CISA Advisories *(planned)*
* Elastic Detection Rules *(planned)*

---

## 🏗️ Architecture

```text
                 User
                   │
                   ▼
            React Frontend
                   │
                   ▼
             FastAPI Backend
                   │
        ┌──────────┴──────────┐
        │                     │
        ▼                     ▼
 Document Retriever      Conversation
        │                  Memory
        ▼
  Vector Database
        │
        ▼
   Relevant Chunks
        │
        ▼
        LLM
        │
        ▼
 Grounded Answer
   + Citations
```

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS

### Backend

* FastAPI
* Python

### AI & RAG

* LangChain / LlamaIndex
* OpenAI / Gemini / Local LLM
* Embedding Models
* Hybrid Retrieval

### Database

* Qdrant
* PostgreSQL *(future)*

### DevOps

* Docker
* GitHub
* Docker Compose

---

## 📂 Project Structure

```text
CyberRAG/
│
├── backend/
├── frontend/
├── data/
├── docs/
├── scripts/
├── vector_db/
│
├── README.md
├── LICENSE
├── .gitignore
└── docker-compose.yml
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/<your-username>/CyberRAG.git

cd CyberRAG
```

---

### Backend

```bash
cd backend

pip install -r requirements.txt

uvicorn main:app --reload
```

---

### Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## 📸 Screenshots

### Home

*(Coming Soon)*

---

### Chat Interface

*(Coming Soon)*

---

### Source Citations

*(Coming Soon)*

---

## 📌 Example Questions

* Explain MITRE ATT&CK technique T1059.
* How can I detect PowerShell attacks?
* Show Sigma rules for credential dumping.
* Explain CVE-2024-3400.
* How does SQL Injection work?
* What are the mitigations for ransomware?

---

## 🎯 Roadmap

### Phase 1

* [ ] FastAPI backend
* [ ] React frontend
* [ ] PDF ingestion
* [ ] Basic chat UI

### Phase 2

* [ ] Chunking pipeline
* [ ] Embeddings
* [ ] Qdrant integration
* [ ] Semantic retrieval

### Phase 3

* [ ] Source citations
* [ ] Conversation history
* [ ] Multi-document support
* [ ] Better prompt engineering

### Phase 4

* [ ] Hybrid Search (BM25 + Vector)
* [ ] Cross-Encoder Reranking
* [ ] Authentication
* [ ] Deployment

### Phase 5

* [ ] CVE Lookup
* [ ] Incident Response Playbooks
* [ ] Sigma Rule Generator
* [ ] Splunk Query Generator

---

## 📚 Learning Objectives

This project demonstrates practical experience with:

* Retrieval-Augmented Generation (RAG)
* Vector Databases
* Embedding Models
* Prompt Engineering
* Information Retrieval
* FastAPI
* React
* API Design
* Software Architecture
* AI Application Development

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Iqshant Bawa**

* GitHub: https://github.com/iqshant
* LinkedIn: https://www.linkedin.com/in/iqshantbawa/

---

⭐ If you found this project useful or interesting, consider giving it a star.
