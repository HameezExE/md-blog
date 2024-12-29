import { getAllPosts } from "../lib/posts";

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <div>
      {posts.map((post) => (
        <li key={post.slug}>
          {post.title} {post.slug}
        </li>
      ))}
    </div>
  );
}

export const revalidate = 3;
// Change to a higher value in production
