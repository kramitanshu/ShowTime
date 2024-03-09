import { Router } from "express";
import { addMovie, allMovies, deleteMovie, searchWithName, updateMovieDetails } from "../controllers/admin.controller.js";




const router = Router();


router.route("/all-movies").get(allMovies);
router.route("/add").post(addMovie);
router.route("/").get(searchWithName);
router.route("/update").patch(updateMovieDetails);
router.route("/:filter").get();
router.route("/delete/:name").delete(deleteMovie);




export default router;