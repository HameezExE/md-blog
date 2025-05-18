import Link from "next/link";
import Image from "next/image";

interface PostCardProps {
  slug: string;
  title: string;
  date: string;
  desc: string;
  img: string;
  cat: string;
}

export default function PostCard({
  slug,
  date,
  title,
  desc,
  img,
  cat,
}: PostCardProps) {
  return (
    <Link
      href={`/post/${slug}`}
      className="h-full bg-cardBg-light flex flex-col overflow-hidden px-3 py-3 rounded-lg"
    >
      <div className="flex">
        <Image
          src={img}
          width="200"
          height={200}
          alt={title}
          className="rounded-lg"
        />
        <div className="ml-6 flex flex-col">
          <div>
            <p className="text-foreground-dark text-xs font-semibold uppercase">
              {cat}
            </p>
          </div>
          <h2 className="font-heading text-lg leading-[1.2]  font-semibold text-foreground-light mb-0.5">
            {title}
          </h2>
          <p className="text-sm text-muted-light mb-2">{desc}</p>
          <p className="text-xs font-semibold text-foreground-light">
            {new Date(date).getDate() +
              ", " +
              new Date(date).toLocaleString("default", { month: "long" }) +
              " " +
              new Date(date).getFullYear()}
          </p>
        </div>
      </div>
    </Link>
  );
}
