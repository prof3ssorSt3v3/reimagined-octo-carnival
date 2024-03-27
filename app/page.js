import FindCategoryButton from './components/FindCategoryButton';
import data from './data/books.json';

export default function Home() {
  return (
    <div>
      <h1>Choose a category</h1>
      <form className="px-2 py-4">
        <select className="dark:bg-slate-600 dark:text-white px-1 py-2">
          {data.categories.map((cat, index) => {
            return (
              <option className="" key={index} value={encodeURIComponent(cat)}>
                {cat}
              </option>
            );
          })}
        </select>
        <FindCategoryButton />
      </form>
    </div>
  );
}
