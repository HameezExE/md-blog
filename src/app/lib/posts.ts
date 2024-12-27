import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDir = path.join(process.cwd(), "posts");

interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
}

export const getAllPosts = () => {
  const fileNames = fs.readdirSync(postDir);

  return fileNames.map((fileName) => {
    const filePath: string = path.join(postDir, fileName);
    const slug = fileName.endsWith(".md") ? fileName.slice(0, -3) : fileName;
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const { data, content } = matter(fileContent);

    return {
      slug,
      ...data,
      content,
    } as Post;
  });
};
