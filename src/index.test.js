const topFavouriteMoviesAmongFriends = require("./index");

describe("topFavouriteMoviesAmongFriends", () => {
  it("Should handle  User doesn't Exsist or no Friends case", () => {
    // 5666 is random Id.
    const result = topFavouriteMoviesAmongFriends(5666);
    expect(result).toEqual([]);
  });

  it("should return the top favorite movies By UserId (15291)", () => {
    const result = topFavouriteMoviesAmongFriends(15291);
    expect(result).toEqual([
      "Pulp Fiction",
      "The Godfather",
      "The Dark Knight",
    ]);
  });

  it("should return the top favorite movies By UserId (7001)", () => {
    const result = topFavouriteMoviesAmongFriends(7001);
    expect(result).toEqual([
      "Pulp Fiction",
      "The Godfather",
      "The Dark Knight",
    ]);
  });

  it("should return the top favorite movies By UserId (51417)", () => {
    const result = topFavouriteMoviesAmongFriends(51417);
    expect(result).toEqual([
      "The Dark Knight",
      "The Godfather",
      "The Shawshank Redemption",
    ]);
  });

  it("should return the top favorite movies By UserId (62289)", () => {
    const result = topFavouriteMoviesAmongFriends(62289);
    expect(result).toEqual([
      "The Dark Knight",
      "The Godfather",
      "Pulp Fiction",
    ]);
  });
});
