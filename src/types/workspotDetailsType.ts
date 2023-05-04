import WorkspotAdditionalInfoType from "./workspotAdditionalInfoType";
import WorkspotScheduleType from "./workspotScheduleType";
import WorkspotType from "./workspotType";

type WorkspotDetailsType = WorkspotType &
  WorkspotAdditionalInfoType &
  WorkspotAmenitiesType;

export default WorkspotDetailsType;
