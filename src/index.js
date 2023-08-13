// Import Data {users, movies}.
const data = require("./data.json");

// Function to return top three movie titles that most favorited by friends of a userId.
function topFavouriteMoviesAmongFriends(userId) {
  // Get User by Id.
  const user = data.users?.filter((user) => user.userId === Number(userId));

  // if User not Exist or User Frindes not Exist return [].
  if (user.length === 0 || user?.friends?.length === 0) {
    return [];
  }

  // Object to store Movies Counts.
  const movieCounts = {};

  // Loop on User Frindes.
  user[0]?.friends?.forEach((friendId) => {
    // Loop on Movies.
    data.movies?.forEach((movie) => {
      // Check if Friend Favorite This movie and return FriendId.
      const favMovieForFrind = movie.favorites?.filter(
        (favMovie) => friendId === favMovie
      );

      // if Frind Exist in Favorite, Increment Movie Counter.
      if (favMovieForFrind.length > 0) {
        movieCounts[movie.title] = (movieCounts[movie.title] || 0) + 1;
      }
    });
  });

  // Sort Movies based on Counter.
  const sortedMovies = Object.keys(movieCounts).sort((a, b) => {
    //If Equal Favorite Counter, Sort based on Alphabetic.
    if (movieCounts[b] === movieCounts[a]) {
      return a.localeCompare(b);
    }
    return movieCounts[b] - movieCounts[a];
  });

  //return an array of top three movie titles that have been most favorited by friends of a given user.
  return sortedMovies.slice(0, 3);
}

module.exports = topFavouriteMoviesAmongFriends;
