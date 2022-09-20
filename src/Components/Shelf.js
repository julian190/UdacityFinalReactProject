import Book from "./book";
const Shelf = ({ book, ShelfName,onchangeShelf}) => {
  const listenToBookChange = (book,sheelf) =>{
    onchangeShelf(book,sheelf)

  }
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{ShelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {book.map((e) => (
            <Book
             book = {e}
             key = {e.id}
              listenToBookChange={listenToBookChange}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};
export default Shelf;
