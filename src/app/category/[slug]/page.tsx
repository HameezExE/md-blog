import { generateStaticParams } from "@/app/post/[slug]/page";
import { getAllPosts, Post } from "@/lib/posts";
import PostFilter from "@/components/PostFilter";

export default async function Category({ params }: Promise<{ slug: string }>) {
  const { slug } = await params;
  const posts = await getAllPosts();
  return <PostFilter posts={posts} category={slug} />;
}

// generateStaticParams and metadata
