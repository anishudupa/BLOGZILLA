import { create } from "zustand";
import API from "../api/axios";

export interface IBlog {
	title: string;
	content: string;
	excerpt: string;
	slug: string;
	category?: string;
}

interface UBlogStore {
	blogs: IBlog[] | [];
	getBlogs: () => Promise<void>;
	createBlog: (blog: IBlog) => Promise<void>;
	getSingleBlog: (id: string) => Promise<void>;
	updateBlog: (id: string) => Promise<void>;
	deleteBlog: (id: string) => Promise<void>;
}

export const useUserBlogs = create<UBlogStore>()((set) => ({
	blogs: [],
	getBlogs: async () => {
		const data = await API.get("/blogs");
		console.log(data);
	},
	createBlog: async (blog) => {},
	updateBlog: async (id) => {},
	deleteBlog: async (id) => {},
	getSingleBlog: async (id) => {},
}));
