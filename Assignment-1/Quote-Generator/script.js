const arrayOfQuotes = [
    {
        "author": "Ernest Hemingway",
        "quote": "In order to write about life first you must live it."
    },
    {
        "author": "Walt Disney",
        "quote": "The way to get started is to quit talking and begin doing."
    },
    {
        "author": "Eleanor Roosevelt",
        "quote": "If life were predictable it would cease to be life, and be without flavor."
    },
    {
        "author": "Oprah Winfrey",
        "quote": "Surround yourself with only people who are going to lift you higher."
    },
    {
        "author": "John Lennon",
        "quote": "Life is what happens when you are busy making other plans."
    },
    {
        "author": "Elbert Hubbard",
        "quote": "Do not take life too seriously. You will not get out alive."
    },
    {
        "author": "John Lennon",
        "quote": "Life is what happens when you`re busy making other plans."
    }
];
function generateQuote() {
    const random = Number.parseInt(Math.random() * arrayOfQuotes.length + 1);
    document.querySelector("#generatedQuote")
        .textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector("#AuthorName")
        .textContent = `--${arrayOfQuotes[random].author}`;

}
var myDate = new Date();
var hrs = myDate.getHours();

var day;

if (hrs < 12)
    day = "Morning";
else if (hrs >= 12 && hrs <= 17)
    day = "Afternoon";
else if (hrs >= 17 && hrs <= 24)
    day = "Evening";

document.getElementById("Greeting").innerHTML = "Lets start our </b>" +
    "<b>" + day + "</b> to new quote!";
