import { Project } from 'types/projectTypes'; 
const swipperProjects = [
   
    // gps_tracker 
    {
      id: 9,
      name: "GPS Tracking Application for Humans",
      description: "Development of a GPS tracking application focused on precise location and individual safety.",
      firstImage: "/assets/projects/mobile/7GpsTracker.png?height=560&width=585",
      
      images: [
        { src: "/assets/projects/multi/6_1.png?height=560&width=585", title : "FindMe – Authentication Part",description: "The authentication module of the FindMe GPS Tracking Application provides a secure and user-friendly experience for account management." },
        { src: "/assets/projects/multi/6_2.png?height=560&width=585", title : "FindMe – Family Circle Management",description: "SThe Family Circle Management feature in the FindMe GPS Tracking Application enables seamless group organization and collaboration." },
        { src: "/assets/projects/multi/6_3.png?height=560&width=585", title : "FindMe – Espace Utilisateur (User Space)",description: "The Profile Part section of the application demonstrates the key elements of the user interface related to the user's personal profile. This section provides seamless navigation and functionality for managing user information." },
        { src: "/assets/projects/multi/6_4.png?height=560&width=585", title : "FindMe – Real-Time Circle Updates",description: "This feature ensures that the family circle's location data is updated in real-time, offering an interactive and dynamic map experience" }
],
      tags: ["All", "Mobile"],
      type: ["Mobile"],
      gitUrl: "/",
      previewUrl: "/",
      launch_video: "",
      skillsData: [
        { skillName: "JavaScript", proficiency: "Expert", imageLink: "/assets/skills/javascript.svg" },
        { skillName: "React", proficiency: "Advanced", imageLink: "/assets/skills/react.svg" }
      ]
    },
    // pos system
    {
      id: 10,
      name: "POSYSTEM-Prototype",
      description: "A comprehensive point-of-sale system built using PHP with the MVC pattern, featuring user management, product management, product categories, and sales functionalities. The system includes a product filtering page and order creation, with authentication for Admin and Staff users.",
      firstImage: "/assets/projects/mobile/posystem.png?height=560&width=585",
      
      images: [
        { 
          src: "/assets/projects/multi/Pos1.png?height=560&width=585", 
          title: "POS System – Authentication Part",
          description: "The authentication module allows users to securely log in, ensuring access control for Admin and Staff."
        },
        
        { 
          src: "/assets/projects/multi/Pos2.png?height=560&width=585", 
          title: "POS System – Dashboard Part - Admin",
          description: "The Admin Dashboard provides an overview of key metrics and global access control, allowing for comprehensive management of the system."
        },
        { 
          src: "/assets/projects/multi/Pos2-Staff.png?height=560&width=585", 
          title: "POS System – Dashboard Part - Staff",
          description: "The Staff Dashboard offers a simplified view tailored for staff users, with limited access to ensure operational efficiency without compromising security."
        },
        { 
          src: "/assets/projects/multi/Pos3.png?height=560&width=585", 
          title: "POS System – Products Management",
          description: "This section allows for comprehensive management of products, including adding, editing, and deleting items."
        },
        { 
          src: "/assets/projects/multi/Pos4.png?height=560&width=585", 
          title: "POS System – Categories Management",
          description: "Manage product categories effectively, ensuring a well-organized inventory."
        },
        { 
          src: "/assets/projects/multi/Pos5.png?height=560&width=585", 
          title: "POS System – Users Management",
          description: "Admin can manage user accounts, assigning roles and permissions as needed."
        },
        { 
          src: "/assets/projects/multi/Pos6.png?height=560&width=585", 
          title: "POS System – Sales Overview",
          description: "Get insights into sales performance, helping in decision-making and strategy planning."
        }
        // { 
        //   src: "/assets/projects/multi/Pos1.png?height=560&width=585", 
        //   title: "POS System – Authentication Part",
        //   description: "The authentication module allows users to securely log in, ensuring access control for Admin and Staff."
        // },
      ],
      tags: ["All", "Mobile"],
      type: ["Mobile"],
      gitUrl: "/",
      previewUrl: "/",
      launch_video: "",
      skillsData: [
        { skillName: "JavaScript", proficiency: "Expert", imageLink: "/assets/skills/javascript.svg" },
        { skillName: "React", proficiency: "Advanced", imageLink: "/assets/skills/react.svg" }
      ]
    },
    // notes app 
    {
      id: 11,
      name: "NotesApp",
      description: "A versatile notes application designed for seamless note-taking and organization.",
      firstImage: "/assets/projects/mobile/notesApp.png?height=560&width=585",
      
      images: [
        { 
          src: "/assets/projects/multi/notes1.png?height=560&width=585", 
          title: "Notes App – Authentication Part",
          description: "The authentication module of the NotesApp provides a secure and intuitive login experience for users, ensuring their notes are protected."
        },
        { 
          src: "/assets/projects/multi/notes2.png?height=560&width=585", 
          title: "Notes App – Public Notes Part",
          description: "This section showcases the Public Notes feature, where users can view, create, and manage notes visible to others, promoting collaboration and sharing."
        },
        { 
          src: "/assets/projects/multi/notes3.png?height=560&width=585", 
          title: "Notes App – Private Notes",
          description: "The Private Notes section allows users to create and manage their personal notes securely, providing a private space for sensitive information."
        }
      ],
      tags: ["All", "Mobile"],
      type: ["Mobile"],
      gitUrl: "/",
      previewUrl: "/",
      launch_video: "",
      skillsData: [
        { skillName: "JavaScript", proficiency: "Expert", imageLink: "/assets/skills/javascript.svg" },
        { skillName: "React", proficiency: "Advanced", imageLink: "/assets/skills/react.svg" }
      ]
    }
  ];
  
  export default swipperProjects;
  