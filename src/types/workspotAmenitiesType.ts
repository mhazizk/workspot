type WorkspotAmenitiesType = {
  tablesAndChairs: {
    totalTables: number;
    chairsPerTable: number;
    chairHeight: "low" | "medium" | "high";
  };
  indoorOutdoor: {
    indoorSeating: boolean;
    outdoorSeating: boolean;
  };
  electricals: {
    wifi: boolean;
    powerOutlets: boolean;
  };
  rooms: {
    restroom: boolean;
    prayerRoom: boolean;
    smokingRoom: boolean;
    airConditionedRoom: boolean;
  };
  entertainment: {
    tv: boolean;
    music: boolean;
    games: boolean;
  };
  foodAndDrinks: {
    foods: boolean;
    drinks: boolean;
    alcohol: boolean;
    coffee: boolean;
  };
  extras: {
    smokingAllowed: boolean;
    parking: boolean;
    petsAllowed: boolean;
    wheelchairAccessible: boolean;
  };
};
