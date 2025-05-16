import { getAllPosts } from "@/lib/posts";
import { remark } from "remark";
import html from "remark-html";
import { notFound } from "next/navigation";
import Image from "next/image";
import "./typography.css";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

async function fetchPosts(slug: string) {
  const posts = getAllPosts();
  return posts.find((post) => {
    return post.slug == slug;
  });
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const post = await fetchPosts(slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested post could not be found.",
    };
  }

  const websiteUrl = process.env.WEBSITE_URL;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `${websiteUrl}/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      url: `${websiteUrl}/${post.slug}`,
      images: [
        {
          url: post.image || "/og-default.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image || "/og-default.png"],
    },
  };
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
    <div className="mt-12">
      <section className="flex">
        <Image alt={post.title} src={post.image} width={650} height={1200} />
        <div className="ml-12">
          <h1>{post.title}</h1>
          <p>{post.description}</p>
        </div>
      </section>

      <article className="mx-auto mt-12 max-w-[700px]">
        <div dangerouslySetInnerHTML={{ __html: postContent }}></div>
      </article>
    </div>
  );
}
