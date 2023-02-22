const quotesArray = [
  "I'm not a product of my circumstances. I'm a product of my decisions. -Stephen Covey",
  "The best way to predict the future is to create it. -Abraham Lincoln",
  "Happiness is not something ready made. It comes from your own actions. -Dalai Lama",
  "The only person you are destined to become is the person you decide to be. -Ralph Waldo Emerson",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
  "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. -Winston Churchill",
  "The only way to do great work is to love what you do. -Steve Jobs",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. -Christian D. Larson",
  "Believe you can and you're halfway there. -Theodore Roosevelt",
  "Challenges are what make life interesting and overcoming them is what makes life meaningful. -Joshua J. Marine",
  "Don't watch the clock; do what it does. Keep going. -Sam Levenson",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination. -Jimmy Dean",
  "What you get by achieving your goals is not as important as what you become by achieving your goals. -Zig Ziglar",
  "If you want to achieve greatness, stop asking for permission. -Unknown",
  "In three words I can sum up everything I've learned about life: it goes on. -Robert Frost",
  "The only limit to our realization of tomorrow will be our doubts of today. -Franklin D. Roosevelt",
  "Don't let yesterday take up too much of today. -Will Rogers",
  "You are never too old to set another goal or to dream a new dream. -C.S. Lewis",
  "Believe and act as if it were impossible to fail. -Charles Kettering",
  "Success is stumbling from failure to failure with no loss of enthusiasm. -Winston Churchill",
  "The way to get started is to quit talking and begin doing. -Walt Disney",
  "If you really look closely, most overnight successes took a long time. -Steve Jobs",
  "You miss 100% of the shots you don't take. -Wayne Gretzky",
  "I have not failed. I've just found 10,000 ways that won't work. -Thomas Edison",
  "It does not matter how slowly you go as long as you do not stop. -Confucius",
  "It's not what happens to you, but how you react to it that matters. -Epictetus",
  "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. -Winston Churchill",
  "The man who has confidence in himself gains the confidence of others. -Hasidic Proverb",
  "The greatest discovery of my generation is that a human being can alter his life by altering his attitudes. -William James",
  "Life is 10% what happens to us and 90% how we react to it. -Charles R. Swindoll",
  "You don't have to be great to start, but you have to start to be great. -Zig Ziglar"
]


let n = Math.floor(Math.random() * (quotesArray.length));
let x = quotesArray[n];
let elem = document.getElementsByClassName("quote")[0];
elem.innerHTML = x;