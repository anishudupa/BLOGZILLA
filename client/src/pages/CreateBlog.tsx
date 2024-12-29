import TipTap from "@/components/TipTap";
import { Button } from "@/components/ui/button";

export default function CreateBlog() {
	return (
		<>
			<div className="p-4 flex flex-col justify-center items-center min-h-screen gap-6 w-full relative">
				<h1 className="text-3xl text-center">Create Blog</h1>
				<TipTap />
			</div>
		</>
	);
}
