import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { convert } from "html-to-text";
import { Edit, SquareArrowOutUpRight, Trash, User } from "lucide-react";
import { Button } from "./ui/button";
import { Blog } from "@/pages/Home";
import { useNavigate } from "react-router-dom";
export default function UserBlogCard({ blog }: { blog: Blog }) {
	blog.content = convert(blog.content);
	const navigate = useNavigate();

	//TODO: ADD LOGIC TO UPDATE AND DELETE
	const deleteBlog = async () => {};
	const updateBlog = async () => {};

	return (
		<Card className="group hover:border-white transition-colors duration-500 rounded-md w-[400px]">
			<CardHeader>
				<div className="flex items-center space-x-2">
					<User className="text-white" />
					<span className="text-lg text-white">{blog.author?.username}</span>
				</div>
				<CardTitle className="text-4xl">{blog.title}</CardTitle>
				<CardDescription>{blog.excerpt}</CardDescription>
			</CardHeader>
			<CardContent className="text-base">
				<p>{blog.content.substring(0, 350) + " ...read more"}</p>
			</CardContent>
			<CardFooter>
				<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
					<Button
						className="text-base"
						onClick={() => navigate(`/blog/${blog.slug}`)}>
						<SquareArrowOutUpRight /> Read Post
					</Button>
				</div>
				<div className="flex items-center gap-3">
					<Button variant="ghost" className="text-white" onClick={updateBlog}>
						<Edit className="text-white" />
					</Button>
					<Button variant="ghost" className="text-white" onClick={deleteBlog}>
						<Trash className="text-white" />
					</Button>
				</div>
			</CardFooter>
		</Card>
	);
}
