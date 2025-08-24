import { Editor, EditorContent, EditorContext } from "@tiptap/react"
import { MarkButton } from "@/components/tiptap-ui/mark-button"

export default function MyEditor({ editor }: { editor: Editor }) {
  return (
    
    <EditorContext.Provider value={{ editor }}>
      {/* Toolbar */}
      <div className="flex gap-2 mb-2">
        <MarkButton editor={editor} type="bold" text="Bold" showShortcut />
        <MarkButton editor={editor} type="italic" text="Italic" showShortcut />
        <MarkButton editor={editor} type="strike" text="Strike" />
        <MarkButton editor={editor} type="code" text="Code" />
        <MarkButton editor={editor} type="underline" text="Underline" />
        <MarkButton editor={editor} type="superscript" text="Sup" />
        <MarkButton editor={editor} type="subscript" text="Sub" />
      </div>

      {/* Editor */}
      
      <EditorContent editor={editor} role="presentation" className="outline-1 focus:outline-none" />
      
    </EditorContext.Provider>
  )
}