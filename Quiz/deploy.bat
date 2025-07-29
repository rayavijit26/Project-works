@echo off
title Quiz Master Website Deployment Script

echo 🚀 Quiz Master Website Deployment Script
echo ========================================

REM Check if files exist
if not exist "index.html" (
    echo ❌ Error: index.html not found!
    echo Please run this script from the project directory.
    pause
    exit /b 1
)
if not exist "styles.css" (
    echo ❌ Error: styles.css not found!
    echo Please run this script from the project directory.
    pause
    exit /b 1
)
if not exist "script.js" (
    echo ❌ Error: script.js not found!
    echo Please run this script from the project directory.
    pause
    exit /b 1
)

echo ✅ All required files found!

:menu
echo.
echo Choose deployment option:
echo 1) Deploy to GitHub Pages
echo 2) Deploy to Netlify
echo 3) Deploy to Vercel
echo 4) Create deployment package
echo 5) Start local development server
echo 6) Exit
echo.
set /p choice="Enter your choice (1-6): "

if "%choice%"=="1" goto github
if "%choice%"=="2" goto netlify
if "%choice%"=="3" goto vercel
if "%choice%"=="4" goto package
if "%choice%"=="5" goto local
if "%choice%"=="6" goto exit
echo ❌ Invalid choice. Please enter 1-6.
goto menu

:github
echo 📦 Deploying to GitHub Pages...
if not exist ".git" (
    echo Initializing Git repository...
    git init
    git add .
    git commit -m "Initial commit - Quiz Master website"
    echo ⚠️  Please create a GitHub repository and run:
    echo    git remote add origin https://github.com/YOUR_USERNAME/quiz-master.git
    echo    git push -u origin main
    echo    Then enable GitHub Pages in repository settings.
) else (
    echo Git repository already exists. Pushing changes...
    git add .
    git commit -m "Update Quiz Master website"
    git push
)
goto end

:netlify
echo 🌐 Deploying to Netlify...
netlify --version >nul 2>&1
if %errorlevel% equ 0 (
    echo Netlify CLI found. Deploying...
    netlify deploy --prod --dir=.
) else (
    echo ⚠️  Netlify CLI not found. Please:
    echo    1. Install Netlify CLI: npm install -g netlify-cli
    echo    2. Login: netlify login
    echo    3. Deploy: netlify deploy --prod --dir=.
)
goto end

:vercel
echo ⚡ Deploying to Vercel...
vercel --version >nul 2>&1
if %errorlevel% equ 0 (
    echo Vercel CLI found. Deploying...
    vercel --prod
) else (
    echo ⚠️  Vercel CLI not found. Please:
    echo    1. Install Vercel CLI: npm install -g vercel
    echo    2. Login: vercel login
    echo    3. Deploy: vercel --prod
)
goto end

:package
echo 📁 Creating deployment package...
if not exist "quiz-master-deploy" mkdir quiz-master-deploy
copy index.html quiz-master-deploy\
copy styles.css quiz-master-deploy\
copy script.js quiz-master-deploy\
copy README.md quiz-master-deploy\
echo ✅ Deployment package created in 'quiz-master-deploy\' directory
echo 📤 You can now upload this folder to any web hosting provider
goto end

:local
echo 🏠 Starting local development server...
live-server --version >nul 2>&1
if %errorlevel% equ 0 (
    echo Starting Live Server...
    live-server --port=3000 --open=/
) else (
    echo ⚠️  Live Server not found. Please:
    echo    1. Install Live Server: npm install -g live-server
    echo    2. Run: live-server --port=3000 --open=/
    echo.
    echo Alternative: Open index.html directly in your browser
    start index.html
)
goto end

:end
echo.
pause
goto menu

:exit
echo 👋 Goodbye!
pause
exit /b 0 