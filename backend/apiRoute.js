import express from "express";
import { home, addDate} from "./directController.js";
import cors from "cors";

const router = express.Router();

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

router.get("/", home);
router.post("/add", addDate);

export default router;
