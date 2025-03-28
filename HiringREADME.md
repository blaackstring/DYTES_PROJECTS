# Hiring Test for Full Stack Developer Intern – FakeSnapchatGenerator

Welcome to the hiring test for the Full Stack Developer Intern role at DYTES LTD. In this test, you will build the **FakeSnapchatGenerator** – a full stack web application that lets users create customizable fake Snapchat-style chat screenshots. This test is designed to evaluate your ability to architect, implement, and deploy a comprehensive solution using modern web technologies and best practices.

---

## NOTE

- **Frontend:** You can use **React** or **Next.js**.
- **Backend:** You can use **Node.js** (or PHP) to develop RESTful APIs.
- **Database:** Choose any database (e.g., MongoDB, PostgreSQL, MySQL) for storing user information and (optionally) chat generation history.
- **Authentication:** Implement user authentication using JWT, sessions, or another secure method.
- **Caching (Optional):** Incorporate caching (e.g., Redis) to improve performance.
- **Deployment:** Deploy your application on any platform of your choice (e.g., Vercel, Heroku, Netlify, AWS).
- **Submission:** Provide both the live application URL and a publicly accessible GitHub repository link.

---

## Objective

The objective of this test is to evaluate your ability to:

- Build a full stack web application with user authentication (signup, login, password reset).
- Develop a FakeSnapchatGenerator that enables users to:
  - Customize a chat interface mimicking Snapchat (or any chat-style layout).
  - Manage participants (add, rename, modify with unique names, colors, and icons).
  - Dynamically add messages, each showing a vertical colored indicator (based on the sender’s chosen color).
  - Capture the final chat view as a screenshot (using a library like html2canvas) and download it as a PNG.
- Implement a clean, modular, and well-documented codebase following industry best practices.
- Demonstrate proper use of version control (Git) with clear, atomic commit messages.
- Optionally integrate caching to enhance performance.

---

## Task Requirements

### 1. User Authentication

- **Signup:** Allow users to create an account.
- **Login:** Implement user login functionality.
- **Password Reset:** Provide a mechanism for users to reset their password if forgotten.
- **Security:** Secure all API endpoints using JWT, sessions, or another method of your choice.

### 2. FakeSnapchatGenerator Application

- **Live Default Conversation:**  
  When the user first opens the application, display a pre-populated chat (e.g., sample messages from “Me” and “Jack”).
- **Chat Customization:**
  - **Chat Settings:**  
    Allow users to customize the direct message header (e.g., “Direct message with: …”) and the chat day label (e.g., “TODAY”).
  - **Participant Management:**  
    - Enable users to add unlimited participants with unique IDs.
    - Allow users to edit each participant’s name, color (which appears as a vertical bar next to their messages), and an optional icon.
  - **Message Management:**  
    - Provide a form for users to select a sender from a dropdown (populated from the list of participants) and to add messages dynamically.
    - Display each message with the sender’s name, text, and corresponding vertical color indicator.
- **Screenshot Functionality:**  
  - Include a “Download” button that triggers screenshot capture (using html2canvas or a similar library).
  - Convert the chat preview into a PNG image and allow the user to download it.

### 3. API & Backend Development (if applicable)

- **REST API:**  
  Develop endpoints to handle:
  - User registration, login, and password reset.
  - (Optional) Saving or retrieving user-specific chat customization history.
- **Input Validation & Error Handling:**  
  Ensure all API endpoints validate user inputs and handle errors gracefully.
- **Documentation:**  
  Document your API endpoints clearly.

### 4. Deployment

- Deploy your application on any platform (e.g., Vercel, Heroku, Netlify, AWS).
- Provide a working URL for the deployed application.
- Ensure your GitHub repository is public.

### 5. Git & Version Control

- Use Git for version control.
- Follow conventional commit messages, for example:
  - `feat: Add user authentication endpoints`
  - `fix: Correct participant management`
  - `docs: Update README with API usage examples`
- Ensure commits are atomic and commit messages are clear.

### 6. Documentation

Write a detailed README (like this one) that includes:
- Installation and setup instructions.
- API usage examples (if backend endpoints are implemented).
- Deployment details.
- Contribution guidelines.

Ensure the documentation is well-structured and easy to follow.

---

## Reference

For inspiration on the expected functionality and design, please explore the following website:

[Fake Snapchat Chat Generator Example](https://prankshit.com/fake-snapchat-chat-generator.php)

This reference will help you understand how the chat customization and screenshot functionalities should work.

---

## Evaluation Criteria

You will be evaluated on the following:

- **Code Quality:**  
  Maintain clean, modular code following ES6 (or your framework's style guide) best practices.
- **Functionality:**  
  Ensure that user authentication, chat customization, message management, and screenshot download work as expected.
- **Documentation:**  
  Provide a comprehensive and clear README.
- **Testing:**  
  Include unit tests covering key functionalities.
- **Deployment:**  
  Successfully deploy the application and provide the working URL.
- **Git Practices:**  
  Use clear, conventional commit messages and maintain a well-organized repository.

---

## Submission Instructions

1. **Fork the Repository:**  
   Fork the starter repository (if provided) and complete your solution.
2. **Deployment:**  
   Deploy your application and verify that it is accessible.
3. **Repository Link:**  
   Ensure your GitHub repository is public.
4. **Issue/PR:**  
   Open an issue or pull request in the repository with the appropriate tag (e.g., `full-stack`, `mern`, or `nextjs`).
5. **Notification:**  
   Tag `@iamahmarfaraz` in the issue/PR for review.
6. **Documentation:**  
   Include the link to your live deployment and GitHub repository in your submission.

---

Good luck! We look forward to reviewing your submission.

---