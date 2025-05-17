import { generateStaticParams } from "@/app/post/[slug]/page";
import { getAllPosts, Post } from "@/lib/posts";
import PostFilter from "@/components/PostFilter";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const websiteUrl = process.env.WEBSITE_URL;

  return {
    title: `${slug} Tips, Guides, and News`,
    description: `Explore my collection of articles about ${slug}, covering tips, guides, and news by ${process.env.NAME}`,
    alternates: {
      canonical: `${websiteUrl}/category/${slug}`,
    },
    openGraph: {
      type: "website",
      title: `${slug} Tips, Guides, and News`,
      description: `Explore my collection of articles about ${slug}, covering tips, guides, and news by ${process.env.NAME}`,
      url: `${websiteUrl}/category/${slug}`,
      images: [
        {
          url: "/og-default.png",
          width: 1200,
          height: 630,
          alt: `${slug} Tips, Guides, and News`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${slug} Tips, Guides, and News`,
      description: `Explore my collection of articles about ${slug}, covering tips, guides, and news by ${process.env.NAME}`,
      images: ["/og-default.png"],
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const posts = await getAllPosts();
  return <PostFilter posts={posts} category={slug} />;
}

// generateStaticParams and metadata
