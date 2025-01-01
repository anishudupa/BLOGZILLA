import { z } from "zod";

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
import DOMPurify from "dompurify";
import Editor from "./Editor";
import API from "@/api/axios";
import { toast } from "@/hooks/use-toast";

// TODO: navigate to user page after creating BLOG
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

	const categories = [
		"Food",
		"Tech",
		"Politics",
		"Culture",
		"Programming",
		"Film",
	];

	const submitBlog = async (data: TBlogSchema) => {
		const sanitizedData = DOMPurify.sanitize(data.content);
		data.content = sanitizedData;
		data.slug = data.slug.toLowerCase().split(" ").join("-");
		await API.post("/blogs", data);
		toast({ title: "Hooray!!", description: "Blog created successfully	" });
	};

	return (
		<>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(submitBlog)}
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
					<FormField
						control={form.control}
						name="content"
						render={({ field }) => (
							<FormItem className="w-full">
								<FormControl>
									<Editor description={field.name} onChange={field.onChange} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						type="submit"
						className="text-lg p-4"
						disabled={form.formState.isSubmitting}>
						Create
					</Button>
				</form>
			</Form>
		</>
	);
}
