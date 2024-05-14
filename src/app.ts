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
 const user =req.body
 console.log(user);

 res.json({
    success:true,
    message:"User is created successfully",
    data:user
 })
 
});

courseRouter.post("/courses", (req: Request, res: Response) => {
 const course =req.body
 console.log(course);

 res.json({
    success:true,
    message:"course is created successfully",
    data:course
 })
 
});

app.get("/", logger, (req: Request, res: Response) => {
  //   console.log(req.query);
  res.send("Hello Worldftghftghb");
});
app.post("/", logger, (req: Request, res: Response) => {
  // console.log(req.body);

  res.json({ message: "ok" });
});

export default app;
