import { Avatar } from "./BlogCard"

export const Appbar = () => {
    return <div className="border-b flex justify-between px-10 py-5">
        <div className="text-2xl font-semibold flex justify-center flex-col ">
            Medium
        </div>
        <div>
            <Avatar 
                name="Prabhjot"
                size={"big"}
            />
        </div>
    </div>
}