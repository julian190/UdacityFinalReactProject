import { Link } from "react-router-dom";
import { useState } from "react";
import { search } from "../BooksAPI";
import Book from "./book";
import {  update } from "../BooksAPI";
const Search = () => {
  const [searchResult, SetSearchResult] = useState([]);
  const onTyping = (e) => {
    const query = e.target.value;
    const getSearchBook = async () => {
      if (query !== "") {
        const results = await search(query);

        SetSearchResult(results);
      } else {
        SetSearchResult([]);
      }
    };
    getSearchBook();
  };
  const onBookShelfChange = (bookID, Shelf) => {
    const updateBookShelf = async () => {
      const res = await update(bookID, Shelf);
      console.log(res);
      
    };
    updateBookShelf();
  };
  return (
    <div>
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              onKeyUp={onTyping}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {!searchResult.items &&
              searchResult.map((b) => <Book key={b.id} book={b} listenToBookChange = {onBookShelfChange}search = {true} />)}
          </ol>
        </div>
      </div>
    </div>
  );
};
export default Search;
