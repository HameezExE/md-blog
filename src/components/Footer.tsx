import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-5 text-center border-t-2 border-gray-300 text-foreground-light bg-cardBg-light text-sm mt-10">
      Crafted with ❤️ by
      <Link href="https://hameez.dev"> Hameez</Link> •{" "}
      <Link href="https://github.com/HameezExE/md-blog">Browse the code</Link>
    </footer>
  );
}
