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
					"w-[400px] h-[500px] sm:w-[700px] sm:h-[500px] border bg-gray-800 p-2",
			},
		},
	});

	return (
		<>
			<div className="p-4">
				<EditorContent editor={editor} />
			</div>
		</>
	);
}
