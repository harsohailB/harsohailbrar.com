export enum Status {
  UnderDevelopment,
  InProduction,
  ShutDown,
}

export interface ProjectData {
  name: string;
  description: string;
  status: Status;
  tools: string;
}
