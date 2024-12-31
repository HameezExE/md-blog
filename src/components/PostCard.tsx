import Link from "next/link";

interface PostCardProps {
  slug: string;
  title: string;
}

export default function PostCard({ slug, title }: PostCardProps) {
  return (
    <Link href={`post/${slug}`}>
      <div className="border">
        <h2>{title}</h2>
        <p></p>
      </div>
    </Link>
  );
}
