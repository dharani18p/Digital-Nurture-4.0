import React from "react";

const BookDetails = ({ books }) => {
    return (
        <div>
            <h2>📚 Book Details</h2>
            <ul>
                {books.map((book, index) => (
                    <li key={index}>
                        <b>{book.title}</b> by {book.author}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookDetails;
