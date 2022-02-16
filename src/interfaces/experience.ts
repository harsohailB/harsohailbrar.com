export interface PositionData {
  name: string;
  duration: string;
  location: string;
}

export interface ExperienceData {
  imageURL: string;
  company: string;
  positions: PositionData[];
}
