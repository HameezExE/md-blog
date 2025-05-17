"use client";

import { useState } from "react";
import PostCard from "@/components/PostCard";
import Link from "next/link";

export default function PostFilter({ posts, category }) {
  const categories = [
    ...new Set(posts.map((post) => post.category.toLowerCase())),
  ];

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
      <section className="min-h-[300px] bg-primary mt-10 rounded-xl flex justify-center flex-col items-center">
        <h1></h1>
        <form>
          <div className="relative">
            <input
              type="text"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              className="bg-gray-100 rounded-md h-9 pl-9 pr-4 w-full"
              placeholder="Search for blog posts..."
              autoFocus
            />
            <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-[18px] w-[18px] text-gray-500"
              >
                <path
                  fill="currentColor"
                  d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                />
              </svg>
            </div>
          </div>
        </form>
        <div>
          {categories.map((category) => (
            <Link key={category} href={`/category/${category}`}>
              {category}
            </Link>
          ))}
        </div>
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
