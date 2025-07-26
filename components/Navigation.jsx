import Link from "next/link";

const Navigation = () => {
  return (
    <header className="grid grid-cols-2 p-6">
      <div className="text-green-500">Bibek logo</div>
      <nav>
        <ul className="flex justify-around gap-4 ">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/service">Service</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
