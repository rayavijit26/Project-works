// Quiz Data
const quizData = {
    general: {
        title: "General Knowledge",
        questions: [
            {
                question: "What is the capital of France?",
                options: ["London", "Berlin", "Paris", "Madrid"],
                correct: 2
            },
            {
                question: "Which planet is known as the Red Planet?",
                options: ["Venus", "Mars", "Jupiter", "Saturn"],
                correct: 1
            },
            {
                question: "What is the largest ocean on Earth?",
                options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                correct: 3
            },
            {
                question: "Who painted the Mona Lisa?",
                options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                correct: 2
            },
            {
                question: "What is the chemical symbol for gold?",
                options: ["Ag", "Au", "Fe", "Cu"],
                correct: 1
            },
            {
                question: "Which year did World War II end?",
                options: ["1943", "1944", "1945", "1946"],
                correct: 2
            },
            {
                question: "What is the largest mammal in the world?",
                options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
                correct: 1
            },
            {
                question: "Which country is home to the kangaroo?",
                options: ["New Zealand", "South Africa", "Australia", "India"],
                correct: 2
            },
            {
                question: "What is the main component of the sun?",
                options: ["Liquid Lava", "Molten Iron", "Hydrogen Gas", "Solid Rock"],
                correct: 2
            },
            {
                question: "How many continents are there on Earth?",
                options: ["5", "6", "7", "8"],
                correct: 2
            }
        ]
    },
    science: {
        title: "Science",
        questions: [
            {
                question: "What is the hardest natural substance on Earth?",
                options: ["Steel", "Iron", "Diamond", "Granite"],
                correct: 2
            },
            {
                question: "What is the chemical formula for water?",
                options: ["H2O", "CO2", "O2", "N2"],
                correct: 0
            },
            {
                question: "Which gas do plants absorb from the atmosphere?",
                options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
                correct: 2
            },
            {
                question: "What is the smallest unit of life?",
                options: ["Atom", "Molecule", "Cell", "Tissue"],
                correct: 2
            },
            {
                question: "What is the speed of light?",
                options: ["299,792 km/s", "199,792 km/s", "399,792 km/s", "499,792 km/s"],
                correct: 0
            },
            {
                question: "Which element has the chemical symbol 'O'?",
                options: ["Osmium", "Oxygen", "Oganesson", "Osmium"],
                correct: 1
            },
            {
                question: "What is the study of fossils called?",
                options: ["Archaeology", "Paleontology", "Geology", "Biology"],
                correct: 1
            },
            {
                question: "What is the largest organ in the human body?",
                options: ["Heart", "Brain", "Liver", "Skin"],
                correct: 3
            },
            {
                question: "Which planet has the most moons?",
                options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
                correct: 1
            },
            {
                question: "What is the atomic number of carbon?",
                options: ["4", "6", "8", "12"],
                correct: 1
            }
        ]
    },
    history: {
        title: "History",
        questions: [
            {
                question: "In which year did Christopher Columbus discover America?",
                options: ["1492", "1498", "1500", "1502"],
                correct: 0
            },
            {
                question: "Who was the first President of the United States?",
                options: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
                correct: 2
            },
            {
                question: "Which ancient wonder was located in Alexandria?",
                options: ["Colossus of Rhodes", "Lighthouse of Alexandria", "Hanging Gardens", "Temple of Artemis"],
                correct: 1
            },
            {
                question: "What year did World War I begin?",
                options: ["1914", "1915", "1916", "1917"],
                correct: 0
            },
            {
                question: "Who was the first Emperor of Rome?",
                options: ["Julius Caesar", "Augustus", "Nero", "Caligula"],
                correct: 1
            },
            {
                question: "Which civilization built the Great Wall of China?",
                options: ["Mongol Empire", "Qin Dynasty", "Han Dynasty", "Ming Dynasty"],
                correct: 1
            },
            {
                question: "What year did the Berlin Wall fall?",
                options: ["1987", "1989", "1991", "1993"],
                correct: 1
            },
            {
                question: "Who was the first woman to win a Nobel Prize?",
                options: ["Marie Curie", "Mother Teresa", "Jane Addams", "Pearl S. Buck"],
                correct: 0
            },
            {
                question: "Which empire was ruled by Genghis Khan?",
                options: ["Ottoman Empire", "Mongol Empire", "Persian Empire", "Roman Empire"],
                correct: 1
            },
            {
                question: "What year did the Titanic sink?",
                options: ["1910", "1912", "1914", "1916"],
                correct: 1
            }
        ]
    },
    geography: {
        title: "Geography",
        questions: [
            {
                question: "What is the largest country in the world by land area?",
                options: ["China", "United States", "Canada", "Russia"],
                correct: 3
            },
            {
                question: "Which is the longest river in the world?",
                options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
                correct: 1
            },
            {
                question: "What is the capital of Japan?",
                options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
                correct: 2
            },
            {
                question: "Which mountain range runs through South America?",
                options: ["Rocky Mountains", "Alps", "Himalayas", "Andes"],
                correct: 3
            },
            {
                question: "What is the largest desert in the world?",
                options: ["Gobi Desert", "Sahara Desert", "Arabian Desert", "Antarctic Desert"],
                correct: 3
            },
            {
                question: "Which ocean is the smallest?",
                options: ["Atlantic", "Indian", "Arctic", "Pacific"],
                correct: 2
            },
            {
                question: "What is the capital of Brazil?",
                options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
                correct: 2
            },
            {
                question: "Which country has the most time zones?",
                options: ["United States", "Russia", "France", "Australia"],
                correct: 1
            },
            {
                question: "What is the highest mountain in Africa?",
                options: ["Mount Kilimanjaro", "Mount Kenya", "Mount Elgon", "Mount Meru"],
                correct: 0
            },
            {
                question: "Which city is known as the 'City of Light'?",
                options: ["London", "Paris", "New York", "Tokyo"],
                correct: 1
            }
        ]
    },
    sports: {
        title: "Sports",
        questions: [
            {
                question: "Which country has won the most FIFA World Cups?",
                options: ["Germany", "Argentina", "Brazil", "Italy"],
                correct: 2
            },
            {
                question: "In which year did the first modern Olympics take place?",
                options: ["1896", "1900", "1904", "1908"],
                correct: 0
            },
            {
                question: "Which sport is known as 'The Beautiful Game'?",
                options: ["Basketball", "Tennis", "Football/Soccer", "Baseball"],
                correct: 2
            },
            {
                question: "Who is considered the greatest boxer of all time?",
                options: ["Mike Tyson", "Muhammad Ali", "Floyd Mayweather", "Manny Pacquiao"],
                correct: 1
            },
            {
                question: "How many players are on a basketball court at once?",
                options: ["8", "10", "12", "14"],
                correct: 1
            },
            {
                question: "Which country invented cricket?",
                options: ["Australia", "India", "England", "South Africa"],
                correct: 2
            },
            {
                question: "What is the national sport of Canada?",
                options: ["Ice Hockey", "Lacrosse", "Baseball", "Football"],
                correct: 1
            },
            {
                question: "Which tennis player has won the most Grand Slam titles?",
                options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"],
                correct: 0
            },
            {
                question: "In which sport would you perform a 'slam dunk'?",
                options: ["Volleyball", "Basketball", "Tennis", "Badminton"],
                correct: 1
            },
            {
                question: "Which country hosted the 2016 Summer Olympics?",
                options: ["China", "Brazil", "Russia", "United Kingdom"],
                correct: 1
            }
        ]
    },
    entertainment: {
        title: "Entertainment",
        questions: [
            {
                question: "Who played Iron Man in the Marvel Cinematic Universe?",
                options: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
                correct: 1
            },
            {
                question: "Which band released the album 'Abbey Road'?",
                options: ["The Rolling Stones", "The Beatles", "Led Zeppelin", "Pink Floyd"],
                correct: 1
            },
            {
                question: "What year did the first Star Wars movie release?",
                options: ["1975", "1977", "1979", "1981"],
                correct: 1
            },
            {
                question: "Who is known as the 'King of Pop'?",
                options: ["Elvis Presley", "Michael Jackson", "Prince", "David Bowie"],
                correct: 1
            },
            {
                question: "Which TV show features dragons and is based on George R.R. Martin's books?",
                options: ["The Walking Dead", "Breaking Bad", "Game of Thrones", "Stranger Things"],
                correct: 2
            },
            {
                question: "Who directed the movie 'Titanic'?",
                options: ["Steven Spielberg", "James Cameron", "Christopher Nolan", "Quentin Tarantino"],
                correct: 1
            },
            {
                question: "Which Disney movie features a lion cub named Simba?",
                options: ["Aladdin", "The Lion King", "Beauty and the Beast", "Mulan"],
                correct: 1
            },
            {
                question: "What is the highest-grossing movie of all time?",
                options: ["Titanic", "Avatar", "Avengers: Endgame", "Star Wars: The Force Awakens"],
                correct: 1
            },
            {
                question: "Who played the Joker in 'The Dark Knight'?",
                options: ["Jared Leto", "Heath Ledger", "Joaquin Phoenix", "Jack Nicholson"],
                correct: 1
            },
            {
                question: "Which band sang 'Bohemian Rhapsody'?",
                options: ["The Beatles", "Queen", "Led Zeppelin", "Pink Floyd"],
                correct: 1
            }
        ]
    }
};

// Global Variables
let currentQuiz = null;
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let quizCompleted = false;

// DOM Elements
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');
const categories = document.getElementById('categories');
const quizSection = document.getElementById('quiz-section');
const resultsSection = document.getElementById('results-section');
const quizTitle = document.getElementById('quiz-title');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');
const progressFill = document.getElementById('progress-fill');
const questionCounter = document.getElementById('question-counter');
const currentScore = document.getElementById('current-score');
const finalScore = document.getElementById('final-score');
const scorePercentage = document.getElementById('score-percentage');
const performanceMessage = document.getElementById('performance-message');

// Navigation Functions
function showSection(sectionId) {
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`[href="#${sectionId}"]`).classList.add('active');
}

// Navigation Event Listeners
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('href').substring(1);
        showSection(sectionId);
    });
});

// Category Functions
function showCategories() {
    categories.classList.remove('hidden');
    quizSection.classList.add('hidden');
    resultsSection.classList.add('hidden');
}

function hideCategories() {
    categories.classList.add('hidden');
}

// Quiz Functions
function startQuiz(category) {
    currentQuiz = quizData[category];
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    quizCompleted = false;
    
    quizTitle.textContent = currentQuiz.title;
    categories.classList.add('hidden');
    quizSection.classList.remove('hidden');
    resultsSection.classList.add('hidden');
    
    displayQuestion();
    updateProgress();
    updateScore();
}

function displayQuestion() {
    const question = currentQuiz.questions[currentQuestionIndex];
    questionText.textContent = question.question;
    
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(optionElement);
    });
    
    selectedAnswer = null;
    nextButton.disabled = true;
}

function selectAnswer(answerIndex) {
    if (selectedAnswer !== null) return; // Prevent multiple selections
    
    selectedAnswer = answerIndex;
    const options = optionsContainer.querySelectorAll('.option');
    
    options.forEach((option, index) => {
        option.classList.remove('selected');
        if (index === answerIndex) {
            option.classList.add('selected');
        }
    });
    
    nextButton.disabled = false;
}

function nextQuestion() {
    if (selectedAnswer === null) return;
    
    const question = currentQuiz.questions[currentQuestionIndex];
    const options = optionsContainer.querySelectorAll('.option');
    
    // Show correct/incorrect answers
    options.forEach((option, index) => {
        option.classList.remove('selected');
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === selectedAnswer && selectedAnswer !== question.correct) {
            option.classList.add('incorrect');
        }
    });
    
    // Update score
    if (selectedAnswer === question.correct) {
        score++;
        updateScore();
    }
    
    // Disable next button temporarily
    nextButton.disabled = true;
    
    // Wait 1.5 seconds before moving to next question
    setTimeout(() => {
        currentQuestionIndex++;
        
        if (currentQuestionIndex < currentQuiz.questions.length) {
            displayQuestion();
            updateProgress();
        } else {
            showResults();
        }
    }, 1500);
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100;
    progressFill.style.width = `${progress}%`;
    questionCounter.textContent = `${currentQuestionIndex + 1}/${currentQuiz.questions.length}`;
}

function updateScore() {
    currentScore.textContent = score;
}

function showResults() {
    const totalQuestions = currentQuiz.questions.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    
    finalScore.textContent = score;
    scorePercentage.textContent = `${percentage}%`;
    
    // Set performance message
    let message = '';
    if (percentage >= 90) {
        message = 'Excellent! You\'re a quiz master! 🏆';
    } else if (percentage >= 80) {
        message = 'Great job! You really know your stuff! 🌟';
    } else if (percentage >= 70) {
        message = 'Good work! Keep learning and improving! 👍';
    } else if (percentage >= 60) {
        message = 'Not bad! A bit more study and you\'ll do great! 📚';
    } else if (percentage >= 50) {
        message = 'You\'re on the right track! Keep practicing! 💪';
    } else {
        message = 'Don\'t worry! Every expert was once a beginner! 🌱';
    }
    
    performanceMessage.textContent = message;
    
    quizSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');
}

function restartQuiz() {
    if (currentQuiz) {
        startQuiz(Object.keys(quizData).find(key => quizData[key] === currentQuiz));
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    // Show home section by default
    showSection('home');
    
    // Add smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add some interactive effects
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects to category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add typing effect to hero text
    const heroTitle = document.querySelector('.hero h2');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (quizSection.classList.contains('hidden')) return;
    
    if (e.key >= '1' && e.key <= '4') {
        const answerIndex = parseInt(e.key) - 1;
        const options = optionsContainer.querySelectorAll('.option');
        if (answerIndex < options.length && selectedAnswer === null) {
            selectAnswer(answerIndex);
        }
    } else if (e.key === 'Enter' && !nextButton.disabled) {
        nextQuestion();
    }
});

// Add confetti effect for perfect scores
function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Add CSS animation for confetti
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// Trigger confetti for perfect scores
function checkForPerfectScore() {
    const percentage = Math.round((score / currentQuiz.questions.length) * 100);
    if (percentage === 100) {
        setTimeout(createConfetti, 1000);
    }
}

// Update the showResults function to include confetti
const originalShowResults = showResults;
showResults = function() {
    originalShowResults();
    checkForPerfectScore();
};

// Add local storage for high scores
function saveHighScore(category, score, percentage) {
    const highScores = JSON.parse(localStorage.getItem('quizHighScores') || '{}');
    if (!highScores[category] || highScores[category].score < score) {
        highScores[category] = {
            score: score,
            percentage: percentage,
            date: new Date().toLocaleDateString()
        };
        localStorage.setItem('quizHighScores', JSON.stringify(highScores));
        return true; // New high score
    }
    return false; // Not a new high score
}

// Add sound effects (optional)
function playSound(type) {
    // Create audio context for sound effects
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    if (type === 'correct') {
        // Play a pleasant sound for correct answers
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(1000, audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.2);
    } else if (type === 'incorrect') {
        // Play a different sound for incorrect answers
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(300, audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.2);
    }
}

// Add timer functionality
let quizTimer = null;
let timeElapsed = 0;

function startTimer() {
    timeElapsed = 0;
    quizTimer = setInterval(() => {
        timeElapsed++;
        updateTimerDisplay();
    }, 1000);
}

function stopTimer() {
    if (quizTimer) {
        clearInterval(quizTimer);
        quizTimer = null;
    }
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeElapsed / 60);
    const seconds = timeElapsed % 60;
    const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // Add timer display to quiz header if it doesn't exist
    let timerDisplay = document.getElementById('timer-display');
    if (!timerDisplay) {
        timerDisplay = document.createElement('div');
        timerDisplay.id = 'timer-display';
        timerDisplay.className = 'timer-display';
        document.querySelector('.quiz-header').appendChild(timerDisplay);
    }
    timerDisplay.textContent = `Time: ${timeString}`;
}

// Enhanced showResults function with high scores and timer
function showResults() {
    stopTimer();
    
    const totalQuestions = currentQuiz.questions.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    
    // Save high score
    const isNewHighScore = saveHighScore(currentQuiz.title, score, percentage);
    
    finalScore.textContent = score;
    scorePercentage.textContent = `${percentage}%`;
    
    // Set performance message
    let message = '';
    if (percentage >= 90) {
        message = 'Excellent! You\'re a quiz master! 🏆';
        if (isNewHighScore) message += ' New High Score! 🎉';
    } else if (percentage >= 80) {
        message = 'Great job! You really know your stuff! 🌟';
        if (isNewHighScore) message += ' New High Score! 🎉';
    } else if (percentage >= 70) {
        message = 'Good work! Keep learning and improving! 👍';
    } else if (percentage >= 60) {
        message = 'Not bad! A bit more study and you\'ll do great! 📚';
    } else if (percentage >= 50) {
        message = 'You\'re on the right track! Keep practicing! 💪';
    } else {
        message = 'Don\'t worry! Every expert was once a beginner! 🌱';
    }
    
    performanceMessage.textContent = message;
    
    // Add time taken to results
    const minutes = Math.floor(timeElapsed / 60);
    const seconds = timeElapsed % 60;
    const timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    // Add time display to results
    let timeDisplay = document.getElementById('time-display');
    if (!timeDisplay) {
        timeDisplay = document.createElement('div');
        timeDisplay.id = 'time-display';
        timeDisplay.className = 'time-display';
        document.querySelector('.score-summary').appendChild(timeDisplay);
    }
    timeDisplay.textContent = `Time taken: ${timeString}`;
    
    quizSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');
}

// Enhanced startQuiz function with timer
function startQuiz(category) {
    currentQuiz = quizData[category];
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    quizCompleted = false;
    
    quizTitle.textContent = currentQuiz.title;
    categories.classList.add('hidden');
    quizSection.classList.remove('hidden');
    resultsSection.classList.add('hidden');
    
    displayQuestion();
    updateProgress();
    updateScore();
    startTimer(); // Start the timer
}

// Add CSS for timer display
const timerStyle = document.createElement('style');
timerStyle.textContent = `
    .timer-display {
        background: rgba(255, 255, 255, 0.1);
        padding: 8px 15px;
        border-radius: 20px;
        font-weight: 600;
        font-size: 0.9rem;
    }
    
    .time-display {
        font-size: 1rem;
        opacity: 0.8;
        margin-top: 10px;
    }
`;
document.head.appendChild(timerStyle);
