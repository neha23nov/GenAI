# AlignAI

> Align your profile to the job. Land the interview.

AlignAI is an AI-powered career preparation platform built for students and freshers. It analyzes your resume, self-description, and target job description to identify skill gaps, generate interview questions, build a preparation roadmap, and produce a tailored resume — all in one place.

---

## What It Does

- **Profile Analysis** — paste your job description and upload your resume or write a quick self-description
- **Match Score** — AI scores how well your profile aligns with the role (0–100)
- **Skill Gap Detection** — identifies missing skills with severity levels (high / medium / low)
- **Technical Questions** — generates role-specific technical interview questions with model answers
- **Behavioral Questions** — generates behavioral questions with intention and how-to-answer guidance
- **Preparation Roadmap** — day-by-day preparation plan tailored to your gaps
- **Resume Download** — generates and downloads a tailored, ATS-friendly resume as a PDF

---

## Tech Stack

### Frontend
- React (Vite)
- React Router
- Axios
- SCSS Modules

### Backend
- Node.js + Express
- MongoDB + Mongoose
- Google Gemini AI (`gemini-2.5-flash`)
- Multer (file uploads)
- pdf-parse (resume extraction)
- Puppeteer (PDF generation)
- JWT Authentication

---

## Project Structure

```
AlignAI/
├── frontend/
│   └── src/
│       ├── features/
│       │   └── interview/
│       │       ├── pages/
│       │       │   ├── Home.jsx
│       │       │   └── Interview.jsx
│       │       ├── hooks/
│       │       │   └── useInterview.js
│       │       ├── context/
│       │       │   ├── interview.context.js
│       │       │   └── InterviewProvider.jsx
│       │       ├── services/
│       │       │   └── interview.api.js
│       │       └── style/
│       │           ├── home.scss
│       │           └── interview.scss
│       └── App.jsx
│
└── backend/
    └── src/
        ├── controllers/
        │   └── interview.controller.js
        ├── services/
        │   └── ai.service.js
        ├── models/
        │   └── interviewReport.model.js
        ├── routes/
        │   └── interview.routes.js
        └── middlewares/
            ├── auth.middleware.js
            └── file.middleware.js
```

---

## Getting Started

### Prerequisites

- Node.js v18+
- MongoDB (local or Atlas)
- Google Gemini API key

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/alignai.git
cd alignai
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_GENAI_API_KEY=your_gemini_api_key
```

Start the backend:

```bash
npm run dev
```

### 3. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

The app will be running at `http://localhost:5173`

---

## Environment Variables

| Variable | Description |
|---|---|
| `PORT` | Backend server port (default: 3000) |
| `MONGO_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret key for JWT tokens |
| `GOOGLE_GENAI_API_KEY` | Google Gemini API key |

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/login` | Login and get JWT token |
| `POST` | `/api/interview/` | Generate interview report |
| `GET` | `/api/interview/` | Get all reports for logged-in user |
| `GET` | `/api/interview/report/:id` | Get a specific report by ID |
| `POST` | `/api/interview/resume/pdf/:id` | Download tailored resume as PDF |

---

## How It Works

1. User registers and logs in
2. On the home page, user pastes a job description and uploads a resume or writes a self-description
3. AlignAI sends the data to Google Gemini AI
4. Gemini analyzes the profile against the job description and returns a structured report
5. The report is saved to MongoDB and displayed on the interview page
6. User can browse technical questions, behavioral questions, and the preparation roadmap
7. User can download a tailored, ATS-optimized resume as a PDF

---


