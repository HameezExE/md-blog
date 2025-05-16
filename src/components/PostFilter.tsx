"use client";

import { useState } from "react";
import PostCard from "@/components/PostCard";

export default function PostFilter({ posts, category }) {
  const [term, setTerm] = useState("");

  const byCategory = category
    ? posts.filter(
        (post) => post.category.toLowerCase() === category.toLowerCase()
      )
    : posts;

  const search = term.toLowerCase();

  const filteredPosts = byCategory.filter(
    (post) =>
      post.title.toLowerCase().includes(search) ||
      post.description.toLowerCase().includes(search) ||
      post.category.toLowerCase().includes(search)
  );

  return (
    <>
      <section>
        <form>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="bg-green-200"
          />
        </form>
      </section>
      <section className="mt-12 grid grid-cols-2 gap-6 max-[500px]:grid-cols-1 sm:grid-cols-1 sm:gap-4 md:grid-cols-1 lg:grid-cols-2">
        {filteredPosts.map((post) => (
          <PostCard
            key={post.slug}
            slug={post.slug}
            date={post.date}
            title={post.title}
            desc={post.description}
            img={post.image}
            cat={post.category}
          />
        ))}
      </section>
    </>
  );
}

export const revalidate = 3;
// Change to a higher value in production
