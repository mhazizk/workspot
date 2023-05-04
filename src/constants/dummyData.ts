import ReviewType from "../types/reviewType";
import UserProfileType from "../types/userProfileType";
import WorkspotDetailsType from "../types/workspotDetailsType";
import WorkspotType from "../types/workspotType";

export const dummyWorkspotDetails = {
  id: "1",
  name: "Alfred's Coffee",
  location: "Melrose Place",
  imageURL: "https://picsum.photos/200/300?random=10",
  rating: 4.5,
  price: 3,
  description: "A coffee shop in Melrose Place.",
  isPopular: true,
  isFavorite: false,
  isRecommended: true,
  isFeatured: false,
  schedule: {
    isOpenNow: true,
    openTime: "0800",
    closeTime: "2100",
    openDays: [0, 1, 2, 3, 4, 5],
  },
  tablesAndChairs: {
    totalTables: 20,
    chairsPerTable: 4,
    chairHeight: "medium",
  },
  indoorOutdoor: {
    indoorSeating: true,
    outdoorSeating: true,
  },
  electricals: {
    wifi: true,
    powerOutlets: true,
  },
  rooms: {
    restroom: true,
    prayerRoom: true,
    smokingRoom: true,
    airConditionedRoom: true,
  },
  entertainment: {
    music: true,
    tv: true,
    games: false,
  },
  foodAndDrinks: {
    foods: true,
    drinks: true,
    alcohol: false,
    coffee: true,
  },
  extras: {
    parking: true,
    smokingAllowed: true,
    petsAllowed: true,
    wheelchairAccessible: true,
  },
} satisfies WorkspotDetailsType;

export const dummyData = (): WorkspotType[] => {
  const data: WorkspotType[] = [];
  let counter = 0;
  while (counter < 30) {
    data.push({
      id: String(counter),
      name: `Workspot ${counter}`,
      description: `Description ${counter}`,
      location: `Location ${counter}`,
      imageURL: `https://picsum.photos/200/300?random=${counter}`,
      rating: Number(Number((Math.random() * 100) / 20).toFixed(1)),
      price: Math.random() * 100,
      schedule: {
        isOpenNow: true,
        openTime: "0800",
        closeTime: "2100",
        openDays: [0, 1, 2, 3, 4, 5],
      },
    });
    counter++;
  }
  return data;
};

export const dummyUser = {
  id: "1",
  name: "John Doe",
  occupation: "Software Engineer",
  workType: "Hybrid work",
  location: "San Francisco, CA",
  bio: "I'm a software engineer who loves to work in coffee shops.",
  imageURL: "https://picsum.photos/200/300?random=1",
} satisfies UserProfileType;

export const dummyReviews = (): ReviewType[] => {
  const review = [] as ReviewType[];
  let counter = 0;
  while (counter < 10) {
    review.push({
      id: counter.toString(),
      rating: Number(Number((Math.random() * 100) / 20).toFixed(1)),
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultricies, nunc nisl ultricies nisl, vitae ultricies nisl nisl eget nisl. Donec auctor, nisl eget ultricies ultricies, nunc nisl ultricies nisl, vitae ultricies nisl nisl eget nisl.",
      date: "2021-01-01",
      user: {
        id: counter.toString(),
        name: "John Doe",
        imageURL: `https://picsum.photos/200/300/?random=${counter}`,
        occupation: "Software Engineer",
        workType: "Hybrid work",
        location: "San Francisco, CA",
        bio: "Human",
      },
    });
    counter++;
  }
  return review;
};
