import Link from 'next/link';
import data from '../../data/books.json';

const page = (props) => {
  let category = decodeURIComponent(props.params.category);
  let id = decodeURIComponent(props.params.id);

  let { title, author } = data.books.find((bk) => bk.id === id);

  return (
    <div data-ref={id}>
      <h1 className="py-2 text-3xl text-amber-300">{title}</h1>
      <h2 className="py-2 text-xl text-amber-500">{author}</h2>
      <p className="py-2 text-lg text-amber-700">From {category}</p>
      <hr />
      <p className="py-4">
        <Link href={'/' + encodeURIComponent(category)}>Back to &ldquo;{category}&rdquo; List</Link>
      </p>
    </div>
  );
};

export default page;
