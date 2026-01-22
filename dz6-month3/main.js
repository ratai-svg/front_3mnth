    const moves = [
  {
    title: "Breaking Bad",
    year: 2008,
    genre: "Crime",
    rating: 9.5,
    seasons: 5,
    duration: 47, // средняя продолжительность серии в минутах
    finished: true,
    actors: ["Bryan Cranston", "Aaron Paul"],
    country: "USA"
  },
  {
    title: "Grown Ups",
    year: 2010,
    genre: "comedy",
    rating: 6.0,
    seasons: 1,
    duration: 102,
    finished: false,
    actors: ["Adam Sandler", "Chris Rock"],
    country: "USA"
  },
  {
    title: "The Intouchables",
    year: 2011,
    genre: "Comedy/Drama",
    rating: 8.5,
    seasons: 0,
    duration: 112,
    finished: true,
    actors: ["François Cluzet", "Omar Sy", "Anne Le Ny"],
    country: "France"
  },
  {
    title: "Avengers: Infinity War",
    year: 2018,
    genre: "Action/Sci-Fi",
    rating: 8.4,
    seasons: 0,
    duration: 149,
    finished: true,
    actors: ["Robert Downey Jr.", "Chris Hemsworth", "Josh Brolin"],
    country: "USA"
  },
  {
    title: "Daredevil",
    year: 2015,
    genre: "Action/Crime",
    rating: 8.6,
    seasons: 3,
    duration: 54,
    finished: true,
    actors: ["Charlie Cox", "Vincent D'Onofrio", "Deborah Ann Woll"],
    country: "USA"
  },
  {
    title: "Guardians of the Galaxy Vol. 3",
    year: 2023,
    genre: "Sci-Fi/Adventure",
    rating: 7.9,
    seasons: 0,
    duration: 150,
    finished: true,
    actors: ["Chris Pratt", "Chukwudi Iwuji", "Bradley Cooper"],
    country: "USA"
  },
  {
    title: "The Last of Us",
    year: 2023,
    genre: "Drama/Sci-Fi",
    rating: 8.7,
    seasons: 2,
    duration: 50,
    finished: false,
    actors: ["Pedro Pascal", "Bella Ramsey", "Anna Torv"],
    country: "USA"
  },
  {
    title: "Deadpool",
    year: 2016,
    genre: "Action/Comedy",
    rating: 8.0,
    seasons: 0,
    duration: 108,
    finished: true,
    actors: ["Ryan Reynolds", "Morena Baccarin", "T.J. Miller"],
    country: "USA"
  },
  {
    title: "Peaky Blinders",
    year: 2013,
    genre: "Crime/Drama",
    rating: 8.8,
    seasons: 6,
    duration: 60,
    finished: true,
    actors: ["Cillian Murphy", "Paul Anderson", "Tom Hardy"],
    country: "UK"
  },
  {
    title: "Stranger Things",
    year: 2016,
    genre: "Sci-Fi",
    rating: 8.7,
    seasons: 5,
    duration: 50,
    finished: false,
    actors: ["Millie Bobby Brown", "David Harbour"],
    country: "USA"
  },
];

//1  
console.log([...moves.map(move => move.title + " - " + move.rating)]);


//2
console.log([...moves.map(move => move.title + " (" + move.year + ") - " + move.seasons + " сезонов")])

//3
console.log(" сериалы которые еще не закончены:");
moves.forEach(move => {
  if (move.finished === false) {
    console.log(move);
  }
});

//4
console.log(" сериал которые состоят из более 5 сезонов:");
moves.forEach(move => {
    if (move.seasons >= 5 ) {
        console.log(move);
    }
});

//5
console.log("серылы с рейтингом 9:");
console.log(moves.some(move => move.rating > 9));

//6
console.log("если сериалы выпущеные после 2000 года?")
console.log(moves.some(move => move.year > 2000));

//7
console.log("средний рейтинг всех сериалов:")
console.log(averageRating = moves.reduce((sum, move) => 
    sum + move.rating, 0) / moves.length
)

//8
console.log(moves.sort((a, b) => b.rating - a.rating).map(move => move.title + " - " + move.rating));