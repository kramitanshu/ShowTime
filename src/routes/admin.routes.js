import { Router } from "express";
import { addMovie, allMovies } from "../controllers/admin.controller.js";




const router = Router();


router.route("/all-movies").get(allMovies);
router.route("/add").post(addMovie);
router.route("/:filter").get();
router.route("/:name").get();
router.route("/update/:name").patch();
router.route("/delete/:name").delete();




export default router;