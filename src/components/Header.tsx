import Link from "next/link";

export default function Header() {
  const navLinks = [
    { name: "Blog", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
  ];
  return (
    <header className="border-b-2 border-gray-300 text-foreground-light bg-primary-light">
      <div className="flex justify-between min-h-16 items-center mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-6 xl:px-6">
        <Link href={"/"} className="font-heading font-semibold text-lg">
          {process.env.NAME}
        </Link>
        <nav className="text-sm hidden md:block">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.href} className="p-4">
              {link.name}
            </Link>
          ))}
        </nav>
        <button className="h-9 bg-primary px-4 rounded-[6px] text-sm font-medium text-foreground-dark hidden md:block">
          Contact
        </button>
        <nav className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
          </svg>
        </nav>
      </div>
    </header>
  );
}
