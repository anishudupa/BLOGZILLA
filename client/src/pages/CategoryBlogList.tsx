import { useEffect, useState } from "react";
import { type Blog } from "./Home";
import API from "@/api/axios";
import { useParams } from "react-router-dom";
import BlogCard from "@/components/BlogCard";

//TODO: SOME ERROR WHILE PARAMS
export default function CategoryBlogList() {
	// api call: get blogs by category
	// display it using cards
	const { category } = useParams();
	console.log(useParams());
	const [blogs, setBlogs] = useState<Blog[] | []>([]);
	useEffect(() => {
		(async function () {
			const res = await API.get(`/blogs/category/${category}`);
			console.log(res.data?.data);
			setBlogs(res.data?.data);
		})();
	}, []);
	return (
		<>
			<div className="w-full min-h-screen overflow-auto flex flex-wrap p-4 gap-4 justify-center items-center">
				{blogs.map((blog: Blog) => (
					<BlogCard blog={blog} key={blog._id} />
				))}
			</div>
		</>
	);
}
