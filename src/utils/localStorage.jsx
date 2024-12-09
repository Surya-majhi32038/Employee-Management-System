

const employees = [ 
  {
    id: 1,
    firstName: "Aarav",
    email: "e@e.com",
    password: "123",
    taskNumber: {
      active: 1,
      new: 2,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        action: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Setup Workstation",
        taskDescription: "Install necessary software and configure the system.",
        taskCategory: "Setup",
        taskDate: "22 Jan 2025",  // Fixed future date
      },
      {
        action: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Submit Weekly Report",
        taskDescription: "Prepare and submit the weekly progress report.",
        taskCategory: "Reporting",
        taskDate: "23 Jan 2025",  // Fixed future date
      },
      {
        action: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Team Meeting",
        taskDescription: "Attend the weekly team meeting.",
        taskCategory: "Meeting",
        taskDate: "24 Jan 2025",  // Fixed future date
      },
    ],
  },
  {
    id: 2,
    firstName: "Isha",
    email: "employee2@example.com",
    password: "123",
    taskNumber: {
      active: 2,
      new: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        action: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client Presentation",
        taskDescription: "Deliver the presentation for project updates.",
        taskCategory: "Client Interaction",
        taskDate: "25 Jan 2025",  // Fixed future date
      },
      {
        action: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Document Review",
        taskDescription: "Review and update the project documentation.",
        taskCategory: "Documentation",
        taskDate: "26 Jan 2025",  // Fixed future date
      },
      {
        action: false,
        newTask: true,
        completed: false,
        failed: true,
        taskTitle: "Bug Fixing",
        taskDescription: "Resolve the bugs reported by the QA team.",
        taskCategory: "Development",
        taskDate: "27 Jan 2025",  // Fixed future date
      },
    ],
  },
  {
    id: 3,
    firstName: "Rohan",
    email: "employee3@example.com",
    password: "123",
    taskNumber: {
      active: 2,
      new: 2,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        action: true,
        newTask: true,
        completed: true,
        failed: false,
        taskTitle: "Database Backup",
        taskDescription: "Create a full backup of the database.",
        taskCategory: "Maintenance",
        taskDate: "28 Jan 2025",  // Fixed future date
      },
      {
        action: true,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Development",
        taskDescription: "Develop the APIs for the new module.",
        taskCategory: "Development",
        taskDate: "29 Jan 2025",  // Fixed future date
      },
      {
        action: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Training Material",
        taskDescription: "Create slides and documents for training sessions.",
        taskCategory: "Training",
        taskDate: "30 Jan 2025",  // Fixed future date
      },
    ],
  },
  {
    id: 4,
    firstName: "Ananya",
    email: "employee4@example.com",
    password: "123",
    taskNumber: {
      active: 1,
      new: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        action: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Server Monitoring",
        taskDescription: "Monitor server performance and logs.",
        taskCategory: "Monitoring",
        taskDate: "31 Jan 2025",  // Fixed future date
      },
      {
        action: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Feedback Collection",
        taskDescription: "Collect feedback from team members about the current project.",
        taskCategory: "Feedback",
        taskDate: "1 Feb 2025",  // Fixed future date
      },
      {
        action: true,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Implement Authentication",
        taskDescription: "Set up authentication for the new service.",
        taskCategory: "Security",
        taskDate: "2 Feb 2025",  // Fixed future date
      },
    ],
  },
  {
    id: 5,
    firstName: "Devika",
    email: "employee5@example.com",
    password: "123",
    taskNumber: {
      active: 1,
      new: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        action: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Marketing Plan",
        taskDescription: "Draft a comprehensive marketing plan for the upcoming quarter.",
        taskCategory: "Marketing",
        taskDate: "3 Feb 2025",  // Fixed future date
      },
      {
        action: true,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Data Cleanup",
        taskDescription: "Organize and clean the customer data.",
        taskCategory: "Data Management",
        taskDate: "4 Feb 2025",  // Fixed future date
      },
      {
        action: true,
        newTask: true,
        completed: true,
        failed: false,
        taskTitle: "Onboard New Employees",
        taskDescription: "Assist new employees in setting up their accounts and systems.",
        taskCategory: "HR",
        taskDate: "5 Feb 2025",  // Fixed future date
      },
    ],
  },
];



const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setData = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getData = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    return {employees,admin};
};
