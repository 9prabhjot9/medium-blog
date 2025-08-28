import { Avatar } from "./BlogCard"
import { Link, useNavigate } from "react-router-dom"
import NewBlogButton from "./ui/NewBlogButton"
import { BookOpen } from "lucide-react"

export const Appbar = () => {
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
        <div className="flex items-center gap-2 text-2xl font-semibold cursor-pointer">
          <BookOpen className="h-6 w-6 text-black" />
          <span>BlogHub</span>
        </div>
      </Link>
      <div className="flex items-center gap-4">

        <NewBlogButton 
        label="New Blog +"
        onClick={handleClick2}/>



        <button className="cursor-pointer " onClick={handleClick} >
        <Avatar name={username} size="big" />
        </button>
      </div>
    </div>
  )
}