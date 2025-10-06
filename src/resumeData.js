const resume = {
  name: "Charlie Vinson",
  role: "Software Developer",
  email: "vnsn.cs@gmail.com",
  phone: "(480) 955-7263",
  github: "https://github.com/charlievinson",
  linkedin: "https://linkedin.com/in/charlievinson",
  summary: "Recent Computer Science graduate with proven problem-solving ability and 10 years of professional experience working with teams. Adaptable, resourceful, and motivated to contribute innovative solutions.",
  skills: ["C++", "Java", "JavaScript", "React", "Node.js", "Python", "R", "SQL", "Git"],

  education: [
  {
    studyType: "B.S. in Computer Science",
    institution: "Southern New Hampshire University",
    start: "2021",
    end: "2024",
    gpa: "3.9 / 4.0",
    coursework: ["Discrete Mathematics", "Statistical Analysis", "Software Testing", "Software Security", "Operating Platforms",
      "Data Structures", "Algorithms", "Database Design", "Computational Graphics", "Embedded Systems", "Machine Learning",
      "Mobile Application Development", "Client/Server Development", "Full-Stack Web Development"],
    honors: "President's List, Magna Cum Laude"
  }
],

  projects: [
    { name: "Grocery Department Production System", description: "In-store production system to track products and initiate sales in multiple departments using C++", image: "/images/grocery_production.png", link: "#" },
    { name: "Grazioso Salvare Interactive Dashboard", description: "CRUD app with data visualization using Python and MongoDB.", image: "/images/grazioso_dashboard.png", link: "#" },
    { name: "Android Inventory App", description: "Mobile application with user authentication using Java, XML, and SQLite", image: "/images/android_inventory.png", link: "#" },
    { name: "SysTec Smart Thermostat System", description: "Program that reads temperature data via I2C and updates server via UART using Embedded C", image: "/images/systec_thermostat.png", link: "#" },
    { name: "3D Interactive Desktop", description: "Desktop application using C++ OpenGL API to render 3D objects navigated with intuitive keyboard and mouse controls", image: "/images/opengl_desktop.png", link: "#" }
  ],

  experience: [
    {
      title: "",
      company: "Albertson's Companies, Twin Peaks, Craft 64, Cornish Pasty Company",
      start: "2014",
      end: "2025",
      highlights: [
        "Design and deliver small-scale software solutions that improve and optimize existing tools, increasing speed and scalability while reducing costs of production",
        "Operate event-driven systems to understand user needs, respond to demand in real-time, and maintain a high standard of positive user experiences",
        "Practice continuous improvement by incorporating observed data, feedback, and exploration into new assignments",
        "Leverage technical expertise to decrease friction between operations and technology, bridging multiple teams to support business goals",
        "Train new team members with diverse skill sets to deliver exceptional results while complying with technical requirements and operational constraints",
        "Demonstrate creative problem-solving skills and ability to navigate a fast-paced, deadline driven environment"
      ]
    }
  ]
};

export default resume;
