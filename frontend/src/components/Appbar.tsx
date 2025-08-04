import { Avatar } from "./BlogCard"
import { Link } from "react-router-dom"
import PublishButton from "./ui/publishButton"

export const Appbar = () => {
    return <div className="border-b flex justify-between items-center px-10 py-5">
        <Link to={'/blogs'}>
            <div className="text-2xl font-semibold flex justify-center flex-col cursor-pointer">
                Medium
            </div>
         </Link>
        <div className="flex items-center gap-4">
            <Link to={'/publish'} > 
             <PublishButton />
            </Link>
            <Avatar 
                name="Prabhjot"
                size={"big"}
            />
        </div>
    </div>
}