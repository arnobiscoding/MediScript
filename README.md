# MediScript

A simple role-based login/signup web application built with **Node.js**, **Express**, **MySQL**, and **vanilla JavaScript/CSS/HTML**. Users can register and log in as **Doctor**, **Patient**, or **Admin** and see a personalized dashboard.

## 📂 Project Structure

```
MediScript/
├── db.js               # MySQL connection setup
├── db.sql              # Database schema for `dbms_project`
├── server.js           # Express server and API routes
├── package.json        # NPM dependencies and scripts
└── public/             # Static frontend files
    ├── index.html      # Single-page login/signup UI
    ├── css/
    │   └── style.css   # Stylesheet
    └── js/
        └── app.js      # Frontend logic (toggle forms, fetch API)
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+)
- MySQL Server
- (Optional) MySQL Workbench or phpMyAdmin for DB management

### Setup

1. **Clone the repo**

   ```bash
   git clone https://github.com/YourUser/MediScript.git
   cd MediScript
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure database**

   - Create a MySQL database named `dbms_project`.
   - Run the SQL in `db.sql` to create the `users` table.
   - Update credentials in `db.js` if needed.

4. **Start the server**

   ```bash
   npm start
   ```

5. **Open in browser** Navigate to `http://localhost:3000` to see the login/signup page.

## 🛠️ Usage

1. **Sign Up** as Doctor, Patient, or Admin.
2. **Log In** with your credentials.
3. **View Dashboard**: Personalized greeting based on role.

## 🔐 Security

- Passwords are hashed with **bcrypt**.
- For production, consider adding session management (JWT or express-session) and HTTPS.

## 📈 Next Steps

- Implement persistent sessions and logout flows.
- Create separate dashboards and routes per role.
- Add form validation and error handling UX.
- Deploy to a cloud provider (Heroku, AWS, etc.).

## 🤝 Contributing

Feel free to open issues or submit pull requests. Please follow standard GitHub flow.

## 📄 License

This project is released under the MIT License.
