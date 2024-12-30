import { z } from "zod";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Bold from "@tiptap/extension-bold";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Heading from "@tiptap/extension-heading";
import Highlight from "@tiptap/extension-highlight";
import {
	Bold as BoldIcon,
	Italic,
	Underline as UnderlineIcon,
	AlignCenter,
	Highlighter,
	AlignLeft,
} from "lucide-react";
import { Button } from "./ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function TipTap() {
	const blogSchema = z.object({
		title: z.string().min(3, "Title must be porvided"),
		content: z.string().min(3, "Content must be provided"),
		excerpt: z.string().optional(),
		slug: z.string(),
		category: z
			.enum(["Food", "Tech", "Politics", "Culture", "Programming", "Film", ""])
			.optional(),
	});
	type TBlogSchema = z.infer<typeof blogSchema>;

	const form = useForm<TBlogSchema>({
		resolver: zodResolver(blogSchema),
		defaultValues: {
			title: "",
			category: "",
			content: "",
			excerpt: "",
			slug: "",
		},
	});

	const editor = useEditor({
		extensions: [
			StarterKit.configure(),
			Bold,
			Underline,
			TextAlign.configure({
				types: ["heading", "paragraph"],
			}),
			Heading.configure({
				levels: [1, 2, 3],
			}),
			Highlight,
		],
		content: "hello",
		editorProps: {
			attributes: {
				class:
					"h-[500px] w-full sm:w-[900px] sm:h-[350px] border p-2 rounded-md overflow-auto light:bg-white outline-none border-white prose max-w-none [&_ol]:list-decimal [&_ul]:list-disc",
			},
		},
	});

	const categories = [
		"Food",
		"Tech",
		"Politics",
		"Culture",
		"Programming",
		"Film",
	];

	if (!editor) return null;
	const createBlog = () => {
		const html = editor.getHTML();
	};

	return (
		<>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(createBlog)}
					className="flex flex-col gap-2">
					<div className="flex w-[900px] gap-4 p-2">
						<FormField
							control={form.control}
							name="title"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Title</FormLabel>
									<FormControl>
										<Input placeholder="title" {...field} className="w-full" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="slug"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Slug</FormLabel>
									<FormControl>
										<Input placeholder="slug" {...field} className="w-full" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="flex w-[900px] gap-4 p-2">
						<FormField
							control={form.control}
							name="excerpt"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>excerpt</FormLabel>
									<FormControl>
										<Input
											placeholder="excerpt"
											{...field}
											className="w-full"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="category"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Category</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select the category of the blog" />
											</SelectTrigger>
										</FormControl>
										<SelectContent className="w-full">
											{categories.map((category, ind) => (
												<SelectItem value={category} key={ind}>
													{category}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="flex flex-col gap-2">
						<div className="flex gap-3 border rounded-sm p-2 border-white w-[900px]">
							<BoldIcon
								className={`hover:cursor-pointer ${
									editor.isActive("bold") ? "is-active" : ""
								}`}
								onClick={() => editor.chain().focus().toggleBold().run()}
							/>
							<Italic
								className={`hover:cursor-pointer ${
									editor.isActive("italic") ? "is-active" : ""
								}`}
								onClick={() => editor.chain().focus().toggleItalic().run()}
							/>
							<UnderlineIcon
								className={`hover:cursor-pointer ${
									editor.isActive("underline") ? "is-active" : ""
								}`}
								onClick={() => editor.chain().focus().toggleUnderline().run()}
							/>
							<AlignCenter
								className={`hover:cursor-pointer ${
									editor.isActive({ textAlign: "center" }) ? "is-active" : ""
								}`}
								onClick={() =>
									editor.chain().focus().setTextAlign("center").run()
								}
							/>
							<AlignLeft
								className={`hover:cursor-pointer ${
									editor.isActive({ textAlign: "left" }) ? "is-active" : ""
								}`}
								onClick={() =>
									editor.chain().focus().setTextAlign("left").run()
								}
							/>
							<Highlighter
								className={`hover:cursor-pointer ${
									editor.isActive("highlight") ? "is-active" : ""
								}`}
								onClick={() => editor.chain().focus().toggleHighlight().run()}
							/>
						</div>
						<EditorContent className="w-full sm:w-[700px]" editor={editor} />
					</div>
					<Button type="submit" className="text-lg">
						Create
					</Button>
				</form>
			</Form>
		</>
	);
}
