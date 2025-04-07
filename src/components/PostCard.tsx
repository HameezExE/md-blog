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
      <div className="border flex">
        <Image src={img} width="200" height={200} alt={title} />
        <div>
          {tags.map((tag) => (
            <p key={tag}>{tag}</p>
          ))}
          <h2>{title}</h2>
          <p>{desc}</p>
          <p>{date}</p>
        </div>
      </div>
    </Link>
  );
}
