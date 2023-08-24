import React , { useState } from 'react';
import './App.css';
import TwitterShare from './TwitterBtn';

function App() {
  const quotes = [
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      quote: "In three words I can sum up everything I've learned about life: it goes on.",
      author: "Robert Frost"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      author: "Albert Einstein"
    },
    {
      quote: "The only person you should try to be better than is the person you were yesterday.",
      author: "Unknown"
    },
    {
      quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      author: "Ralph Waldo Emerson"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      quote: "The best way to predict the future is to create it.",
      author: "Peter Drucker"
    },
    {
      quote: "Life is 10% what happens to us and 90% how we react to it.",
      author: "Charles R. Swindoll"
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson"
    },
    {
      quote: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt"
    },
    {
      quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
      author: "Martin Luther King Jr."
    },
    {
      quote: "Success is stumbling from failure to failure with no loss of enthusiasm.",
      author: "Winston Churchill"
    },
    {
      quote: "The journey of a thousand miles begins with one step.",
      author: "Lao Tzu"
    },
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela"
    },
    {
      quote: "Life isn't about finding yourself. Life is about creating yourself.",
      author: "George Bernard Shaw"
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius"
    },
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney"
    },
    {
      quote: "You miss 100% of the shots you don't take.",
      author: "Wayne Gretzky"
    }
  ]

const [quotesCount, setQuotesCount] = useState(0);

const newQuotes = () => {
   let randomNum;

    do{
     randomNum =  Math.floor(Math.random() * (quotes.length - 1)) + 1
    } while (randomNum === quotesCount)

   console.log(randomNum);
   setQuotesCount(randomNum);
  
}


  return (
    <div className="App">
      <h1>Quotes</h1>
    <div className='quotes-container'>
      <h2>{quotes[quotesCount].quote}</h2>
      <p> - {quotes[quotesCount].author}</p>
      <button onClick={newQuotes}>New quotes</button>

      <TwitterShare />
    </div>
        
    </div>
  );
}

export default App;
