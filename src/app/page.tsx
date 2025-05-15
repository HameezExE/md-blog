import { getAllPosts, Post } from "@/lib/posts";
import PostFilter from "@/components/PostFilter";

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <>
      <PostFilter posts={posts} />
    </>
  );
}

export const revalidate = 3;
// Change to a higher value in production
