import { generateStaticParams } from "@/app/post/[slug]/page";

export default async function Category({ params }: Promise<{ slug: string }>) {
  const { slug } = await params;
  return <div>{slug}</div>;
}

// generateStaticParams and metadata
