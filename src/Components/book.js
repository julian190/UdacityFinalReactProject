import { useState,useEffect } from "react";
const Book = ({ book, listenToBookChange, search, booksWithShelf }) => {
  //console.log(book);
const [shelfname,SetShelfName] = useState("");
  const onShelfChange = (e) => {
    const targetShelf = e.target.value;
    listenToBookChange(book, targetShelf);
  };
  const selectShelf = (title) => {
    if (search) {
      booksWithShelf.forEach((item) => {
        if (item.title === title) {
          debugger;
          SetShelfName(item.shelf);
        } else {
          SetShelfName("none") ;
        }
      });
    } else {
      SetShelfName(book.shelf);
    }
  };
  useEffect(()=>{selectShelf(book.title)},)
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,

              backgroundImage: `url("${
                book.imageLinks && book.imageLinks.thumbnail
              }")`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select onChange={onShelfChange} value={shelfname}>
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors && book.authors.length >= 1 && book.authors.join(" ")}
        </div>
      </div>
    </li>
  );
};
export default Book;
