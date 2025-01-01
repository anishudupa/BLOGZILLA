import { useEffect, useState } from "react";
import { Blog } from "./Home";
import API from "@/api/axios";
// add update and delete logic into cards
export default function UBlogList() {
	const [userBlogs, setUserBlogs] = useState<Blog[] | []>([]);
	useEffect(() => {
		(async function () {
			try {
				const res = await API.get("/blogs");
				setUserBlogs((prev) => [...prev, ...res.data?.data]);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);
	return <></>;
}
