import { title } from "process";
import { z } from "zod";

// type TBlog = {
// 	title: string;
// 	content: string;
// 	excerpt: string;
// 	slug: string;
// 	author: unknown;
// };

export const createBlogSchema = z.object({
	body: z.object({
		title: z.string().min(3, "Title must be porvided"),
		content: z.string().min(3, "Content must be provided"),
		excerpt: z.string().optional(),
		slug: z
			.string()
			.regex(new RegExp("^[a-z0-9]+(?:-[a-z0-9]+)*$"), "Invalid slug"),
	}),
});

export const updateBlogSchema = z.object({
	body: z.object({
		title: z.string().min(3, "Title must be porvided"),
		content: z.string().min(3, "Content must be provided"),
		excerpt: z.string().optional(),
		slug: z
			.string()
			.regex(new RegExp("^[a-z0-9]+(?:-[a-z0-9]+)*$"), "Invalid slug"),
	}),
	params: z.object({
		id: z.string().min(1, "Blog id must be provided"),
	}),
});

export const getSingleBlogSchema = z.object({
	params: z.object({
		id: z.string().min(1, "Blog id is required"),
	}),
});
