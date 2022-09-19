import Book from "./book";
const Shelf = ({ book, ShelfName }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{ShelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {book.map((e) => (
            <Book
              key={e.id}
              bookName={e.title}
              author={e.authors.length === 1 ? e.authors : e.authors.join()}
              bookcover={e.imageLinks.thumbnail}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};
export default Shelf;
