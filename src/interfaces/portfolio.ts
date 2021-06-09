export enum Status {
  UnderDevelopment = "Under Development",
  InProduction = "In Production",
  ShutDown = "Shut Down",
}

export interface ProjectData {
  name: string;
  description: string;
  status: Status;
  tools: string;
  imageURL: string;
  projectURL: string;
}
