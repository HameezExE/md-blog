import { getAllPosts } from "../lib/posts";
import PostCard from "../components/PostCard";

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.slug} slug={post.slug} title={post.title} />
      ))}
    </div>
  );
}

export const revalidate = 3;
// Change to a higher value in production
