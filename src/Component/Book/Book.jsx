import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, image, bookName, author, tags, category } = book;
  return (
    <Link to={`books/${bookId}`}>
      <div>
        <div className="card bg-base-100 w-96 shadow-xl p-4">
          <figure className="bg-gray-200 p-6 rounded-2xl">
            <img src={image} className="h-[166px]" alt={bookName} />
          </figure>
          <div className="card-body">
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
            <h2 className="card-title">
              {bookName}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>by {author}</p>
            <div className="divider"></div>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">{category}</div>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
