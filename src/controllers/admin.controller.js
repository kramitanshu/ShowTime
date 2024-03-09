import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiRespnse.js";
import { ApiError } from "../utils/ApiError.js";
import { Movie } from "../models/movie.model.js";

const addMovie = asyncHandler(async (req, res) => {
  // get user details from frontend
  const { name, director, yor, language, rating, thumbnail } = req.body;

  // validation checks
  if (
    [name, director, yor, language, rating, thumbnail].some(
      (field) => field?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }

  // what if movie is already listed ? -- compare

  // assuming it's not there
  const movie = new Movie(name, director, yor, language, rating, thumbnail);

  movie.save();

  return res
    .status(201)
    .json(new ApiResponse(200, addMovie, "Movie is Added Successfully"));
});

export { addMovie };
