import { Appbar } from "./Appbar"
import { type Blog } from "@/hooks"
import {  Avatar } from "./BlogCard"

export const BlogPage = ({blog}: {blog: Blog}) => {
    return <div> 
            <Appbar />
            <div className="flex justify-center"> 
            <div className="grid grid-cols-12 px-10 w-full max-w-screen-2xl pt-9">
                <div className= " col-span-8 ">
                    <div className="text-4xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 pt-1.5">
                        Post on 4Aug, 2025
                    </div>
                    <div className="pt-3 text-slate-600">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4">
                    Author
                    <div className="flex w-full">
                        <div className="pr-5 flex flex-col justify-center">     
                            <Avatar 
                            name={blog.author.name || "Anonymous"}
                            size={"small"} />
                        </div>
                        <div>
                            <div className="text-xl font-bold">
                                {blog.author.name || "Anonymous"}
                            </div>
                            <div className="pt-2 text-slate-600">
                                Radnom catch phrase about the author abilty
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
     </div>
}