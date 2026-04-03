
# Syllabus
    - Installing Node
    - Creating React App (cra, vite)
    - Folder Structure
    - Fragments - <> </>
    - Components
        - Functional Components
    - Props
        - Passing
        - Default Props
    - List and keys
    - React Router DOM
    - Hooks
        - useState
        - useEffect
        - useRef
        - useContext/ContextAPI




# Creating a React App
    (old)
    > npx create-react-app <app-name>
    > npm start

    (latest)
    > npm create vite@latest
    > npm run dev
    Setup:
    > cd 
    > npm i
    > npm run dev


# Task 1:

    Create a React App
    > npx create-react-app <app-name>

    Create 4 Components in src/components
    - Home.js
    - About.js
    - Contact.js
    - Login.js

    Render this in src/App.js


# Installing tailwind@4 in react 

    > npm install tailwindcss @tailwindcss/vite

    - vite.config.js

        import { defineConfig } from 'vite'
        import react from '@vitejs/plugin-react'
        import tailwindcss from '@tailwindcss/vite'

        // https://vite.dev/config/
        export default defineConfig({
        plugins: [react(), tailwindcss()],
        })


    - index.css
        @import "tailwindcss";

