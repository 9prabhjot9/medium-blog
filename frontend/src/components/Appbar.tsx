import { Avatar } from "./BlogCard"
import { Link, useLocation } from "react-router-dom"
import NewBlogButton from "./ui/NewBlogButton"

export const Appbar = () => {
  const location = useLocation()
  const pathname = location.pathname

  return (
    <div className="border-b flex justify-between items-center px-10 py-5">
      {/* Left: Logo */}
      <Link to="/blogs">
        <div className="text-2xl font-semibold cursor-pointer">Medium</div>
      </Link>

      {/* Right: Avatar + Button */}
      <div className="flex items-center gap-4">
        {pathname.startsWith("/blogs") && (
          <Link to="/publish">
            <NewBlogButton label="New Blog +" />
          </Link>
        )}
        <Avatar name="Prabhjot" size="big" />
      </div>
    </div>
  )
}