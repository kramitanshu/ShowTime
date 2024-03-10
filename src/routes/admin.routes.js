import { Router } from "express";
import { addMovie, allMovies, deleteMovie, filterRequest, searchWithName, updateMovieDetails } from "../controllers/admin.controller.js";




const router = Router();


router.route("/").get(searchWithName);
router.route("/add").post(addMovie);
router.route("/update").patch(updateMovieDetails);
router.route("/delete/:name").delete(deleteMovie);
router.route("/all-movies").get(allMovies);
router.route("/filter/").get(filterRequest);




export default router;