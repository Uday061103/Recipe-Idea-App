# 🍴 Quick Recipe Ideas

A simple and interactive recipe finder app for busy professionals.  
Search recipes by ingredient, view random meal ideas, and explore detailed instructions in a clean UI.  

Built with **React (Vite) + TailwindCSS**, fetching data from [TheMealDB API](https://www.themealdb.com).  

---

## 🚀 Features
- 🔍 **Search by Ingredient** (e.g., “chicken”, “tomato”).  
- 🎲 **Random Recipes** on homepage & when clicking the header.  
- 📖 **Detailed Recipe Modal** with category, origin, and instructions.  
- 🎨 **Modern UI** with TailwindCSS (responsive & mobile-friendly).  
- ⚡ **Fast & Lightweight** (Vite build).  
- 🚫 **Error Handling** → shows friendly messages if no recipes found.  

---

## 📂 Project Structure
```
src/
 ├── components/
 │   ├── Header.jsx
 │   ├── SearchBar.jsx
 │   ├── RecipeCard.jsx
 │   └── RecipeModal.jsx
 ├── pages/
 │   └── Home.jsx
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

---

## 🛠️ Tech Stack
- **Frontend:** React + Vite  
- **Styling:** TailwindCSS  
- **Data:** TheMealDB API  
- **Deployment:** Netlify (or CodeSandbox / Vercel)  

---

## 📦 Setup & Run Locally
1. Clone the repo:
   ```bash
   git clone https://github.com/YOUR_USERNAME/recipe-ideas-app.git
   cd recipe-ideas-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run in dev mode:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

---

## 🌍 Deployment
Deployed live at:  
👉 (https://8vgtts-5173.csb.app/)  

Repo hosted at:  
👉 [**GitHub Repo**](https://github.com/Uday061103/Recipe-Idea-App)  

---

## 🎥 Video Demonstration
👉 [**Video Link (Google Drive / YouTube)**](https://drive.google.com/file/d/1Ndf5w-2R17y3lJEgWn3F3JO3WHNtG2qK/view?usp=sharing)  

---

## 🤖 AI Usage
This project was developed with the help of **ChatGPT** (LLM).  
I used ChatGPT to:  
- Brainstorm folder structure & component design.  
- Fix Tailwind setup issues.  
- Improve UI styling.  
- Add random recipe + search logic.  

Then I customized, structured, and deployed the app myself.  

👉 Full ChatGPT conversation: [**Link**](https://chatgpt.com/share/68b87e90-9f58-8005-9393-dd4e64c958c8)  

---

## ⚠️ Disclaimer
This app uses the free **TheMealDB API**, which has a limited recipe collection. Results may vary in accuracy. In a real-world app, more robust APIs (e.g., Spoonacular, Edamam) could be used.  
