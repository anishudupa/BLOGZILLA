import { useEffect, useState } from "react";
import { Blog } from "./Home";
import API from "@/api/axios";
import { useLocation } from "react-router-dom";
export default function ReadBlog() {
	const [blog, setBlog] = useState<Blog | null>(null);
	const { blogId } = useLocation().state;
	useEffect(() => {
		(async function () {
			try {
				const res = await API.get(`/blogs/${blogId}`);
				setBlog(res.data?.data);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);
	return (
		<>
			<div
				className="p-3"
				dangerouslySetInnerHTML={{ __html: blog?.content! }}
			/>
		</>
	);
}
