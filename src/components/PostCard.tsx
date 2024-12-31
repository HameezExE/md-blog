import Link from "next/link";
import Image from "next/image";

interface PostCardProps {
  slug: string;
  title: string;
  date: string;
  desc: string;
  img: string;
  tags: string[];
}

export default function PostCard({
  slug,
  date,
  title,
  desc,
  img,
  tags,
}: PostCardProps) {
  return (
    <Link href={`post/${slug}`}>
      <div className="border">
        <Image src={img} width="200" height={200} alt={title} />
        <p>{date}</p>
        <h2>{title}</h2>
        <p>{desc}</p>
        {tags.map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
      </div>
    </Link>
  );
}
