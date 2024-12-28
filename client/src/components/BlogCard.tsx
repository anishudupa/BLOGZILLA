import data from "../store/data.json";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { SquareArrowOutUpRight, User } from "lucide-react"; // Import User (person) icon
import { Button } from "./ui/button";
import { IRandomSingleBlog } from "@/store/rblog.store";

export default function BlogCard({ blog }: { blog: IRandomSingleBlog }) {
	return (
		<Card className="group hover:border-white transition-colors duration-500 rounded-md w-[400px]">
			<CardHeader>
				<div className="flex items-center space-x-2 mb-2">
					<User className="text-white" /> {/* Person icon */}
					<span className="text-sm text-white">{blog.author}</span>{" "}
				</div>
				<CardTitle className="text-3xl">{blog.title}</CardTitle>
				<CardDescription>{blog.excerpt}</CardDescription>
			</CardHeader>
			<CardContent className="text-base">
				<p>{blog.content.substring(0, 350) + "...read more"}</p>
			</CardContent>
			<CardFooter>
				{/* The button will be hidden by default, only visible on hover */}
				<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
					<Button className="text-base">
						<SquareArrowOutUpRight /> Read Post
					</Button>
				</div>
			</CardFooter>
		</Card>
	);
}
