import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
function App() {
	console.log(import.meta.env.VITE_API_URI);
	return (
		<>
			<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
				{/* <ModeToggle /> */}
				<main className="min-h-screen overflow-auto">
					{/* <Signup /> */}
					<Login />
				</main>
			</ThemeProvider>
		</>
	);
}

export default App;
