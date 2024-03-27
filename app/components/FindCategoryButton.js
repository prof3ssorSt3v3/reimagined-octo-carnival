'use client';

import { useRouter } from 'next/navigation';

const FindCategoryButtonButton = () => {
  const router = useRouter();

  function handleClick(ev) {
    //this component happens on the server
    ev.preventDefault();
    console.log('clicked the button');
    let select = document.querySelector('form select');
    if (!select) return;
    let cat = select.value;
    if (!cat) return;
    router.push(`/${cat}`);
  }

  return (
    <div>
      <button className="py-1 px-4 my-4 bg-blue-500 text-white" onClick={handleClick}>
        Load Category
      </button>
    </div>
  );
};

export default FindCategoryButtonButton;
