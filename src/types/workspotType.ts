import WorkspotScheduleType from "./workspotScheduleType";

type WorkspotType = {
  name: string;
  imageURL: string;
  rating: number;
  location: string;
  description: string;
  price: number;
  id: string;
  schedule: WorkspotScheduleType;
};

export default WorkspotType;
