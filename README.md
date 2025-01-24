<h1> Project Name: Gemini_clone </h1>
 <p>A project utilizing Gemini API for text generation, summarization, and chatbot functionality.</p>
 
<h2>Table of Contents</h2>
  <ul>
    <li><a href="#overview">Overview</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#tech-stack">Tech Stack</a></li>
    <li><a href="#setup-instructions">Setup Instructions</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#environment-variables">Environment Variables</a></li>
        <li><a href="#run-locally">Run Locally</a></li>
      </ul>
    </li>
    <li><a href="#folder-structure">Folder Structure</a></li>
    <li><a href="#api-endpoints">API Endpoints</a></li>
    <li><a href="#usage-instructions">Usage Instructions</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ul>
  
# Overview

* This is a React-Node.js-based web application that leverages the Gemini API for AI-powered functionality.
* Users can perform the following actions:

  Generate paragraphs.
  
  Summarize text.
  
  Interact with an AI chatbot.
  
* The app features JWT-based authentication to ensure security and integrates with MongoDB for managing user data.
* The user interface is built with Material-UI for a modern and responsive design.

  
  
![image](https://github.com/user-attachments/assets/1f983e2e-ae18-43d5-ae8e-e9844e84e196)

# Features

* Secure User Authentication:
    * Passwords are hashed using bcrypt.
    * Sessions are managed with JSON Web Tokens (JWT), including token refresh functionality.
* AI-Powered Functionalities (via Gemini API):
   * Paragraph generation.
   * Text summarization.
   * AI chatbot interaction.
* Modern UI:
   * Built with Material-UI.
* Cookie-Based Session Management:
   * Keeps users logged in until cookies are cleared.
* Middleware Protection:
   * Ensures only authenticated users can access AI features.
* Concurrent Development:
   * The concurrently module allows running both the React frontend and Node.js backend simultaneously.


# Tech Stack
  * Frontend:
     * React.js
     * Material-UI
  * Backend:
     * Node.js
     * Express.js
  * Database:
     * MongoDB
  * Other Tools:
     * Gemini API
     * Axios
     * dotenv
     * bcrypt.js
     * cookie-parser
     * cors
     * JWT

# Setup Instructions
 * Prerequisites:
   
   Ensure the following are installed on your system:
    * Node.js
    * npm or yarn
    * MongoDB

  * Environment Variables

     Create a .env file in the root directory with the following structure:
  
        PORT=8080
        DEV_MOD=development
        MONGO_URI="your connection string ..................mongodb.net/chatgpt"
        JWT_ACCESS_SECRET=your_access_secret
        JWT_REFRESH_SECRET=your_refresh_secret
        JWT_ACCESS_EXPIREIN=3000000
        JWT_REFRESH_EXPIREIN=1500000
        GEMINI_API_KEY=your_gemini_api_key

  * Run Locally
    
    * Clone the repository:

           git clone [https://github.com/your-repository-url.git](https://github.com/rajtsi/Gemini_clone.git)
    
    * Install dependencies:
   
      
      Install backend dependencies
      
           npm install

      Install frontend dependencies
      
             cd react_app
             npm install

    * Run the application:

        To run the backend server:


           npm run server
        To run the frontend:

           npm run react_app
      
      To run both together:

           npm run dev
    * Open your browser and visit http://localhost:3000.


 # Folder Structure

       root/
      ├── config/          # Configuration files (e.g., database connection)
      ├── controllers/     # Backend logic for handling requests
      ├── middleware/      # Middleware functions for request handling
      ├── models/          # Mongoose models for MongoDB
      ├── react_app/       # React.js frontend
      ├── routes/          # API routes
      ├── utils/           # Utility functions
      ├── .gitignore       # Git ignored files
      ├── package.json     # Backend package file
      ├── package-lock.json# Backend dependency lock file
      ├── server.js        # Backend entry point


  
# API Endpoints

  Below is an overview of the available API endpoints:

 * User Authentication
   
    Register a new user.
   
       POST /api/v1/auth/register
   
    Log in an existing user.
   
       POST /api/v1/auth/login
   Verifies if a user is still logged in.
   
    This endpoint is used to determine whether to display "Logout" and the
    user's profile username or "Register/Login" in the navigation bar.

       POST /api/v1/auth/loggedinCheck
   
    
 * AI Features

    Generate a paragraph.
   
       POST /api/v1/request/para
   
    Summarize text.
   
       POST /api/v1/request/summary
   
    Interact with the chatbot.

       POST /api/v1/request/chatbot



# Usage Instructions

 * User Registration and Login:

   * Register a new user with a unique email and password.
     ![image](https://github.com/user-attachments/assets/d6d403a3-293e-4632-838f-0caf826078c0)

   * Log in to access AI-powered functionalities.
   ![image](https://github.com/user-attachments/assets/9ec67cce-1596-4f80-8ada-d8cb17703e2f)

   * After Login Your Username will be shown On Right Top and now you can use Features
     ![image](https://github.com/user-attachments/assets/67536e08-1e3e-4437-9d1e-cef9c554b7d1)


* AI Features:

   * Paragraph Generation: Input a topic and get a generated paragraph.
     ![image](https://github.com/user-attachments/assets/dd81cc9e-bb1a-4207-9a7d-efdfd6a32807)

   * Text Summarization: Paste a long text to receive a summarized version.
     ![image](https://github.com/user-attachments/assets/c40ad5e9-0495-4512-97c0-2609c7f71f69)

   * Chatbot: Enter queries to interact with the AI-powered chatbot.
     ![image](https://github.com/user-attachments/assets/8e8ceb71-1de6-411c-952f-5ef8347e4278)

     
* Session Management:

  * Stay logged in as long as cookies are not cleared. The app handles token refreshes automatically.
 

# Acknowledgements
   * Gemini API for AI-powered responses.
   * Material-UI for front-end design.
   * MongoDB for database support.
