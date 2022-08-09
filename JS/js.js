function update() {
  var select = document.getElementById("genre");
  var text = select.options[select.selectedIndex].text;
  console.log(text);
}

function newBook() {
  var select = document.getElementById("genre");
  var text = select.options[select.selectedIndex].text;
  books = [
    { title: "Harry Potter", genre: "Young Adult" },
    { title: "Lord of The Rings", genre: "Fantasy" },
  ];

  filteredbooks = books.filter((books) => {
    books.genre == text;
  });

  let title = (filteredbooks = books.filter((books) => {
    books.genre == text;
  }));
  if (title == "") {
    (confirm ((text)));
  }
  
}

function onconfirm(){

}