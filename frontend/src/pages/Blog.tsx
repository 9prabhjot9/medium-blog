import { BlogPage } from "@/components/BlogPage"
import { useBlog } from "@/hooks"
import { useParams } from "react-router-dom"
import { Spinner } from "@/components/ui/spinner"

export const Blog = () => {
    const { id } = useParams()
    const {loading, blog} = useBlog({
        id: id || ""
    })
    if(loading || !blog){  
        return <div className="h-screen flex flex-col justify-center">
            <div className="flex justify-center">
                <Spinner />
            </div>
        </div>
    }
    return <div>
       <BlogPage blog={blog}/>
    </div>
}