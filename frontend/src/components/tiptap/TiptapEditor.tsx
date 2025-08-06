import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

export const TiptapEditor = ({
  content,
  onChange,
}: {
  content: string
  onChange: (value: string) => void
}) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    onUpdate({ editor }) {
      onChange(editor.getHTML())
    },
  })

  return (
    <div className="border p-4 rounded min-h-[300px] bg-white">
      <EditorContent editor={editor} />
    </div>
  )
}