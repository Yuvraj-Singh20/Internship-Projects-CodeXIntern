# 🎯 Event Management System - Backend API

A professional and scalable **RESTful API** built with **Node.js**, **Express**, and **MongoDB** for managing events and registrations with **JWT-based authentication** and **role-based authorization**.

This project is part of my **CodeXIntern internship**, showcasing clean architecture, secure auth, modular coding practices, and real-world backend concepts.

---

## 📌 Table of Contents

- [🚀 Project Overview](#-project-overview)
- [🛠️ Tech Stack](#️-tech-stack)
- [✨ Features](#-features)
- [📁 Folder Structure](#-folder-structure)
- [🔐 Environment Variables](#-environment-variables)
- [⚙️ Installation & Setup](#️-installation--setup)
- [📬 API Endpoints](#-api-endpoints)
- [📮 Postman Testing](#-postman-testing)
- [👨‍💻 Author](#-author)
- [✅ Final Notes](#-final-notes)

---

## 🚀 Project Overview

The **Event Management System** backend enables:

- 👤 User registration & login with JWT  
- 🧑‍💼 Admin-exclusive event management  
- 🙋‍♂️ User event registrations  
- 📜 Role-based access control (User/Admin)  
- ⚙️ Scalable and maintainable folder structure  

---

## 🛠️ Tech Stack

| Layer         | Technology              |
|---------------|--------------------------|
| **Runtime**   | Node.js                  |
| **Framework** | Express.js               |
| **Database**  | MongoDB with Mongoose    |
| **Auth**      | JSON Web Token (JWT)     |
| **Validation**| express-validator        |
| **Middleware**| Custom auth + role-based |
| **Env Config**| dotenv                   |
| **Testing**   | Postman                  |

---

## ✨ Features

- ✅ Secure registration and login with JWT  
- ✅ Role-based access control (Admin / User)  
- ✅ Create, read, update, delete events (Admin only)  
- ✅ Event registration for users  
- ✅ Organized MVC folder structure  
- ✅ Input validation and centralized error handling  

---

## 📁 Folder Structure

Event-Management-System/
├── controllers/ # Business logic
├── middlewares/ # Auth, role middleware
├── models/ # Mongoose schemas
├── routes/ # Route handlers
├── config/ # DB connection
├── app.js # Express setup
├── server.js # Entry point
├── .env # Environment variables
└── README.md

yaml
Copy
Edit

---

## 🔐 Environment Variables

Create a `.env` file in root directory:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/event_db
JWT_SECRET=yourSecretKey

yaml
Copy
Edit

---

## ⚙️ Installation & Setup

```bash
# 1. Clone the repository
git clone https://github.com/Yuvraj-Singh20/event-management-system.git

# 2. Navigate into project
cd event-management-system

# 3. Install dependencies
npm install

# 4. Create .env and set environment variables

# 5. Run server
nodemon server.js
📍 Server running on: http://localhost:5000

📬 API Endpoints
🔐 Auth Routes
Method	Route	Description	Access
POST	/api/auth/register	Register new user	Public
POST	/api/auth/login	Login existing user	Public

📅 Event Routes
Method	Route	Description	Access
POST	/api/events	Create new event	Admin
GET	/api/events	Get all events	Public
GET	/api/events/:id	Get single event	Public
PUT	/api/events/:id	Update event	Admin
DELETE	/api/events/:id	Delete event	Admin

📝 Registration Routes
Method	Route	Description	Access
POST	/api/registrations	Register for event	User
GET	/api/registrations/my	View my registrations	User
GET	/api/registrations	View all registrations	Admin

📮 Postman Testing
✅ Postman Collection Setup
You can import the following:

📁 Event-Management-admin.postman_collection.json
📁 Event-Management-user.postman_collection.json

🧑‍💼 Admin Testing Flow

Register Admin
POST http://localhost:5000/api/auth/register
Body:
{
  "username": "admin",
  "email": "admin@example.com",
  "password": "admin123",
  "role": "admin"
}


Login Admin
POST http://localhost:5000/api/auth/login
Use returned token in Authorization: Bearer <token>

Create Event
POST http://localhost:5000/api/events
Body:
{
  "title": "Tech Conference 2025",
  "description": "India's largest tech event",
  "date": "2025-08-01",
  "time": "10:00 AM",
  "location": "Mumbai",
  "capacity": 300
}


Update Event
PUT http://localhost:5000/api/events/<event_id>


Delete Event
DELETE http://localhost:5000/api/events/<event_id>


Get All Registrations
GET http://localhost:5000/api/registrations


👤 User Testing Flow
Register User

POST http://localhost:5000/api/auth/register

Body:
{
  "username": "user1",
  "email": "user1@example.com",
  "password": "User@123",
  "role": "user"
}

Login User
POST http://localhost:5000/api/auth/login
Use returned token in Authorization: Bearer <token>


Get All Events
GET http://localhost:5000/api/events


Register for Event
POST http://localhost:5000/api/registrations
Body:
{
  "eventId": "<event_id_here>"
}


View My Registrations
GET http://localhost:5000/api/registrations/my


🔑 Authorization Format
Use the token received during login in all protected routes:
Authorization: Bearer <your_token_here>


👨‍💻 Author
Yuvraj Singh
Backend Developer Intern – CodeXIntern

🔗 GitHub
💼 LinkedIn

✅ Final Notes
This backend-only system showcases:

🧠 Modular code with separation of concerns
🔐 Secure user + admin auth with JWT
🛡️ Role-based route protection
🧪 Fully tested with Postman collections
🚀 Real-world backend development practices

⭐ Feel free to fork, star, or use it in your own portfolio.
Thanks for checking out this project!
📦 Happy Coding!
