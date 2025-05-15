"use client";

import { useState } from "react";
import PostCard from "@/components/PostCard";

export default function PostFilter({ posts }) {
  const [term, setTerm] = useState("");

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(term.toLowerCase()) ||
      post.description.toLowerCase().includes(term.toLowerCase()) ||
      post.category.toLowerCase().includes(term.toLowerCase())
  );

  const handleSearch = (e) => {};

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
