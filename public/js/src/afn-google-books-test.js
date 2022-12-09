google.books.load();
const user_id = '114251016552434052004';
const GBooks_API_URL = `https://www.googleapis.com/books/v1/users/${user_id}/bookshelves`;

console.log(GBooks_API_URL);

fetch(GBooks_API_URL)
  .then((response) => response.json())
  .then((data) => console.log(data));
