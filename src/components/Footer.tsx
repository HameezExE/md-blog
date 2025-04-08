import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-5 text-center">
      Crafted with ❤️ by
      <Link href="https://hameez.dev"> HameezExE</Link>. All Rights Reserved.
      <br /> Built in the open.{" "}
      <Link href="https://github.com/HameezExE/md-blog">
        Contribute or just browse the code
      </Link>
      .
    </footer>
  );
}
