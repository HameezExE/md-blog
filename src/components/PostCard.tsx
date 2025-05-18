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
    <Link href={`/post/${slug}`} className="bg-cardBg-light">
      <div className="border flex">
        <Image src={img} width="200" height={200} alt={title} />
        <div>
          <p className="text-primary">{cat}</p>
          <h2>{title}</h2>
          <p>{desc}</p>
          <p>
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
