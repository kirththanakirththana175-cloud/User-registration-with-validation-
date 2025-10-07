# User-registration-with-validation-
Perfect, Keerthana 🌸 — here’s a professional and easy-to-understand README.md for your User Registration with Validation project (frontend + backend + dashboard).

You can put this file in your project root folder (user-registration/README.md).


---

# 🧑‍💻 User Registration with Validation (Frontend + Backend)

A full-stack web application that allows users to **register, log in, reset passwords, and access a personal dashboard** — built using **HTML, CSS, JavaScript, Node.js, Express, and MongoDB**.

---

## 🚀 Features

- ✅ User registration with form validation  
- ✅ Login authentication using email & password  
- ✅ Prevents duplicate registration (redirects to login page if already registered)  
- ✅ Forgot password page (simulated reset)  
- ✅ User dashboard with personalized welcome message  
- ✅ Frontend and backend connected using REST API  
- ✅ Clean and modern **unique UI design**  

---

## 🏗️ Project Structure

user-registration │ ├── backend │   ├── server.js │   ├── models │   │   └── User.js │   ├── routes │   │   └── auth.js │   └── package.json │ └── frontend ├── index.html ├── login.html ├── forgot.html ├── dashboard.html ├── style.css ├── script.js ├── login.js ├── forgot.js └── dashboard.js

---

## ⚙️ Installation and Setup

### 1️⃣ Clone the Project
```bash
git clone https://github.com/yourusername/user-registration.git
cd user-registration/backend

2️⃣ Initialize Node.js

npm init -y

3️⃣ Install Dependencies

npm install express mongoose bcryptjs cors body-parser express-validator


---

🧠 MongoDB Setup

Option A — Local MongoDB

1. Install MongoDB from https://www.mongodb.com/try/download/community


2. Run the service:

mongod


3. The app connects to:

mongodb://127.0.0.1:27017/userDB



Option B — MongoDB Atlas (Recommended)

1. Create a free cluster at https://www.mongodb.com/cloud/atlas


2. Replace this line in server.js:

mongoose.connect('mongodb://127.0.0.1:27017/userDB')

with your Atlas URI:

mongoose.connect('mongodb+srv://<username>:<password>@cluster0.mongodb.net/userDB')




---

🖥️ Running the Project

1️⃣ Start the Backend

cd backend
node server.js

✅ Output:

MongoDB connected
Server running on port 5000

2️⃣ Run the Frontend

Open frontend/index.html directly in your browser
(or use the VS Code Live Server extension)


---

🌈 Pages Overview

Page	File	Description

Register	index.html	Create new account with validation
Login	login.html	Sign in to your account
Forgot Password	forgot.html	Simulate password reset
Dashboard	dashboard.html	Personalized user area



---

🧩 Technologies Used

Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: MongoDB / MongoDB Atlas
Security: Bcrypt.js for password hashing
Validation: Express-Validator


---

📂 Sample API Endpoints

Method	Endpoint	Description

POST	/register	Register new user
POST	/login	Authenticate user
GET	/users	Get all registered users (for testing)



---

🪄 Screenshots

(Add screenshots of your Register, Login, and Dashboard pages here)


---

🤝 Author

👩‍💻 Keerthana Sivaraj
🎓 Computer Science – 3rd Year
📍 Tamil Nadu, India


---

🧾 License

This project is open-source and free to use for educational purposes.


---

---

Would you like me to **add screenshots placeholders** and a short **“How It Works (workflow diagram)”** section to make your README look even more like a professional GitHub project?

