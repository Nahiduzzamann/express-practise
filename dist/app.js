"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//parser
app.use(express_1.default.json()); // for get json data
app.use(express_1.default.text()); // for get plain text data
// middle ware
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
//routing
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);
userRouter.post("/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "User is created successfully",
        data: user
    });
});
courseRouter.post("/courses", (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: "course is created successfully",
        data: course
    });
});
app.get("/", logger, (req, res) => {
    //   console.log(req.query);
    res.send("Hello Worldftghftghb");
});
app.post("/", logger, (req, res) => {
    // console.log(req.body);
    res.json({ message: "ok" });
});
exports.default = app;
