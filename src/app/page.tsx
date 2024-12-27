import { getAllPosts } from "./lib/posts";

export default function Blog() {
  const posts = getAllPosts();
  return (
    <div>
      {posts.map((post) => {
        return (
          <li key={post.slug}>
            {post.title} {post.slug}
          </li>
        );
      })}
    </div>
  );
}
