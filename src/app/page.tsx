import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <>
      <section>
        <form action="" method="post">
          <input type="text" name="" id="" />
        </form>
      </section>
      <section className="mt-12 grid grid-cols-2 gap-6 max-[500px]:grid-cols-1 sm:grid-cols-1 sm:gap-4 md:grid-cols-1 lg:grid-cols-2">
        {posts.map((post) => (
          <PostCard
            key={post.slug}
            slug={post.slug}
            date={post.date}
            title={post.title}
            desc={post.description}
            img={post.image}
            tags={post.tags}
          />
        ))}
      </section>
    </>
  );
}

export const revalidate = 3;
// Change to a higher value in production
