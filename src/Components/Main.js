import Shelf from "./Shelf";
import { useState, useEffect } from "react";
import { getAll, update } from "../BooksAPI";
import { Link } from "react-router-dom";
const Main = () => {
  const updatebook = () => {
    const fetchdata = async () => {
      const res = await getAll();
      setShowBooks(res);
      console.log(res);
    };
    fetchdata();
  };

  const [ShowBooks, setShowBooks] = useState([]);
  useEffect(() => {
    updatebook();
  }, []);
  const onBookShelfChange = (bookID, Shelf) => {
    const updateBookShelf = async () => {
      const res = await update(bookID, Shelf);
      console.log(res);
      updatebook();
    };
    updateBookShelf();
  };

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf
            ShelfName={"Currently Reading"}
            book={ShowBooks.filter((e) => e.shelf === "currentlyReading")}
            onchangeShelf={onBookShelfChange}
          />
          <Shelf
            ShelfName={"Want to Read"}
            book={ShowBooks.filter((e) => e.shelf === "wantToRead")}
            onchangeShelf={onBookShelfChange}
          />
          <Shelf
            ShelfName={"Read"}
            book={ShowBooks.filter((e) => e.shelf === "read")}
            onchangeShelf={onBookShelfChange}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">
          Add a book
        </Link>
      </div>
    </div>
  );
};

export default Main;
