# BloodATM

[BloodATM Web App](https://bloodatm.netlify.app/) is a modern web application for **blood donation and request management**, also available as a **Telegram Mini App** via [@Bloodatmbot](https://t.me/Bloodatmbot).  

It connects people who **need blood** with those who are willing to **donate**, while providing an **admin dashboard** to track requests in real time.

---

## ✨ Features

### 🧑‍🤝‍🧑 User Side
- **Get Started Page** → Choose:
  - **Request Blood** – Fill in your name, phone number, and address  
  - **Donate Blood** – Register as a donor with your contact details  
- Submissions are saved in **Firebase Realtime Database** along with the user’s **IP address**

### 🔑 Admin Side
- **Login-protected admin panel**  
- **Dashboard** with real-time requests and donor submissions  
- Data synced directly from Firebase  

### 💬 Telegram Mini App
- Available as [@Bloodatmbot](https://t.me/Bloodatmbot)  
- Request or donate blood directly inside Telegram  
- Runs on Telegram’s **WebApp API**, with the same functionality as the web app  

---

## 🛠 Tech Stack

- **Frontend**: [React](https://react.dev/)  
- **Language**: [TypeScript](https://www.typescriptlang.org/)  
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)  
- **Database & Auth**: [Firebase](https://firebase.google.com/)  
- **Hosting**: [Netlify](https://www.netlify.com/)  
- **Integration**: [Telegram WebApp API](https://core.telegram.org/bots/webapps)  

---

## 🚀 Getting Started

### Web App
1. Visit [BloodATM](https://bloodatm.netlify.app/)  
2. Click **Get Started**  
3. Choose **Request Blood** or **Donate Blood** and submit your details  
4. Admin logs in to manage requests  

### Telegram Mini App
1. Open Telegram and search for **[@Bloodatmbot](https://t.me/Bloodatmbot)**  
2. Tap **Start App** to launch the mini app  
3. Perform the same actions—request or donate blood within Telegram  

---

## 📌 Roadmap
- Push notifications in Telegram for new requests/donations  
- Search & filter submissions by **blood group** and **location**  
- **Google Maps integration** for nearby donor matching  
- Multi-admin support with role-based permissions  

---

## 🔒 Privacy & Security
- User data (Name, Phone, Address, IP) stored securely in Firebase  
- Admin panel is login-protected  
- Telegram Mini App runs client-side using Telegram’s secure API  

---

⭐ If you find this project useful, please **star this repo**!