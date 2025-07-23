# 💼 Job Portal Backend API

A scalable backend for a **Job Portal Management System**, built using **Node.js**, **Express**, and **MongoDB**.  
This project supports **role-based authentication**, **secure job postings**, and **job applications**, designed to simulate real-world backend architecture.

---

## 🚀 Features

- 🔐 Role-based JWT Authentication (**Admin & User**)
- 👨‍💻 Users can browse and apply for jobs
- 🧑‍💼 Admins can post, view, and delete jobs
- 📦 RESTful API design following best practices
- ✅ Tested via Postman (collections included)

---

## 🛠️ Tech Stack (Structured by Responsibility)

| Layer / Category    | Technology                        |
|---------------------|------------------------------------|
| **Backend**         | Node.js, Express.js               |
| **Database**        | MongoDB, Mongoose ODM             |
| **Authentication**  | JSON Web Token (JWT)              |
| **Environment Vars**| dotenv                            |
| **Dev Tools**       | Nodemon, Postman                  |
| **Version Control** | Git, GitHub                       |

---

## 📁 Folder Structure

JobPortal-Backend/
├── config/ # MongoDB connection config
├── controllers/ # Route logic
├── middleware/ # Auth & role validation
├── models/ # Mongoose schemas
├── routes/ # Auth, job, and application routes
├── PostmanCollections/ # Postman testing files (Admin/User)
├── server.js # Entry point
├── .env # Environment config
├── .gitignore
└── README.md

---

## ⚙️ Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Yuvraj-Singh20/JobPortal-Backend.git
cd JobPortal-Backend


2. Install Dependencies
npm install


3. Configure Environment Variables
Create a .env file in the root folder:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key


4. Run the Development Server
nodemon server.js
Server will start on: http://localhost:5000


🔐 Authentication Overview
Users and Admins must register and then login to receive a JWT token

All protected routes require token in headers:

Authorization: Bearer <your_token>
📬 API Endpoints
🔑 Auth Routes
Method	Route	Access	Description
POST	/api/auth/register	Public	Register as User or Admin
POST	/api/auth/login	Public	Login and receive token


💼 Job Routes (Admin Only)
Method	Route	Description
POST	/api/jobs/	Create new job
GET	/api/jobs/	Retrieve all jobs
GET	/api/jobs/:id	Get single job by ID
DELETE	/api/jobs/:id	Delete job by ID


📝 Application Routes
Method	Route	Access	Description
POST	/api/applications/:jobId	User Only	Apply to a specific job by ID
GET	/api/applications/	Admin Only	Get all applications
GET	/api/applications/my	User Only	Get applications by the logged-in user


🧪 Postman Testing (Included)
The PostmanCollections folder contains pre-configured Postman files to test the entire API:
✅ Admin.postman_collection.json
✅ User.postman_collection.json

🔍 How to Use
Import both files into Postman

Test:
Registration/Login

Job posting (Admin)
Applying for jobs (User)
Viewing applications

👨‍💼 Admin Testing Sample

Register as Admin
{
  "name": "Admin",
  "email": "admin@example.com",
  "password": "admin123",
  "role": "admin"
}


Login
{
  "email": "admin@example.com",
  "password": "admin123"
}
Use the received token in all further admin requests.


👤 User Testing Sample
Register as User
{
  "name": "Yuvraj",
  "email": "user@example.com",
  "password": "user123",
  "role": "user"
}

Login
{
  "email": "user@example.com",
  "password": "user123"
}

Use the JWT token to:

View all jobs
Apply for a job using job ID
View your own applications


✍️ Author
Yuvraj Singh
💻 GitHub
🔗 LinkedIn


📜 License
This project is open for learning and demonstration purposes.
Feel free to fork, use, or modify with proper credit.
