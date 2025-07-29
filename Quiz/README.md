# Quiz Master - Interactive Quiz Website

A modern, responsive quiz application built with HTML, CSS, and JavaScript.

## 🌟 Features

- **6 Quiz Categories**: General Knowledge, Science, History, Geography, Sports, Entertainment
- **Interactive UI**: Beautiful animations and smooth transitions
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Real-time Scoring**: Track your progress as you answer questions
- **Performance Feedback**: Get personalized messages based on your score
- **Keyboard Navigation**: Use number keys (1-4) and Enter for navigation
- **Confetti Celebration**: Special effects for perfect scores!

## 🚀 Quick Start

### Option 1: Local Development
1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start taking quizzes!

### Option 2: Live Server (Recommended for Development)
1. Install Node.js from [nodejs.org](https://nodejs.org/)
2. Install Live Server globally:
   ```bash
   npm install -g live-server
   ```
3. Navigate to the project directory and run:
   ```bash
   live-server
   ```
4. The website will open automatically in your browser

## 🌐 Deployment Options

### 1. GitHub Pages (Free)
1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select "Deploy from a branch" and choose "main"
5. Your site will be available at `https://yourusername.github.io/repository-name`

### 2. Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login with your GitHub account
3. Click "New site from Git"
4. Select your repository
5. Deploy! Your site will get a random URL (you can customize it)

### 3. Vercel (Free)
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with your GitHub account
3. Click "New Project"
4. Import your repository
5. Deploy! Your site will be live instantly

### 4. Traditional Web Hosting
1. Upload all files to your web hosting provider
2. Ensure `index.html` is in the root directory
3. Your site will be available at your domain

## 📁 Project Structure

```
quiz-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🛠️ Customization

### Adding New Quiz Categories
1. Open `script.js`
2. Add a new category object to the `quizData` object
3. Add a corresponding category card in `index.html`

### Modifying Questions
1. Edit the questions array in `script.js`
2. Each question should have:
   - `question`: The question text
   - `options`: Array of 4 answer choices
   - `correct`: Index of the correct answer (0-3)

### Styling Changes
1. Edit `styles.css` to modify colors, fonts, and layout
2. The design uses CSS custom properties for easy theming

## 🎨 Design Features

- **Glass Morphism**: Modern translucent effects
- **Gradient Backgrounds**: Beautiful color transitions
- **Smooth Animations**: CSS transitions and keyframes
- **Responsive Grid**: Adapts to any screen size
- **Interactive Elements**: Hover effects and feedback

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 🔧 Technical Details

- **No Dependencies**: Pure HTML, CSS, and JavaScript
- **No Build Process**: Ready to deploy immediately
- **Progressive Enhancement**: Works without JavaScript (basic functionality)
- **Accessibility**: Keyboard navigation and screen reader friendly

## 🚀 Performance

- **Lightweight**: Under 100KB total
- **Fast Loading**: Optimized assets and minimal dependencies
- **Caching Friendly**: Static files work well with CDNs

## 📞 Support

If you encounter any issues or have questions:
1. Check the browser console for errors
2. Ensure all files are in the same directory
3. Try a different browser
4. Verify your web server configuration

## 📄 License

This project is open source and available under the MIT License.

---

**Happy Quizzing! 🎉** 