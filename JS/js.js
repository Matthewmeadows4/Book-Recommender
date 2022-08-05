books = [
    { name: 'Harry Potter',  genre: "Young Adult"},
    { name: 'Lord of The Rings', genre: "Fantasy"},
]

filteredbooks = books.filter((books) => {
    return books.genre == "Fantasy"
})

console.log (filteredbooks)

function update(){
var select = document.getElementById('genre');
var value = select.options[select.selectedIndex].value;

console.log(value)}

