'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = ({ params }) => {
  //show the link back home if NOT on home page
  const path = usePathname();

  return (
    <header className="flex items-center justify-between p-8">
      <h1 className="text-3xl text-blue-300">Books `B` Us</h1>
      {path !== '/' && (
        <p>
          <Link href="/">Start again</Link>
        </p>
      )}
    </header>
  );
};

export default Header;
