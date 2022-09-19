import Book from "./book";
import Shelf from "./Shelf";
const Main = ({ books }) => {
    console.log(books)
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
            <Shelf ShelfName={"Currently Reading"} book={books.filter(e=> e.shelf==="currentlyReading")}/>
            <Shelf ShelfName={"Want to Read"} book={books.filter(e=> e.shelf==="wantToRead")}/>
            <Shelf ShelfName={"Read"} book={books.filter(e=> e.shelf==="read")}/>
        </div>
      </div>
      <div className="open-search">
        <a onClick={() => console.log("clicked")}>Add a book</a>
      </div>
    </div>
  );
};

export default Main;
