let btn = document.querySelector("#new-quote");
// console.log(btn)
let quote = document.querySelector(".qoute");
// console.log(quote)

let person = document.querySelector(".person");
// console.log(person)

const quotes = [
  {
    quote: `"I do the very best I know how - the very best I can; and I mean to keep on doing so until the end" `,
    person: `Mahatma gandhi`,
  },
  {
    quote: `"10. “The battles that count aren't the ones for gold medals. The struggles within yourself—the invisible, inevitable battles inside all of us—that's where it's at." `,
   person:`Jesse Owens`,
    
  },
  {
    quote:`“True freedom is impossible without a mind made free by discipline.” ―Mortimer"`,
    person:`J. Adler`,


  },
];
btn.addEventListener("click", function () {
  let randNumber = Math.random();

  // console.log(randNumber);
  let random = Math.floor(randNumber * quotes.length);
  // RANDOM = 0, 1 ,

  quote.innerText = quotes[random].quote;

  person.innerText = quotes[random].person;
});
