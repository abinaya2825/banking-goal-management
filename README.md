# 🏦 Vault — Banking Goal Management System

A modern full-stack web application for tracking personal financial goals. Built with Node.js + Express backend, MongoDB Atlas, and a pure HTML/CSS/JS frontend with glassmorphism design.

---

## 📁 Folder Structure

```
banking-app/
├── client/
│   └── public/
│       ├── index.html        ← Login page
│       ├── dashboard.html    ← Dashboard overview
│       ├── goals.html        ← Goals management page
│       └── shared.css        ← Shared styles & navbar
├── server/
│   ├── models/
│   │   └── Goal.js           ← Mongoose Goal model
│   ├── uploads/              ← Uploaded files (auto-created)
│   ├── index.js              ← Express server
│   ├── package.json
│   └── .env                  ← Environment variables (edit this!)
└── README.md
```

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js v18+ installed
- A MongoDB Atlas account (free tier works great)

---

### 1. Configure MongoDB Atlas

1. Go to [https://cloud.mongodb.com](https://cloud.mongodb.com) and sign in
2. Create a free cluster (M0)
3. In **Database Access**: create a user with read/write access
4. In **Network Access**: add `0.0.0.0/0` (allow all IPs) or your IP
5. Click **Connect → Drivers** and copy your connection string

It looks like:
```
mongodb+srv://youruser:yourpassword@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

---

### 2. Configure Environment Variables

Edit `server/.env`:

```env
PORT=5000
MONGODB_URI=mongodb+srv://youruser:yourpassword@cluster0.xxxxx.mongodb.net/banking_goals?retryWrites=true&w=majority
```

Replace `youruser`, `yourpassword`, and `cluster0.xxxxx.mongodb.net` with your real values.

---

### 3. Install & Run the Backend

```bash
cd server
npm install
npm start
```

You should see:
```
🚀 Server running on http://localhost:5000
✅ Connected to MongoDB Atlas
```

---

### 4. Open the Frontend

Open your browser and navigate to:

```
client/public/index.html
```

Or serve it with any static server. For example using Node's `http-server`:

```bash
# Install globally (once)
npm install -g http-server

# From the client/public directory
cd client/public
http-server -p 3000
```

Then visit: [http://localhost:3000](http://localhost:3000)

---

## 🔑 Login

Any username and password will work — authentication is simulated for demo purposes.

---

## 📡 API Endpoints

| Method | URL                      | Description                  |
|--------|--------------------------|------------------------------|
| GET    | `/goals`                 | Fetch all goals              |
| GET    | `/goals/:id`             | Fetch a single goal          |
| POST   | `/goals`                 | Create a new goal            |
| PATCH  | `/goals/:id`             | Update a goal                |
| DELETE | `/goals/:id`             | Delete a goal                |
| POST   | `/goals/:id/upload`      | Upload a file to a goal      |
| GET    | `/goals/:id/download`    | Download a goal's file       |
| GET    | `/health`                | Server health check          |

### POST /goals — Request Body

```json
{
  "name": "Emergency Fund",
  "targetAmount": 100000,
  "savedAmount": 25000,
  "icon": "https://example.com/icon.png"
}
```

---

## ✨ Features

- **Login page** — Simulated auth with any credentials
- **Dashboard** — Summary stats (total goals, target, saved, completed)
- **Goals page** — Card grid with animated progress bars
- **Add goal form** — Name, target amount, saved amount, optional icon URL
- **File upload** — Attach documents to any goal (up to 10MB)
- **File download** — Download attached files directly
- **Delete goals** — With confirmation dialog
- **Search filter** — Real-time goal filtering
- **Loading spinners** — On every async action
- **Toast notifications** — Success and error feedback
- **"No Goals Found"** — Empty state with CTA
- **Form validation** — Client-side input validation
- **Responsive** — Works on mobile and desktop

---

## 🛠 Tech Stack

| Layer     | Technology                  |
|-----------|-----------------------------|
| Frontend  | HTML, CSS, Vanilla JS       |
| Backend   | Node.js, Express            |
| Database  | MongoDB Atlas + Mongoose    |
| File I/O  | Multer (disk storage)       |
| Fonts     | Playfair Display + DM Sans  |

---

## 🐛 Troubleshooting

**CORS errors?**
The backend has CORS enabled for all origins. If you're getting errors, make sure the backend is running on port 5000.

**MongoDB connection fails?**
- Double-check your connection string in `.env`
- Ensure your IP is whitelisted in Atlas Network Access
- Confirm the username/password in the URI are URL-encoded (e.g., `@` → `%40`)

**Files not uploading?**
- The `server/uploads/` folder is created automatically
- Check file size (max 10MB)
