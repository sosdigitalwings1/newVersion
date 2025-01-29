// Define the Image type to always include src and description
export type Image = {
    src: string;
    description: string;
  };
  
  // Define the Project type
  export interface Project {
    id: number;
    name: string;
    description: string;
    firstImage: string;
    images: Image[];  // This will always be an array of Image objects
    tags: string[];
    type: string[];
    gitUrl: string;
    previewUrl: string;
    launch_video: string;
    skillsData: { skillName: string; proficiency: string; imageLink: string }[];
  }
  