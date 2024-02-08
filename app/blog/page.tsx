import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Link from "next/link";

import { Icons } from "@/components/icons";
import { formatDate } from "@/lib/utils";

export const metadata = {
  title: "Soe Moe's Blog",
};

export default async function HomePage() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl lg:text-5xl">
            {`Soe Moe's Blog`}
          </h1>
          <p className="text-xl text-muted-foreground">
            Code, stories, and thoughts.
          </p>
        </div>
      </div>
      <hr className="my-8" />
      {posts?.length ? (
        <div className="grid gap-10">
          {posts.map((post, index) => (
            <article
              key={post._id}
              className="group relative flex flex-col space-y-2"
            >
              <h2 className="text-2xl font-extrabold">{post.title}</h2>
              {post.description && <p className="">{post.description}</p>}
              {post.date && (
                <div className="flex flex-row gap-1 items-center">
                  <Icons.calendar className="text-muted-foreground" size={12} />
                  <span className="text-sm text-muted-foreground">
                    {formatDate(post.date)}
                  </span>
                </div>
              )}
              <Link href={post.slug} className="absolute inset-0">
                <span className="sr-only">View Article</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>No posts published.</p>
      )}
    </div>
  );
}
