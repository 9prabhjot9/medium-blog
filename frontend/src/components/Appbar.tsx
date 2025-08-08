import { Avatar } from "./BlogCard"
import { Link, useLocation, useNavigate } from "react-router-dom"
import NewBlogButton from "./ui/NewBlogButton"




export const Appbar = () => {
  const location = useLocation()
  const pathname = location.pathname
  const username = localStorage.getItem("username") || "Guest"
  const navigate = useNavigate()

  function handleClick(){
  navigate("/Profile")
}
  function handleClick2(){
    navigate("/publish")
  }

  return (
    <div className="border-b flex justify-between items-center px-10 py-5">

      <Link to="/blogs">
        <div className="text-2xl font-semibold cursor-pointer">Medium</div>
      </Link>

      <div className="flex items-center gap-4">
        <button className="bg-amber-950" onClick={handleClick2}>
          New Blog
        </button>
        <button className="cursor-pointer " onClick={handleClick} >
        <Avatar name={username} size="big" />
        </button>
      </div>
    </div>
  )
}