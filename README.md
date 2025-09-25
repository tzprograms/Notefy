# 📝 Notefy  

> A **minimalistic note-taking web app** with authentication, rate limiting, and a modern UI.  
> 🌍 [Live Demo](https://notefy-i29b.onrender.com)  

---

## 📸 Screenshots  

<img width="1898" height="846" alt="image" src="https://github.com/user-attachments/assets/15d54782-0229-4a1c-8dea-1ced6853bdb9" />
<img width="1362" height="733" alt="image" src="https://github.com/user-attachments/assets/5c4b9b8c-9c1d-4c29-96e2-1c055a4ea7c5" />
<img width="1918" height="852" alt="image" src="https://github.com/user-attachments/assets/537e6c61-f877-4bf3-b52b-902439dc0d03" />
<img width="1422" height="748" alt="image" src="https://github.com/user-attachments/assets/62086055-b87d-4285-a57c-3c44bc511815" />
<img width="1167" height="632" alt="image" src="https://github.com/user-attachments/assets/7de8653b-0953-4220-a12f-93194495c421" />
<img width="1918" height="866" alt="image" src="https://github.com/user-attachments/assets/6913a46e-fa1f-4b46-8419-db8f8bd30dce" />
<img width="1232" height="906" alt="image" src="https://github.com/user-attachments/assets/c60f24f1-25ea-4d2c-89a9-2ec9f7a4d0bc" />


---

## ✨ Features  

- 🔐 **Authentication**  
  - Google OAuth 2.0 Sign-In  
  - JWT Token-based session handling  

- 📖 **Manage Your Notes**  
  - Create, Read, Update, and Delete notes  
  - MongoDB backend with Mongoose  

- ⚡ **Rate Limiting (per user)**  
  - Implemented with **Upstash Redis**  
  - Prevents abuse by limiting excessive requests  

- 🎨 **Modern UI/UX**  
  - Built with **React + Vite**  
  - Styled using **TailwindCSS + DaisyUI**  
  - Toast notifications using **react-hot-toast**  

- 🌐 **Backend API**  
  - Built with **Node.js + Express**  
  - Endpoints:  
    - `POST /auth/google` → Login  
    - `GET /notes` → Fetch notes  
    - `POST /notes` → Create note  
    - `PUT /notes/:id` → Update note  
    - `DELETE /notes/:id` → Delete note  

---

## 🛠️ Tech Stack  

### Frontend  
- React (Vite)  
- TailwindCSS + DaisyUI  
- React Router  
- Axios  
- React Hot Toast  

### Backend  
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- JWT Authentication  
- Upstash Redis (Rate Limiting)  

---

## ⚙️ Installation & Setup  

1. **Clone the repo**  
   ```bash
   git clone https://github.com/yourusername/notefy.git
   cd notefy

2. **Build the application**
   ```bash
   npm run build
   
2. **Run the server**
   ```bash
   npm run start
