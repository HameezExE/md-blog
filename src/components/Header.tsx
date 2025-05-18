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
      <div className="flex justify-between min-h-16 items-center mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-6 xl:px-6 ">
        <Link href={"/"} className="font-heading font-semibold text-lg">
          {process.env.NAME}
        </Link>
        <nav className="text-sm">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.href} className="p-4">
              {link.name}
            </Link>
          ))}
        </nav>
        <button className="h-9 bg-primary px-4 rounded-[6px] text-sm font-medium text-foreground-dark">
          Contact
        </button>
      </div>
    </header>
  );
}
