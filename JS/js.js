const generateBook = function() {
   const books = [
   {
      book: 'The It Girl',
      author: 'Ruth Ware'
   },
   {
      book: 'Tomorrow, and Tomorrow, and Tomorrow',
      author: 'Gabrielle Zevin'
   }, {
      book: 'The Bodyguard',
      author: 'Gabrielle Zevin'
   }, {
      book: 'Tomorrow, and Tomorrow, and Tomorrow',
      author: 'Katherine Center'
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
      book: 'Tomorrow, and Tomorrow, and Tomorrow',
      author: 'Gabrielle Zevin'
   }, {
      book: 'Tomorrow, and Tomorrow, and Tomorrow',
      author: 'Gabrielle Zevin'
   }, {
      book: 'Tomorrow, and Tomorrow, and Tomorrow',
      author: 'Gabrielle Zevin'
   }, {
      book: 'Tomorrow, and Tomorrow, and Tomorrow',
      author: 'Gabrielle Zevin'
   }, {
      book: 'Tomorrow, and Tomorrow, and Tomorrow',
      author: 'Gabrielle Zevin'
   }, {
      book: 'Tomorrow, and Tomorrow, and Tomorrow',
      author: 'Gabrielle Zevin'
   }, {
      book: 'Tomorrow, and Tomorrow, and Tomorrow',
      author: 'Gabrielle Zevin'
   }, {
      book: 'Tomorrow, and Tomorrow, and Tomorrow',
      author: 'Gabrielle Zevin'
   }, {
      book: 'Tomorrow, and Tomorrow, and Tomorrow',
      author: 'Gabrielle Zevin'
   }, {
      book: 'Tomorrow, and Tomorrow, and Tomorrow',
      author: 'Gabrielle Zevin'
   }, {
      book: 'Tomorrow, and Tomorrow, and Tomorrow',
      author: 'Gabrielle Zevin'
   }, {
      book: 'Tomorrow, and Tomorrow, and Tomorrow',
      author: 'Gabrielle Zevin'
   }, {
      book: 'Tomorrow, and Tomorrow, and Tomorrow',
      author: 'Gabrielle Zevin'
   }, {
      book: 'Tomorrow, and Tomorrow, and Tomorrow',
      author: 'Gabrielle Zevin'
   }, {
      book: 'Tomorrow, and Tomorrow, and Tomorrow',
      author: 'Gabrielle Zevin'
   }, {
      book: 'Tomorrow, and Tomorrow, and Tomorrow',
      author: 'Gabrielle Zevin'
   }, {
      book: 'Tomorrow, and Tomorrow, and Tomorrow',
      author: 'Gabrielle Zevin'
   }, {
      book: 'Tomorrow, and Tomorrow, and Tomorrow',
      author: 'Gabrielle Zevin'
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
