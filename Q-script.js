const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
  },
  {
    quote: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: "It is never too late to be what you might have been.",
    author: "George Eliot",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: "If you want to lift yourself up, lift up someone else.",
    author: "Booker T. Washington",
  },
  {
    quote:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "We may encounter many defeats but we must not be defeated.",
    author: "Maya Angelou",
  },
  {
    quote: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
  {
    quote:
      "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
  {
    quote: "The future starts today, not tomorrow.",
    author: "Pope John Paul II",
  },
];

const Quote = document.querySelector(".quote");
const Author = document.querySelector(".author");
const btn = document.getElementById("btn");

function RandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

btn.addEventListener("click", () => {
  const randomQoute = RandomQuote();
  Quote.innerHTML = '"' + randomQoute.quote + '"';
  Author.innerHTML = "-" + randomQoute.author;
  randomColor();
});

const randomColor = () => {
  const color = Math.floor(Math.random() * 16777216).toString(16);
  document.body.style.backgroundColor = "#" + color;
};
const initialQoute = RandomQuote();
Quote.innerHTML = '"' + initialQoute.quote + '"';
Author.innerHTML = "-" + initialQoute.author;
