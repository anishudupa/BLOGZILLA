import { create } from "zustand";
import { IBlog } from "./ublog.store";

export interface IRandomSingleBlog extends IBlog {
	author: string;
}
interface IRandomBlogs {
	blogs: IRandomSingleBlog[] | [];
	getRandomBlogs: (limit: string, offset: string) => Promise<void>;
}
