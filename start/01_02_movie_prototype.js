class Movie {
  constructor(title, director, genre, releaseYear, rating, boxOffice) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
    this.boxOffice = boxOffice;
  }

  get getOverVeiw() {
    return this.getOverVeiw();
  }

  getOverVeiw() {
    if (this.boxOffice === '') {
      return `${this.title}, a ${this.genre} film directed by ${this.director} was released on ${this.releaseYear}. It received a audience rating of ${this.rating}%.`
    }
    return `${this.title}, a ${this.genre} film directed by ${this.director} was released on ${this.releaseYear}. It received a audience rating of ${this.rating}% and grossed ${this.boxOffice}M USD at the Box Office.`
  }
}

const IndianaJohesDoD = new Movie("INDIANA JONES AND THE DIAL OF DESTINY", "James Mangold", "Action, Adventure", "Jun 30, 2023", 88, "");
const NoHardFeelings = new Movie("NO HARD FEELINGS", "Gene Stupnitsky", "Comedy", "Jun 23, 2023", 87, 15.0);
const AsteroidCity = new Movie("ASTEROID CITY", "Wes Anderson", "Comedy, Drama, Romance", "Jun 23, 2023", 62, 10.3);
const TheFlash = new Movie("The Flash", "Andy Muschietti", "Action, Adventure, Fantasy", "Jun 16, 2023", 84, 87.5);

console.log(IndianaJohesDoD);
console.log(IndianaJohesDoD.getOverVeiw());
console.log(NoHardFeelings.getOverVeiw());
console.log(AsteroidCity.getOverVeiw());
console.log(TheFlash.getOverVeiw());