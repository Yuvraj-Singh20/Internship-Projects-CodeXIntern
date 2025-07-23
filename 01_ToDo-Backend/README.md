# ✅ Todo App Backend

A simple yet powerful Todo List REST API built using Node.js, Express, and MongoDB.  
This project was developed as part of my internship task at **CodeXIntern**, where the goal was to create a fully functional backend that demonstrates secure user authentication and task management using modern web technologies.

---

## 🚀 Features

- 🔐 User Registration and Login (JWT-based authentication)
- 🧾 Full CRUD operations for Todos
- 👤 User-specific Todo lists (each user sees only their own tasks)
- 📅 Supports due dates, priorities, and timestamps
- 🔒 Protected routes using middleware
- 📁 Clean and scalable folder structure following MVC principles

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: JSON Web Token (JWT), bcryptjs
- **Validation**: express-validator
- **Environment Config**: dotenv

---

## 📬 API Endpoints

### 👤 User Routes

| Method | Endpoint               | Description          |
|--------|------------------------|----------------------|
| POST   | `/api/users/register`  | Register a new user  |
| POST   | `/api/users/login`     | Login and get token  |

### 📝 Todo Routes (Protected - Requires JWT)

| Method | Endpoint              | Description             |
|--------|-----------------------|-------------------------|
| POST   | `/api/todos`          | Create a new todo       |
| GET    | `/api/todos`          | Get all user todos      |
| PUT    | `/api/todos/:id`      | Update a specific todo  |
| DELETE | `/api/todos/:id`      | Delete a specific todo  |

> For protected routes, include your token as a Bearer token in the headers.

---

## ⚙️ Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/Yuvraj-Singh20/todo-backend
cd todo-backend



### 🧪 Postman Collection
You can import the included `todo-backend-postman-collection.json` file into Postman to test all API routes quickly.
