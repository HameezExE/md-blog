import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-5 text-center border-t-2 border-gray-300 text-foreground-light bg-cardBg-light text-sm mt-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-6 xl:px-6">
      Crafted with ❤️ by
      <Link href="https://hameez.dev"> Hameez</Link>. All Rights Reserved.
      <br /> Built in the open.{" "}
      <Link href="https://github.com/HameezExE/md-blog">
        Contribute or just browse the code
      </Link>
      .
    </footer>
  );
}
