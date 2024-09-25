// src/app/components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">MyApp</h1>
        <div>
          <Link href="/" className="text-white mx-2">
            Home
          </Link>
          <Link href="/signin" className="text-white mx-2">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
