import { getAllPosts } from "@/lib/posts";
import { remark } from "remark";
import html from "remark-html";
import { notFound } from "next/navigation";

async function fetchPosts(slug: string) {
  const posts = getAllPosts();
  return posts.find((post) => {
    return post.slug == slug;
  });
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const post = await fetchPosts(slug);

  if (!post) notFound();

  const postContent = await remark()
    .use(html)
    .process(post.content)
    .then((res) => res.toString());

  return (
    <article>
      <div dangerouslySetInnerHTML={{ __html: postContent }}></div>
    </article>
  );
}
