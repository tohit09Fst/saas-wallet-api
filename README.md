# 🧾 Mini SaaS Deal + Wallet API

A simplified backend API simulation for managing users, deals, and wallet balances using **Node.js**, **Express.js**, and **MongoDB**. This project demonstrates backend fundamentals like routing, CRUD operations, data validation, and logic processing.

---

## 📦 Tech Stack

- **Backend:** Node.js + Express.js
- **Database:** MongoDB + Mongoose
- **Environment Variables:** dotenv

---

## 🚀 Features

- Create users with a wallet
- Add and list SaaS deals
- Claim deals by deducting price from user's wallet
- Get user info with current wallet balance

---

## 📁 Folder Structure
```
saas-wallet-api/
├── models/
│ ├── Deal.js
│ └── User.js
├── routes/
│ ├── deals.js
│ └── users.js
├── server.js
├── .env
├── package.json
└── README.md
```


---

## 📦 Installation

```bash
git clone https://github.com/your-username/saas-wallet-api.git
cd saas-wallet-api
npm install


⚙️ Environment Setup
Create a .env file in the root:
MONGO_URI=mongodb://localhost:27017/saas-wallet

🔧 Running the Project
npm run dev

Runs the server at:
http://localhost:3000

