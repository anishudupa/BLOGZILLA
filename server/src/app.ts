import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import userRouter from "./routes/user.route";
import ApiError from "./utils/ApiError";
import ApiResponse from "./utils/ApiResponse";

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/api/v1", (_: Request, res: Response) => {
	res.json({ message: "api is running fine" });
	return;
});

app.use("/api/v1/users", userRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	console.log("reached here");
	if (err instanceof ApiError) {
		res.status(400).json({
			...new ApiResponse("ERROR", null, err.statusCode, err.apiMessage),
			err,
		});
	} else {
		res.status(500).json({ statusCode: "SERVER ERROR", err });
	}
});

export default app;
