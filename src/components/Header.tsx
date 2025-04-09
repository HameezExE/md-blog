import Link from "next/link";

export default function Header() {
  return (
    <header className="flex">
      <h1>Blog</h1>
      <nav>
        <ul className="flex">
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
        </ul>
      </nav>
      <button>Call to Action</button>
    </header>
  );
}
