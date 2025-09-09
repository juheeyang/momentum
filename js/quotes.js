const quotes = [
    {
        quote : "Success is not final; failure is not fatal: It is the courage to continue that counts.",
        author : "Winston S. Churchill"
    },
    {
        quote : "Don’t be afraid to give up the good to go for the great.",
        author : "John D. Rockefeller"
    },
    {
        quote : "If you are not willing to risk the usual, you will have to settle for the ordinary.",
        author : "Jim Rohn"
    },
    {
        quote : "All progress takes place outside the comfort zone.",
        author : "Michael John Bobak"
    },
    {
        quote : "The way to get started is to quit talking and begin doing.",
        author : "Walt Disney"
    },
    {
        quote : "I find that the harder I work, the more luck I seem to have.",
        author : "Thomas Jefferson"
    },
    {
        quote : "Wiht great power comes great responsibility.",
        author : "Peter Parker"
    },
    {
        quote : "Don’t aim for success if you want it; just do what you love and believe in, and it will come naturally.",
        author : "David Frost"
    },
    {
        quote : "Opportunities don’t happen. You create them.",
        author : "Chris Grosser"
    },
    {
        quote : "I am Iron Man.",
        author : "Tony Stark"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;