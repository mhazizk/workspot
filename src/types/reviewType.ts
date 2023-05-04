import UserProfileType from "./userProfileType";

type ReviewType = {
  user: UserProfileType;
  rating: number;
  review: string;
  date: string;
  id: string;
};

export default ReviewType;
