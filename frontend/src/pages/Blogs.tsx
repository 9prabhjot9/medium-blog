import { Appbar } from "@/components/Appbar"
import { BlogCard } from "@/components/BlogCard"

export const Blogs= () => {
   return <div>
        <Appbar />
        <div className="flex justify-center">
        <div className="max-w-xl">
            <BlogCard 
            authorName="Prabhjot Singh"
            title="Tiny Wins, Big Smiles"
            content="Some days, just waking up and showing up is enough. Celebrate the little victories"
            publishedDate="13aug 2025"
            />
            <BlogCard 
            authorName="Prabhjot Singh"
            title="Tiny Wins, Big Smiles"
            content="Some days, just waking up and showing up is enough. Celebrate the little victories"
            publishedDate="13aug 2025"
            />
            <BlogCard 
            authorName="Prabhjot Singh"
            title="Tiny Wins, Big Smiles"
            content="Some days, just waking up and showing up is enough. Celebrate the little victories"
            publishedDate="13aug 2025"
            />
            <BlogCard 
            authorName="Prabhjot Singh"
            title="Tiny Wins, Big Smiles"
            content="Some days, just waking up and showing up is enough. Celebrate the little victories"
            publishedDate="13aug 2025"
            />
        </div>
        </div>
    </div>
}