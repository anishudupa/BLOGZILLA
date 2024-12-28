import { create } from "zustand";
import { IBlog } from "./ublog.store";

interface IRandomBlogs {
	blogs: IBlog[] | [];
	getRandomBlogs: (limit: string, offset: string) => Promise<void>;
}
