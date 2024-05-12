import hereditaryImage from "../assets/Hereditary.png";
import midsommarImage from "../assets/Midsommar.png";

const movies = [
  {
    id: 1,
    title: "Hereditary",
    genre: ["Horror", "Suspense", "Supernatural", "Psychological"],
    length: 127,
    image: hereditaryImage,
    stars: 4,
    synopsis:
      "A horror film about a family's eerie secrets after the grandmother's death.",
    reviews: [
      {
        reviewer: "Victor Valencia",
        comment:
          "Everything in this movie was really good until the very end. Many times throughout the movie I was left speechless looking at my partner for a response.",
        rating: 4,
      },
    ],
  },
  {
    id: 2,
    title: "Midsommar",
    genre: ["Horror", "Mystery"],
    length: 148,
    image: midsommarImage,
    stars: 4,
    synopsis:
      "A couple travels to Sweden to visit a rural hometown's fabled mid-summer festival.",
    reviews: [
      {
        reviewer: "Victor Valencia",
        comment:
          "This movie was one of the few movies that had me disturbed at the end. The cinematography was what made the movie",
        rating: 4,
      },
    ],
  },
];

export default movies;
