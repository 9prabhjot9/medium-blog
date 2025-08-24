import { Appbar } from "@/components/Appbar"
import { Link } from "react-router-dom"

export const Profile = () => {
    return (
        <div>
            {/* Topbar (don’t change) */}
            <div className="border-b flex justify-between items-center px-10 py-6">
                <Link to="/blogs">
                    <div className="text-2xl font-semibold cursor-pointer">Medium</div>
                </Link>
                <div className="flex items-center gap-4">
                    {/* You can add icons or profile menu here */}
                </div>
            </div>

            {/* Profile Section */}
            <div className="flex flex-col items-center text-center mt-20 px-4">
                <h1 className="text-3xl font-bold">Profile</h1>
                <p className="text-gray-600 mt-2">I'm a creative PHP webdeveloper</p>

                {/* About + Image + Details */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-10 w-full max-w-5xl">
                    
                    {/* About Me */}
                    <div className="text-left max-w-md px-4">
                        <h2 className="text-xl font-semibold mb-3">About me</h2>
                        <p className="text-gray-700 leading-relaxed">
                            I am an allround web developer. I am a senior programmer with good
                            knowledge of front-end techniques. Vitae sapien pellentesque habitant
                            morbi tristique senectus et. Aenean sed adipiscing diam donec adipiscing
                            tristique risus.
                        </p>
                        <p className="text-sm text-gray-500 mt-2">Image by Freepik</p>
                    </div>

                    {/* Profile Image */}
                    <div className="my-8 md:my-0">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Profile"
                            className="w-40 h-40 rounded-full object-cover shadow-lg"
                        />
                    </div>

                    {/* Details */}
                    <div className="text-left max-w-md px-4">
                        <h2 className="text-xl font-semibold mb-3">Details</h2>
                        <p><span className="font-semibold">Name: </span>Hunter Norton</p>
                        <p><span className="font-semibold">Age: </span>33 years</p>
                        <p><span className="font-semibold">Location: </span>'s-Hertogenbosch, The Netherlands, Earth</p>
                        <div className="flex gap-4 mt-4">
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}