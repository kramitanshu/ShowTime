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
      (field) => field.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }

  // what if movie is already listed ? -- compare

  // assuming it's not there
  let movie = new Movie(name, director, yor, language, rating, thumbnail);
  try {
    await movie.save();
    return res.status(201).json(new ApiResponse(200, addMovie, `movie added successfully`));
  } catch (error) {
    console.error(error);
    throw new ApiError(500, "Issue with saving data in filesystem");
  }
});


const allMovies = asyncHandler( async(req, res) =>{

  let movies;
  try{
    movies = await Movie.fetchAll();
    return res.status(201).json(new ApiResponse(200, movies, movies));
  }catch(error){
    console.error(error);
    throw new ApiError(500, "Issue with saving data in filesystem");
  }
    
})

const searchWithName = asyncHandler((req, res) =>{

})

const updateMovieDetails = asyncHandler((req, res) =>{

})

const deleteMovie = asyncHandler((req, res) =>{

})

export { addMovie, allMovies, searchWithName, updateMovieDetails, deleteMovie };
