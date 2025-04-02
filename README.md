# OTP Login App

## Overview
This project is a **React Native OTP Login App** with a modern UI design. It features an OTP input field for user authentication and background images to enhance the UI experience.

## Features
- OTP-based login authentication
- Automatic focus on the next OTP input field
- Backspace handling to move to the previous input field
- Styled UI with image backgrounds
- Mobile-friendly responsive design

## Tech Stack
- **React Native** – For building the mobile application
- **JavaScript/TypeScript** – For programming logic
- **React Hooks** (`useState`, `useRef`) – For state management and handling input focus

## Installation
To run this project locally, follow these steps:

### 1. Clone the Repository
```sh
git clone https://github.com/your-username/your-repo.git
```

### 2. Install Dependencies
```sh
npm install
# or
yarn install
```

## Project Structure
```
├── src/
│   ├── components/
│   │   ├── LoginOTPForm.tsx  # OTP input form component
│   ├── assets/
│   │   ├── images/
│   │   │   ├── BG1.png       # Background image 1
│   │   │   ├── BG2.png       # Background image 2
│   ├── screens/
│   │   ├── index.tsx         # Main screen with background and OTP form
│   ├── styles/
│   │   ├── styles.ts         # Centralized styles for the app
│   ├── App.tsx               # Root file
│   ├── package.json          # Project dependencies
│   ├── README.md             # Documentation
```

## Usage
1. Open the app, and you will see an OTP input field.
2. Enter a 4-digit OTP.
3. The input automatically moves to the next field when a digit is entered.
4. Press **Backspace** to move back if needed.
5. The OTP is used for authentication (backend implementation needed).

