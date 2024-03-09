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
    return res
      .status(201)
      .json(new ApiResponse(200, addMovie, `movie added successfully`));
  } catch (error) {
    console.error(error);
    throw new ApiError(500, "Issue with saving data in filesystem");
  }
});

const allMovies = asyncHandler(async (req, res) => {
  let movies;
  try {
    movies = await Movie.fetchAll();
    return res.status(201).json(new ApiResponse(200, movies, movies));
  } catch (error) {
    console.error(error);
    throw new ApiError(500, "Issue with saving data in filesystem");
  }
});

const searchWithName = asyncHandler(async (req, res) => {
  const { name } = req.query;
  let movies;
  try {
    movies = await Movie.fetchAll();
  } catch (error) {
    console.error(error);
    throw new ApiError(500, "Issue with saving data in filesystem");
  }
  const filteredMovie = movies.filter((movie) => movie.name === name);
  res
    .status(201)
    .json(new ApiResponse(200, filteredMovie, "Movie with given name"));
});

const updateMovieDetails = asyncHandler(async (req, res) => {
  const { name, director, yor, language, rating } = req.body;
  let movies;
  try {
    movies = await Movie.fetchAll();
  } catch (error) {
    console.error(error);
    throw new ApiError(500, "Issue with saving data in filesystem");
  }
  const filteredMovie = movies.map((movie) =>{
    if(movie.name === name){
      movie.director = director;
      movie.yor = yor,
      movie.language = language,
      movie.rating = rating
    }
    return movie;
  });

  // now update filesystem data
  res
    .status(201)
    .json(new ApiResponse(200, filteredMovie, "Movie with given name"));
});

const deleteMovie = asyncHandler(async (req, res) => {
  const { name } = req.query;
  let movies;
  try {
    movies = await Movie.fetchAll();
  } catch (error) {
    console.error(error);
    throw new ApiError(500, "Issue with saving data in filesystem");
  }
  const filteredMovie = movies.filter((movie) => movie.name === name);
  res
    .status(201)
    .json(new ApiResponse(200, filteredMovie, "Movie with given name"));
});

export { addMovie, allMovies, searchWithName, updateMovieDetails, deleteMovie };
