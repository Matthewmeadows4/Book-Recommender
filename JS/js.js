const generateBook = function() {
   const books = [
   {
      book: 'The It Girl',
      author: 'Ruth Ware',
      
   },
   {
      book: 'Tomorrow, and Tomorrow, and Tomorrow',
      author: 'Gabrielle Zevin'
   }, {
      book: 'The Bodyguard',
      author: 'Gabrielle Zevin'
   }, {
      book: 'Upgrade',
      author: 'Blake Crouch'
   }, {
      book: 'Things We Do in the Dark',
      author: 'Jennifer Hillier'
   }, {
      book: 'Below Zero (The STEMinist Novellas, #3)',
      author: 'Ali Hazelwood'
   }, {
      book: 'The Daughter of Doctor Moreau',
      author: 'Silvia Moreno-Garcia'
   }, {
      book: 'The Last to Vanish',
      author: 'Megan Miranda'
   }, {
      book: 'The Brighter the Light',
      author: 'Mary Ellen Taylor'
   }, {
      book: '1984',
      author: 'George Orwell'
   }, {
      book: 'Killing Stalking: Deluxe Edition, Vol. 1',
      author: 'Koogi'
   }, {
      book: 'The Pallbearers Club',
      author: 'Paul Tremblay'
   }, {
      book: 'These Twisted Bonds (These Hollow Vows, #2)',
      author: 'Lexi Ryan'
   }, {
      book: 'The Librarian Spy',
      author: 'Madeline Martin'
   }, {
      book: 'Just Like Home',
      author: 'Sarah Gailey'
   }, {
      book: 'Acts of Violet',
      author: 'Margarita Montimore'
   }, {
      book: 'Honey & Spice',
      author: 'Bolu Babalola'
   }, {
      book: 'Booked on a Feeling (A Sweet Mess, #3)',
      author: 'Jayci Lee'
   }, {
      book: 'Dream On',
      author: 'Angie Hockman'
   }, {
      book: 'What Moves the Dead',
      author: 'T. Kingfisher'
   }, {
      book: 'Does It Hurt?',
      author: 'H.D. Carlton'
   }, {
      book: 'Kristin Lavransdatter (Kristin Lavransdatter, #1-3)',
      author: 'Sigrid Undset'
   }, {
      book: 'Violet Made of Thorns (Violet Made of Thorns, #1)',
      author: 'Gina Chen'
   }, {
      book: 'Bet on It',
      author: 'Jodie Slaughter'
   }, {
      book: 'The New Neighbor',
      author: 'Karen Cleveland'
   }, 
   ]

   let arrayIndex = Math.floor(Math.random() * books.length);
   document.getElementById("book").innerHTML = books[arrayIndex].book;
   document.getElementById("author").innerHTML = books[arrayIndex].author;

}
window.onload = function() {
   generateBook();
   document.getElementById("generate").addEventListener('click', generateBook);
}
