import { Link } from "react-router-dom"


interface BlogCardProps {
    authorName: string
    title: string
    content:    string
    publishedDate: string
    id: string
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {

    return <Link to={`/blog/${id}`}> 
    <div className="border-b pb-4 p-5 w-screen max-w-screen-md cursor-pointer"> 
    <div className="flex items-center gap-1">
        <div className="flex justify-center flex- pl-2">    
            <Avatar name={authorName} size="small"/>
        </div>
      <div className="pl-0.5 " >
         {authorName}  
        </div> 
        <div className="flex justify-center flex-col pl-1">
            <Circle />
        </div>
        <div className="font-extralight text-slate-600">
            {publishedDate}
        </div>
    </div>
    <div className="font-bold text-2xl pt-2">
        {title}
    </div>
    <div className="text-slate-700 pt-1">
        {content.slice(0, 100) + "..."}
    </div>
    <div className=" text-slate-500 font-light pt-5">
        {`${Math.ceil(content.length / 100)} minutes`}
    </div>
    </div>
    </Link>
}

function Circle() {
    return <div className="h-0.5 w-0.5 rounded-full bg-slate-500">
    </div>
}

export function Avatar ({ name, size = "small" }: { name: string, size: "small" | "big"}) {
    return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-300 rounded-full dark:bg-gray-600 ${size === "small" ? "w-8 h-8" : "w-11 h-11"}`}>
        
    <span className={`${size === "small" ? "text-sm" : "text-md"} font-medium text-gray-600 dark:text-gray-300`}>{(name.split(" ") [0][0] + (name.split(" ")[1]?.[0] || "")).toUpperCase()}</span>
</div>

}