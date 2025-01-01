import { useEffect, useState } from "react";
import { Blog } from "./Home";
import API from "@/api/axios";

export default function ReadBlog({ id }: { id: string }) {
	const [blog, setBlog] = useState<Blog | null>(null);
	useEffect(() => {
		(async function () {
			try {
				const res = await API.get(`/blogs/${id}`);
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
