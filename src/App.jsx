import { useState, useEffect } from 'react';
import './App.css';

const initialEmojis = ["🚀", "🎨", "🍕", "🎸", "👻", "👾", "🦊", "🍿"];

export default function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // Shuffle function
  const shuffleCards = () => {
    // 1. Duplicate the array (8 emojis become 16)
    const shuffledDeck = [...initialEmojis, ...initialEmojis]
      // 2. Randomize the order using Math.random()
      .sort(() => Math.random() - 0.5)
      // 3. Map them into objects with unique IDs and properties
      .map((emoji, index) => ({
        id: index,
        emoji: emoji,
        isFlipped: false,
        isMatched: false
      }));

    // Reset choices when starting a new game
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledDeck);
    setTurns(0); 
  };

  // Run automatically on page load
  useEffect(() => {
    shuffleCards();
  }, []);

  const handleChoice = (card) => {
    // Safety check: Don't allow clicks if the board is disabled, 
    // or if the card is already matched/flipped
    if (disabled || card.isMatched || card === choiceOne) return;

    // Set choiceOne if empty, otherwise set choiceTwo
    if (!choiceOne) {
      setChoiceOne(card);
    } else {
      setChoiceTwo(card);
    }
  };

  // Monitor choices for matching pairs
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true); // Stop user from clicking a 3rd card

      if (choiceOne.emoji === choiceTwo.emoji) {
        // It's a match! Update cards state
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.emoji === choiceOne.emoji) {
              return { ...card, isMatched: true };
            }
            return card;
          });
        });
        resetTurn();
      } else {
        // Not a match! Wait 1 second so player can see it, then flip back
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // Reset choices & increment turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
    setDisabled(false);
  };

  // Check if player won the game
  const isGameOver = cards.length > 0 && cards.every(card => card.isMatched);

  // The actual UI layout
  return (
    <div className="App">
      <h1 style={{color: "#f9e1c9"}}>Memory Match Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <p>Turns: {turns}</p>

      {isGameOver && (
        <div className="win-banner">
          <h2 style={{color: "#1c0f11fd"}}>🏆 Victory! 🏆</h2>
          <p>You mastered the grid in <strong>{turns}</strong> turns.</p>
          <button onClick={shuffleCards}>Play Again</button>
        </div>
      )}
      <div className="card-grid">
        {cards.map(card => {
          // Determine if this specific card should be revealed
          const isFlipped = card === choiceOne || card === choiceTwo || card.isMatched;

          return (
            <div 
              key={card.id} 
              className={`card ${isFlipped ? 'flipped' : ''}`}
              onClick={() => handleChoice(card)}
            >
              <div className="card-content">
                {isFlipped ? card.emoji : "❓"}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}