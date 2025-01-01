import BlogCard from "./components/BlogCard";
import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";
import CreateBlog from "./pages/CreateBlog";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UpdateBlog from "./pages/UpdateBlog";
import UBlogList from "./pages/UBloglist";
import CategoryBlogList from "./pages/CategoryBlogList";
import ReadBlog from "./pages/ReadBlog";

const Protect = ({ children }: { children: React.ReactNode }) => {
	const token = localStorage.getItem("token");
	if (!token) {
		<Navigate to={"/signup"} replace />;
	} else return <>{children}</>;
};
function App() {
	return (
		<>
			<BrowserRouter>
				<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
					{/* <ModeToggle /> */}
					<Header />
					<main className="min-h-screen overflow-auto">
						{/* <Routes>
							<Route path="/signup" element={<Signup />} />
							<Route path="/login" element={<Login />} />
							<Route
								path="/"
								element={
									<Protect>
										<Home />
									</Protect>
								}
							/>
							<Route
								path="/create"
								element={
									<Protect>
										<CreateBlog />
									</Protect>
								}
							/>
							<Route
								path="/update"
								element={
									<Protect>
										<UpdateBlog />
									</Protect>
								}
							/>
							<Route
								path="/me"
								element={
									<Protect>
										<UBlogList />
									</Protect>
								}
							/>
							<Route
								path="/:category"
								element={
									<Protect>
										<CategoryBlogList />
									</Protect>
								}
							/>
						</Routes> */}
						<Home />
						{/* <Login /> */}
						{/* <CategoryBlogList /> */}
						{/* <CreateBlog /> */}
						{/* <ReadBlog id="677556ea39e69d170218d9fe" /> */}
					</main>
				</ThemeProvider>
			</BrowserRouter>
		</>
	);
}

export default App;
