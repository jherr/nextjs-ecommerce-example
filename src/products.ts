const products = [
  {
    id: 1,
    image: "/sneaker1.jpg",
    name: "ByteKicks",
    slug: "bytekicks",
    description:
      "These shoes feature a sleek, minimalist design with a polished leather upper and a refined silhouette.",
    reviews: [
      {
        id: 1,
        text: "These sneakers are incredibly comfortable and provide great support!",
        name: "Sally",
      },
      {
        id: 2,
        text: "These sneakers provide great arch support, my feet feel so much better.",
        name: "Jane",
      },
      {
        id: 3,
        text: "I love the vibrant colors of these sneakers, they add a pop of fun to my outfits.",
        name: "Joe",
      },
      {
        id: 4,
        text: "These sneakers have made a noticeable difference in reducing foot fatigue.",
        name: "Bob",
      },
    ],
  },
  {
    id: 2,
    image: "/sneaker2.jpg",
    name: "CodeSole",
    slug: "codesole",
    description:
      "These athletic shoes are engineered with advanced cushioning technology to provide exceptional comfort and support during intense workouts.",
    reviews: [
      {
        id: 5,
        text: "Love the stylish design of these sneakers, they really make a statement.",
        name: "Barb",
      },
    ],
  },
  {
    id: 3,
    image: "/sneaker3.jpg",
    name: "BinaryBoost",
    slug: "binaryboost",
    description:
      "These versatile shoes are perfect for both formal occasions and casual outings, offering a sophisticated yet relaxed look.",
    reviews: [
      {
        id: 6,
        text: "These sneakers are lightweight and perfect for my workouts.",
        name: "Jamie",
      },
      {
        id: 7,
        text: "The materials used in these sneakers are high-quality and feel great on my feet.",
        name: "Anne",
      },
      {
        id: 8,
        text: "The quick lacing system on these sneakers is a game-changer, so convenient.",
        name: "Becky",
      },
    ],
  },
  {
    id: 4,
    image: "/sneaker4.jpg",
    name: "CompilerKicks",
    slug: "compilerkicks",
    description:
      "With a vibrant color palette and bold patterns, these shoes make a vibrant statement and add a pop of personality to any outfit.",
    reviews: [
      {
        id: 9,
        text: "The cushioning in these sneakers is amazing, feels like walking on clouds.",
        name: "Sally",
      },
    ],
  },
  {
    id: 5,
    image: "/sneaker5.jpg",
    name: "CodeCrafters",
    slug: "codecrafters",
    description:
      "These high-top sneakers feature a padded collar and tongue for extra ankle support and cushioning, ideal for skateboarding or urban streetwear.",
    reviews: [
      {
        id: 10,
        text: "I've never had a pair of sneakers fit so perfectly, these are a dream.",
        name: "Sue",
      },
    ],
  },
  {
    id: 6,
    image: "/sneaker6.jpg",
    name: "LogicLaces",
    slug: "logiclaces",
    description:
      "These retro-inspired sneakers pay homage to classic designs while incorporating modern materials and technologies for enhanced comfort and performance.",
    reviews: [
      {
        id: 11,
        text: "These sneakers have excellent traction, perfect for any kind of activity.",
        name: "Megan",
      },
    ],
  },
  {
    id: 7,
    image: "/sneaker7.jpg",
    name: "AlgorithmAir",
    slug: "algorithmair",
    description:
      "Featuring a flexible sole and a stretchable upper, these shoes offer a glove-like fit and exceptional freedom of movement.",
    reviews: [
      {
        id: 12,
        text: "The quality of these sneakers is top-notch, they feel durable and long-lasting.",
        name: "Billy",
      },
      {
        id: 13,
        text: "I've received so many compliments on these sneakers, they're a real head-turner.",
        name: "Billy",
      },
    ],
  },
];

export const getProducts = async () =>
  products.map(({ id, name, image, description, slug }) => ({
    id,
    name,
    image,
    description,
    slug,
  }));

export const getProductBySlug = async (slug: string) =>
  products.find(({ slug: _slug }) => _slug === slug)!;

const getMaxId = () =>
  Math.max(
    ...products
      .map(({ reviews }) => reviews)
      .flat()
      .map(({ id }) => id)
  );

export const addReview = async (slug: string, text: string, name: string) =>
  (await getProductBySlug(slug)).reviews.unshift({
    id: getMaxId() + 1,
    text,
    name,
  });
