import { Appbar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  // store it in state
  // store it directly here
  // store it in a content vatriable
  //  create own custom hooks called useBlog
  const { loading, blogs } = useBlogs();
  if (loading) {
    return (
      <div>
        <Appbar />
        <div className="flex justify-center">
          <div>
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Appbar />
      {blogs.map((blog) => (
        <BlogCard
          id={blog.id}
          authorName={blog.author.name}
          content={blog.content}
          title={blog.title}
          publishedDate={blog.publishedDate}
        />
      ))}
    </div>
  );
};
