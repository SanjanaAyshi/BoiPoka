import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();
  //   console.log(bookId);
  const data = useLoaderData();
  //   console.log(data);
  const id = parseInt(bookId);
  const book = data.find((book) => book.bookId === id);
  console.log(book);
  const {
    bookId: currentBookId,
    image,
    bookName,
    author,
    totalPages,
    category,
    tags,
    review,
  } = book;
  return (
    <div>
      <h2>Details... of {bookId}</h2>
      <div className="hero bg-base-100 min-h-screen py-8 ">
        <div className="hero-content flex-col lg:flex-row gap-8">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{bookName}</h1>
            <p>by {author}</p>
            <div className="divider"></div>
            <h4>{category}</h4>
            <div className="divider"></div>
            <p className="py-2">
              <span className="font-bold text-black">Review: </span>
              {review}
            </p>
            <p className="py-2 flex gap-4 align-middle">
              <span className="font-bold text-black">Tags: </span>
              <div className="flex gap-2">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className="badge bg-green-200 font-medium text-green-800"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </p>
            <div className="divider"></div>
            <p className="py-2">
              <span className="font-bold text-black">Total Pages: </span>
              {totalPages}
            </p>
            <div className="flex gap-6">
              <button className="btn border-green-500">Mark as Read</button>
              <button className="btn btn-active bg-green-500">wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
