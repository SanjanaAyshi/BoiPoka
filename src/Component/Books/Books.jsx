import React, { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("./booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <h2 className="font-bold text-center text-2xl">Books</h2>
      <p>{books.length}</p>
      <div>
        {books.map((book) => (
          <Book book={book} key={book.bookID}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
