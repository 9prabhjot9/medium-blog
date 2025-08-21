import { useState } from "react"
import { TiptapEditor } from "@/components/tiptap/TiptapEditor"
import { useNavigate } from "react-router-dom"
import { Appbar } from "@/components/Appbar"
import PublishButton from "@/components/ui/publishButton"
import axios from "axios"
import { BACKEND_URL } from "@/config"
// import MyEditor from "@/components/MyEditor"


export default function Publish() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const navigate = useNavigate()

  const handlePublish = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await axios.post(`${BACKEND_URL}/api/v1/blog`, {
        title,
        content: description, // Assuming your backend expects "content"
      }, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
      })

      navigate("/blogs")
    } catch (err) {
      console.error("Error publishing blog:", err)
      // optionally show user feedback
    }
  }

  return (
    <div>
      <Appbar />
      <div className="max-w-4xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-4">Write Your Blog</h1>

        <form id="blog-form" onSubmit={handlePublish} className="flex flex-col gap-4">
          <input
            className="text-xl border px-4 py-2 rounded"
            placeholder="Enter Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {/* <MyEditor  /> */}
          <TiptapEditor content={description} onChange={setDescription} />

          {/* ✅ Button inside the form and triggers submit */}
          <div className="mt-4 self-start">
            <PublishButton />
          </div>
        </form>
      </div>
    </div>
  )
}