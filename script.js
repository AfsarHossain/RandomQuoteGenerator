let ara = [
  {
    author: "Afsar Hossain",
    quote: "Hi Gyess How are you?",
  },
  {
    author: "Jim Rohn",
    quote: "Beware of what you become in pursuit of what you want.",
  },

  {
    author: "Epictetus",
    quote: "It's not what happens to you, but how you react to it that matters",
  },
];

let btn = document.getElementById("btn");

function randomSelector(araLength) {
  return Math.floor(Math.random() * araLength);
}

btn.addEventListener("click", function () {
  let randomNumber = randomSelector(ara.length);

  document.getElementById("quoteOutput").innerHTML =
    '"' + ara[randomNumber].quote + '"';

  document.getElementById("authorOutput").innerHTML =
    "_" + ara[randomNumber].author;
});
