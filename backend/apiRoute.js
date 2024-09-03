import express from "express";
import { home, addDate} from "./directController.js";
import cors from "cors";

const router = express.Router();

router.use(
  cors({
    credentials: true,
    origin: "https://smart-bin-d25n.onrender.com",
  })
);

router.get("/api", home);
router.post("/api/add", addDate);

export default router;
