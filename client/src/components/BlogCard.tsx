import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { SquareArrowOutUpRight, User } from "lucide-react";
import { Button } from "./ui/button";
import { Blog } from "@/pages/Home";
//TODO: ADD READPOST LOGIC.
// ADD CATEGORY FIELD
// REMOVE DESCRIPTION (IF YOU WANT)
export default function BlogCard({ blog }: { blog: Blog }) {
	return (
		<Card className="group hover:border-white transition-colors duration-500 rounded-md w-[400px]">
			<CardHeader>
				<CardTitle className="text-3xl">{blog.title}</CardTitle>
				<CardDescription>{blog.excerpt}</CardDescription>
			</CardHeader>
			<CardContent className="text-base">
				<p>{blog.content.substring(0, 350) + "...read more"}</p>
			</CardContent>
			<CardFooter>
				<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
					<Button className="text-base">
						<SquareArrowOutUpRight /> Read Post
					</Button>
				</div>
			</CardFooter>
		</Card>
	);
}
