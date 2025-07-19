# 🎲 Tenzies Game - React Edition

![Tenzies Game](https://img.shields.io/badge/React-19+-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6+-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

A modern, interactive dice game built with React and Vite, featuring smooth animations, accessibility support, and responsive design. Roll all dice to the same number to win!

## 🚀 Live Demo

[Play Tenzies Now!](https://tenziesrreact.netlify.app/) *(Deploy using the instructions below)*

## 🎮 Game Features

### Core Gameplay
- **Objective**: Roll until all 10 dice show the same number
- **Strategy**: Click dice to "hold" them at their current value
- **Challenge**: Complete the game in minimum rolls and fastest time

### Enhanced Features
- 🎊 **Celebration Effects** - Confetti animation on game completion
- ⏱️ **Real-time Stopwatch** - Track your completion time with millisecond precision
- 🎨 **Visual Feedback** - Dice change color when held, blur effect before game start
- ♿ **Accessibility First** - Screen reader support, ARIA labels, keyboard navigation
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile devices

## 🛠️ Tech Stack

### Frontend Framework
- **React 19.1.0** - Modern React with latest features and hooks
- **Vite 6.3.5** - Lightning-fast build tool and dev server
- **JavaScript ES6+** - Modern JavaScript features

### Key Dependencies
- **react-confetti** (6.4.0) - Celebration animations when you win
- **react-timer-hook** (4.0.5) - Precision stopwatch functionality
- **nanoid** - Unique ID generation for dice components

### Development Tools
- **ESLint 9.25.0** - Code quality and consistency
- **@vitejs/plugin-react** - React support for Vite
- **Modern CSS** - Flexbox, Grid, and responsive design

## 🧠 Game Logic & Architecture

### State Management Strategy
```javascript
// Centralized game state using React hooks
const [dice, setDice] = useState(() => generateAllNewDice())
const [startgame, setStartgame] = useState(false)
```

### Smart Dice Generation
- **Algorithm**: `Math.ceil(Math.random() * 6)` for true randomness
- **State Tracking**: Each die maintains `value`, `isHeld`, and unique `id`
- **Immutable Updates**: Functional state updates prevent bugs

### Game Win Detection
```javascript
const gameWon = dice.every(die => die.isHeld) &&
    dice.every(die => die.value === dice[0].value)
```
Elegant boolean logic checks both conditions:
1. All dice are held by the player
2. All dice show the same value

### Performance Optimizations
- **Conditional Rendering**: Components only re-render when necessary
- **useRef Hook**: Direct DOM access for focus management
- **useEffect Optimization**: Targeted side effects with dependency arrays

## 🎨 Design Philosophy

### Visual Design
- **Color Psychology**: Green for held dice, black for active dice
- **Modern UI**: Clean, card-based layout with subtle shadows
- **Custom SVG Dice**: Beautiful dice graphics for each value (1-6)
- **Blur Effects**: Visual cues for game state changes

### User Experience
- **Progressive Disclosure**: Game elements appear as needed
- **Immediate Feedback**: Visual and interactive responses
- **Accessibility**: Screen reader support and semantic HTML
- **Mobile-First**: Touch-friendly interface for all devices

### Code Quality
- **Component Separation**: Modular architecture with single responsibility
- **Props Interface**: Clean data flow between components
- **Event Handling**: Efficient click and state management
- **Error Prevention**: Disabled states prevent invalid interactions

## 📱 Responsive Design Features

### Mobile Optimization (< 450px)
- Dynamic viewport height (`100dvh`) for mobile browsers
- Smaller dice size (50x50px) for touch interfaces
- Optimized spacing and typography
- Overflow handling for content safety

### Desktop Experience
- Full-size dice (60x60px) for precise clicking
- Larger fonts and spacing for comfortable viewing
- Hover effects and visual feedback

## ♿ Accessibility Features

### Screen Reader Support
- **ARIA Labels**: Descriptive labels for each die state
- **Live Regions**: Automatic win announcement
- **Semantic HTML**: Proper button and heading structure

### Keyboard Navigation
- **Focus Management**: Automatic focus on "New Game" button
- **Tab Order**: Logical navigation through interactive elements
- **Screen Reader Only Text**: Hidden but accessible game status

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn
- Modern web browser

### Quick Start
```bash
# Clone the repository
git clone https://github.com/yourusername/tenzies-react.git

# Navigate to project directory
cd tenzies-react/tenzies

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Available Scripts
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build optimized production bundle
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🌐 Deployment

### Deploy to Netlify
1. **From GitHub (Recommended)**:
   - Push code to GitHub repository
   - Connect repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Deploy automatically on every push

2. **Manual Deployment**:
   - Run `npm run build` locally
   - Drag and drop the `dist` folder to Netlify

## 🎯 Future Enhancements

### Planned Features
- 🏆 **Leaderboard System** - Local storage for best times
- 🎵 **Sound Effects** - Audio feedback for rolls and wins
- 🎨 **Theme Customization** - Multiple color schemes
- 📊 **Game Statistics** - Track rolls, time, and completion rate
- 🎮 **Difficulty Levels** - Variable dice counts and objectives
- 👥 **Multiplayer Mode** - Compete with friends online

### Technical Improvements
- **PWA Support** - Offline gameplay capability
- **Animation Library** - Smooth dice roll animations
- **State Persistence** - Resume games after browser close
- **Performance Monitoring** - Real-time performance metrics

## 🤝 Contributing

We welcome contributions! Please read our contributing guidelines and submit pull requests for any improvements.

### Development Guidelines
1. Follow existing code style and ESLint rules
2. Write descriptive commit messages
3. Test on multiple devices and browsers
4. Maintain accessibility standards
5. Update documentation for new features

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Vite Team** - For the lightning-fast build tool
- **Open Source Community** - For the incredible libraries
- **Scrimba** - For React education and inspiration

---

### 🎲 Ready to Play?

Experience the perfect blend of classic dice gaming and modern web technology. Every roll counts, every click matters, and every game is a new challenge!

---

*Built with ❤️ using React, Vite, and modern web technologies*
