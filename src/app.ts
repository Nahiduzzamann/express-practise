import express, { NextFunction, Request, Response } from "express";
const app = express();

//parser
app.use(express.json()); // for get json data
app.use(express.text()); // for get plain text data

// middle ware
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);
  next();
};

//routing
const userRouter = express.Router();
const courseRouter = express.Router();

app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);

userRouter.post("/create-user", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);

  res.json({
    success: true,
    message: "User is created successfully",
    data: user,
  });
});

courseRouter.post("/courses", (req: Request, res: Response) => {
  const course = req.body;
  console.log(course);

  res.json({
    success: true,
    message: "course is created successfully",
    data: course,
  });
});

app.get(
  "/",
  logger,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send("hj56t");
    } catch (error) {
      next(error);
    }
  }
);
app.post("/", logger, (req: Request, res: Response) => {
  // console.log(req.body);

  res.json({ message: "ok" });
});


//if route not match then sent message
app.all("*", (req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    message: "Route not found",
  });
});

//global error handler

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    res.status(400).json({
      success: false,
      message: "somthing went wrong",
    });
  }
});
export default app;
