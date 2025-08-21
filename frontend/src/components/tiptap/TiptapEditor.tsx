import { useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Underline from "@tiptap/extension-underline"
import Superscript from "@tiptap/extension-superscript"
import Subscript from "@tiptap/extension-subscript"
import MyEditor from "../MyEditor"

export const TiptapEditor = ({
  content,
  onChange,
}: {
  content: string
  onChange: (value: string) => void
}) => {
  const editor = useEditor({
    extensions: [StarterKit, Underline, Superscript, Subscript],
    content,
    onUpdate({ editor }) {
      onChange(editor.getText()) // keep formatting
    },
  })

  if (!editor) return null

  return (
    <div className="border p-4 rounded min-h-[300px] bg-white">
      {/* Pass editor into MyEditor */}
      <MyEditor editor={editor} />
    </div>
  )
}