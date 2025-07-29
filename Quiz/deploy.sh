#!/bin/bash

# Quiz Master Website Deployment Script
# This script helps you deploy your quiz website to various platforms

echo "🚀 Quiz Master Website Deployment Script"
echo "========================================"

# Check if files exist
if [ ! -f "index.html" ] || [ ! -f "styles.css" ] || [ ! -f "script.js" ]; then
    echo "❌ Error: Required files (index.html, styles.css, script.js) not found!"
    echo "Please run this script from the project directory."
    exit 1
fi

echo "✅ All required files found!"

# Function to deploy to GitHub Pages
deploy_github_pages() {
    echo "📦 Deploying to GitHub Pages..."
    
    if [ ! -d ".git" ]; then
        echo "Initializing Git repository..."
        git init
        git add .
        git commit -m "Initial commit - Quiz Master website"
        echo "⚠️  Please create a GitHub repository and run:"
        echo "   git remote add origin https://github.com/YOUR_USERNAME/quiz-master.git"
        echo "   git push -u origin main"
        echo "   Then enable GitHub Pages in repository settings."
    else
        echo "Git repository already exists. Pushing changes..."
        git add .
        git commit -m "Update Quiz Master website"
        git push
    fi
}

# Function to deploy to Netlify
deploy_netlify() {
    echo "🌐 Deploying to Netlify..."
    
    if command -v netlify &> /dev/null; then
        echo "Netlify CLI found. Deploying..."
        netlify deploy --prod --dir=.
    else
        echo "⚠️  Netlify CLI not found. Please:"
        echo "   1. Install Netlify CLI: npm install -g netlify-cli"
        echo "   2. Login: netlify login"
        echo "   3. Deploy: netlify deploy --prod --dir=."
    fi
}

# Function to deploy to Vercel
deploy_vercel() {
    echo "⚡ Deploying to Vercel..."
    
    if command -v vercel &> /dev/null; then
        echo "Vercel CLI found. Deploying..."
        vercel --prod
    else
        echo "⚠️  Vercel CLI not found. Please:"
        echo "   1. Install Vercel CLI: npm install -g vercel"
        echo "   2. Login: vercel login"
        echo "   3. Deploy: vercel --prod"
    fi
}

# Function to create deployment package
create_package() {
    echo "📁 Creating deployment package..."
    
    mkdir -p quiz-master-deploy
    cp index.html quiz-master-deploy/
    cp styles.css quiz-master-deploy/
    cp script.js quiz-master-deploy/
    cp README.md quiz-master-deploy/
    
    echo "✅ Deployment package created in 'quiz-master-deploy/' directory"
    echo "📤 You can now upload this folder to any web hosting provider"
}

# Function to start local development server
start_local() {
    echo "🏠 Starting local development server..."
    
    if command -v live-server &> /dev/null; then
        echo "Starting Live Server..."
        live-server --port=3000 --open=/
    elif command -v python3 &> /dev/null; then
        echo "Starting Python HTTP server..."
        python3 -m http.server 8000
        echo "🌐 Server running at http://localhost:8000"
    elif command -v python &> /dev/null; then
        echo "Starting Python HTTP server..."
        python -m SimpleHTTPServer 8000
        echo "🌐 Server running at http://localhost:8000"
    else
        echo "❌ No local server found. Please install one of:"
        echo "   - live-server: npm install -g live-server"
        echo "   - Python 3: python3 -m http.server 8000"
        echo "   - Python 2: python -m SimpleHTTPServer 8000"
    fi
}

# Main menu
while true; do
    echo ""
    echo "Choose deployment option:"
    echo "1) Deploy to GitHub Pages"
    echo "2) Deploy to Netlify"
    echo "3) Deploy to Vercel"
    echo "4) Create deployment package"
    echo "5) Start local development server"
    echo "6) Exit"
    echo ""
    read -p "Enter your choice (1-6): " choice
    
    case $choice in
        1)
            deploy_github_pages
            ;;
        2)
            deploy_netlify
            ;;
        3)
            deploy_vercel
            ;;
        4)
            create_package
            ;;
        5)
            start_local
            ;;
        6)
            echo "👋 Goodbye!"
            exit 0
            ;;
        *)
            echo "❌ Invalid choice. Please enter 1-6."
            ;;
    esac
    
    echo ""
    read -p "Press Enter to continue..."
done 