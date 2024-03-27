import Link from 'next/link';
import data from '../data/books.json';

const page = (props) => {
  let category = decodeURIComponent(props.params.category);
  //get rid of the %20 etc

  let books = data.books.filter((book) => book.category === category);
  //extract an array of books where the category value matches

  return (
    <div>
      <h2 className="py-4 text-2xl">List of &ldquo;{category}&rdquo; titles</h2>
      <ol className="py-2">
        {books.map((book) => {
          let url = '/' + encodeURIComponent(category) + '/' + book.id;
          return (
            <li key={book.id} className="py-2">
              <Link className="py-2 text-2xl text-amber-500" href={url}>
                {book.title}
              </Link>
            </li>
          );
        })}
      </ol>
      {books.length === 0 && <p>No books in this category</p>}
    </div>
  );
};

export default page;
