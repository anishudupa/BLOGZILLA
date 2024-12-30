import API from "@/api/axios";
import BlogCard from "@/components/BlogCard";
import { useEffect, useState } from "react";

export interface Blog {
	_id: string;
	title: string;
	excerpt: string;
	slug: string;
	content: string;
	category: string;
	author: string;
}
export default function Home() {
	// get all blogs (/blogs?limit&offset)
	// map it through the card
	const [blogs, setBlogs] = useState<Blog[] | []>([]);
	useEffect(() => {
		(async function () {
			const res = await API.get("/blogs/random", {
				params: { offset: "10", perPage: "10" },
			});
			setBlogs(res.data?.data);
		})();
	}, []);
	return (
		<>
			<div className="w-full min-h-screen overflow-auto flex flex-wrap p-4 gap-4">
				{blogs.map((blog: Blog) => (
					<BlogCard blog={blog} key={blog._id} />
				))}
			</div>
		</>
	);
}
