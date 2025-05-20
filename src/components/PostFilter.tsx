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
      <section className="bg-primary bg-opacity-70 ">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-6 xl:px-6 flex justify-center flex-col items-center min-h-[250px]">
          <h1 className="max-w-[90%] md:max-w-[75%] text-white text-[22px] md:text-[28px] text-center font-heading font-semibold mb-5">
            Discover interesting articles about Topic A, Topic B, and emerging
            trends in Topic C. Minimal, fast, and insightful.
          </h1>
          <form>
            <div className="relative">
              <input
                type="text"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                className="bg-gray-100 rounded-md h-9 pl-12 pr-8 w-full focus:ring-primary focus:outline-none focus:ring-2"
                placeholder="Search for blog posts..."
                autoFocus
              />
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
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
        </div>
      </section>
      <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-6 xl:px-6">
        <div className="mt-8 space-x-2 space-y-2 text-center py-1.5 uppercase text-sm font-semibold text-foreground-light border-b-[1.5px] border-gray-300">
          <Link
            href={"/"}
            className={`px-4 py-1 hover:underline ${
              !category
                ? "border-b-2 border-primary text-primary"
                : "hover:bg-gray-200"
            }`}
          >
            all posts
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/category/${cat}`}
              className={`px-4 py-1.5 hover:underline ${
                category === cat && "border-b-2 border-primary text-primary"
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>
      <section className="mt-12 grid grid-cols-2 gap-6 max-[500px]:grid-cols-1 sm:grid-cols-1 sm:gap-4 md:grid-cols-1 lg:grid-cols-2 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-6 xl:px-6">
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
