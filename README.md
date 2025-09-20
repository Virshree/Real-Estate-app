# Setup instructions (how to run the app)
# React + Vite Project

This project is built using **React** with **Vite** for fast development and optimized builds.

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/Virshree/Real-Estate-app.git
cd real-estate-app 

```
### 2. Install Dependencies
```bash

npm install
# or
yarn install
```
### 3. Run Development Server

```bash
npm run dev
# or
yarn dev

## By default, Vite will run on:👉 http://localhost:5173/

```
### 📦 Tech Stack

React 18

Vite

Tailwind CSS

Firebase (used for auth/storage)

React Router DOM (for navigation)


## 🔥 Firebase Setup

This project uses **Firebase** for authentication 

Follow these steps to set up Firebase:

### 1. Create a Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/).  
2. Click **Add Project** and follow the setup steps.  
3. After project creation, click on **</> Add App** (Web app) and register your app.  

### 2. Get Firebase Config
After registering the app, Firebase will give you a config object like this:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456",
};
```
### 3.Install Firebase
-  In your project, install the Firebase SDK:
```bash

npm install firebase
# or
yarn add firebase

```
### 4.Create Firebase Config File
- Inside your src/services/firebaseConfig.js file:

// src/services/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";   // if using Firestore
// import { getStorage } from "firebase/storage";       // if using Storage

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const storage = getStorage(app);
