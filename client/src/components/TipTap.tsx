import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
export default function TipTap() {
	const editor = useEditor({
		extensions: [
			StarterKit.configure({
				heading: {
					levels: [1, 2],
				},
			}),
		],
		content: "hello",
		editorProps: {
			attributes: {
				class:
					"h-[500px] w-full sm:w-[700px] sm:h-[500px] border p-2 rounded-md overflow-auto light:bg-white",
			},
		},
	});

	return <EditorContent className="w-full sm:w-[700px]" editor={editor} />;
}
