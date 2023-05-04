type UserProfileType = {
  id: string;
  name: string;
  occupation: string;
  workType: "WFH" | "WFO" | "Hybrid work";
  location: string;
  bio: string;
  imageURL: string;
};

export default UserProfileType;
