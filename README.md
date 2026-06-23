# 🧠 Memory Match Game

A fast-paced, interactive card matching game built using React and Vite. Test your memory by flipping cards to find matching pairs of emojis in the fewest turns possible!

🚀 **[Live Demo](https://memory-game-lac-eight.vercel.app/)**

## 🚀 Features

- **Dynamic Deck Shuffling:** Randomly generates and shuffles a 4x4 grid (16 cards, 8 unique pairs) every time a new game starts.
- **State Guarding (Anti-Cheat):** Temporarily disables clicking while evaluating mismatched cards to prevent fast-click cheating.
- **Turn Tracking:** Keeps a running count of how many matching attempts you've made.
- **Victory Banner:** Dynamically evaluates when all pairs are matched and displays a celebratory victory overlay showing your final score.
- **Responsive Layout:** Built with a modern, centered CSS Grid that scales cleanly across desktop and mobile browsers.

## 🛠️ Core React Concepts Learned

Building this mini-project in one day covers several essential React fundamentals:
* **State Management (`useState`):** Managing arrays of objects, primitive scoring counters, active selection states, and asynchronous UI locks.
* **Component Lifecycles (`useEffect`):** Triggering an initial game setup automatically on page load, and using reactive dependency arrays to automatically evaluate matching logic the exact moment two cards are flipped.
* **Conditional Rendering:** Using short-circuit evaluation (`&&`) and ternary operators (`? :`) to alternate between showing a card mask (`❓`), its underlying emoji, or displaying the final win screen.
* **Immutable State Updates:** Using `.map()` and functional state updates (`prevCards => ...`) to safely update specific objects inside an array without mutating the original state directly.

## 📦 Installation & Setup

Get this project running locally on your machine in under two minutes:

1. **Clone the repository:**
   ```Bash
   git clone [https://github.com/Sanchita-InLoop/Memory-Game.git](https://github.com/Sanchita-InLoop/Memory-Game.git)
   cd memory-match-game
   ```
2. **Install project dependencies:**
  ```Bash
  npm install
  ```
3. **Start the local development server:**

  ```Bash
  npm run dev
  ```
4. Play the game:
  Open your browser and navigate to the local URL displayed in your terminal (typically http://localhost:5173).

## 🎮 How to Play:

1. Click New Game (or let the grid load automatically).
2. Click any card to reveal its emoji.
3. Click a second card to find its match.

   -> If the emojis match, they stay face-up permanently.

   -> If they do not match, they freeze for 1 second so you can memorize their locations before automatically flipping back over.
   
5. Clear the board to reveal the Victory Banner and see how few turns it took you!
