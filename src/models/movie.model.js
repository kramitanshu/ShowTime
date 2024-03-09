import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { ApiError } from "../utils/ApiError.js";
import { rejects } from "assert";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const p = path.join(__dirname, "moviesData", "movies.json");

const getMoviesFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      // Handle file read error
      console.error("Initializing movies array: ", err);
      cb([]); // Initialize movies array with empty array
    } else {
      try {
        const movies = JSON.parse(fileContent);
        if (!Array.isArray(movies)) {
          // If file content is not an array (invalid JSON data), initialize with empty array
          console.error("Invalid JSON data in movies.json");
          cb([]);
        } else {
          // File content is valid JSON array, pass it to the callback
          cb(movies);
        }
      } catch (error) {
        // JSON parse error (invalid JSON data), initialize with empty array
        console.error("Error parsing JSON in movies.json:", error);
        cb([]);
      }
    }
  });
};

class Movie {
  constructor(name, director, yor, language, rating, thumbnail) {
    this.name = name;
    this.director = director;
    this.yor = yor; // yearOfRelease
    this.language = language;
    this.rating = rating;
    this.thumbnail = thumbnail;
  }

  // function to save, function to findByName

  save() {
    return new Promise((resolve, reject) => {
      getMoviesFromFile((movies) => {
        movies.push(this);
        fs.writeFile(p, JSON.stringify(movies), (err) => {
          if (err) {
            console.error(err);
            reject(new ApiError(500, "Movie file not found"));
          } else {
            resolve();
          }
        });
      });
    });
  }

  static fetchAll() {
    return new Promise((resolve, reject) => {
        fs.readFile(p, (err, data) => {
          if (err) {
            console.log(err);
            reject(new ApiError(500, "Error in reading file"));
          }
          const movies = JSON.parse(data);
          resolve(movies);
        });
      });
  }
}

export { Movie };
