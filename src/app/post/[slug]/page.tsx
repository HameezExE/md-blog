import { getAllPosts } from "@/lib/posts";
import { remark } from "remark";
import html from "remark-html";
import { notFound } from "next/navigation";
import Image from "next/image";
import "./typography.css";
import Link from "next/link";

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
    <div className="mt-10">
      <article className="mx-auto mt-12 max-w-[700px] justify-center items-center">
        <section className="flex flex-col">
          <div className="text-center">
            <Link
              href={`/category/${post.category}`}
              className="cursor-pointer rounded-md bg-primary px-3 py-1 text-foreground-dark text-[11px] font-semibold uppercase"
            >
              {post.category}
            </Link>
            <h1 className="mt-3 mb-2">{post.title}</h1>
            <p>{post.description}</p>
          </div>
          <Image
            alt={post.title}
            src={post.image}
            width={700}
            height={426}
            className="rounded-xl"
          />
        </section>
        <div dangerouslySetInnerHTML={{ __html: postContent }}></div>
      </article>
    </div>
  );
}
