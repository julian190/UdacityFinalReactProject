import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { search } from "../BooksAPI";
import Book from "./book";
import { update } from "../BooksAPI";
import { getAll } from "../BooksAPI";

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
  const [booksWithShelf, setBookWithShelf] = useState([]);
  const GetAllBooks = () => {
    const getBookShelf = async () => {
      const res = await getAll();
      setBookWithShelf(res);
      console.log(res);
    };
    getBookShelf();
  };
  useEffect(() => {
    GetAllBooks();
  },[]);
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
              searchResult.map((b) => (
                <Book
                  key={b.id}
                  book={b}
                  listenToBookChange={onBookShelfChange}
                  search={true}
                  booksWithShelf={booksWithShelf}
                />
              ))}
          </ol>
        </div>
      </div>
    </div>
  );
};
export default Search;
