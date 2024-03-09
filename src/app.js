import express from "express";

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// routes import
import adminRouter from "./routes/admin.routes.js"

// routes declaration
app.use("/api/v1/admin", adminRouter)

// http://localhost:8787/api/v1/admin/

export { app };
