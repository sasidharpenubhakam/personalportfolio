export interface Education {
    id: string;
    degree: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
    gpa?: string;
    description?: string;
  }
  
  export const education: Education[] = [
    {
      id: "northeastern",
      degree: "B.Tech",
      institution: "National institute of technology andhra pradesh",
      location: "Tadepalligudem (west Godavari",
      startDate: "November 2022",
      endDate: "November2026",
      },

    // {
    //   id: "srm",
    //   degree: "Bachelor of Science in Computer Science",
    //   institution: "SRM University - AP",
    //   location: "Vijayawada, India",
    //   startDate: "October 2020",
    //   endDate: "May 2024",
    //   gpa: "8.3/10.00"
    // }
  ];