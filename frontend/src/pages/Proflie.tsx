import { Appbar } from "@/components/Appbar"
import { Link } from "react-router-dom"

export const Profile = () => {
    return <div>
        <div className="border-b flex justify-between items-center px-10 py-5">

      <Link to="/blogs">
        <div className="text-2xl font-semibold cursor-pointer">Medium</div>
      </Link>

      <div className="flex items-center gap-4">
</div>
</div>
        Hello from profile
    </div>
}