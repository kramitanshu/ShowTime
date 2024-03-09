// import { fs } from "fs";
// import { path } from "path";
import { ApiError } from "../utils/ApiError.js";

// const p = path.join(
//   path.dirname(process.Module.filename),
//   "data",
//   "products.json"
// );

const getMoviesFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
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
    getMoviesFromFile((movies) => {
      movies.push(this);
      fs.writeFile(p, JSON.stringify(movies), (err) => {
        console.log(err);
        throw new ApiError(500, "Movie files didn't found", `${err}`)
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
}

export { Movie };
