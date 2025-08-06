import { Appbar } from "@/components/Appbar"
import { BlogCard } from "@/components/BlogCard"
import { BlogCardSkeleton } from "@/components/BlogCardSkeleton"
import { useBlogs } from "@/hooks"

export const Blogs = () => {
  const { loading, blogs } = useBlogs()

  if (loading) {
    return (
      <div>
        <Appbar />
        <div className="flex justify-center">
          <div className="space-y-6 mt-6 px-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <BlogCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="space-y-6 mt-6 px-4">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate="13aug 2025"
            />
          ))}
        </div>
      </div>
    </div>
  )
}