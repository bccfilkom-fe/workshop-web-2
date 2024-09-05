import { IDetailJobData } from "@/shared/models/jobInterfaces";

const mockJobs: IDetailJobData[] = [
  {
    slug: "software-engineer",
    company_name: "TechCorp",
    title: "Software Engineer",
    description: "Develop and maintain web applications using modern technologies.",
    remote: true,
    url: "https://techcorp.jobs/software-engineer",
    tags: ["JavaScript", "React", "Node.js"],
    job_types: ["Full-Time", "Remote"],
    location: "San Francisco, CA",
    created_at: new Date("2024-08-01"),
  },
  {
    slug: "frontend-developer",
    company_name: "DesignStudio",
    title: "Frontend Developer",
    description: "Work closely with designers to implement web UIs.",
    remote: false,
    url: "https://designstudio.jobs/frontend-developer",
    tags: ["HTML", "CSS", "JavaScript"],
    job_types: ["Part-Time"],
    location: "New York, NY",
    created_at: new Date("2024-08-02"),
  },
  {
    slug: "backend-developer",
    company_name: "Backend Masters",
    title: "Backend Developer",
    description: "Build robust and scalable backend services.",
    remote: true,
    url: "https://backendmasters.jobs/backend-developer",
    tags: ["Node.js", "MongoDB", "API"],
    job_types: ["Full-Time", "Remote"],
    location: "Remote",
    created_at: new Date("2024-08-03"),
  },
  {
    slug: "ux-designer",
    company_name: "CreativeLab",
    title: "UX Designer",
    description: "Design user-friendly interfaces and experiences.",
    remote: true,
    url: "https://creativelab.jobs/ux-designer",
    tags: ["UX", "Design", "Research"],
    job_types: ["Contract"],
    location: "Austin, TX",
    created_at: new Date("2024-08-04"),
  },
  {
    slug: "data-scientist",
    company_name: "DataExperts",
    title: "Data Scientist",
    description: "Analyze and interpret complex data sets.",
    remote: false,
    url: "https://dataexperts.jobs/data-scientist",
    tags: ["Python", "Machine Learning", "Statistics"],
    job_types: ["Full-Time"],
    location: "Chicago, IL",
    created_at: new Date("2024-08-05"),
  },
  {
    slug: "product-manager",
    company_name: "Productify",
    title: "Product Manager",
    description: "Manage the development and lifecycle of products.",
    remote: true,
    url: "https://productify.jobs/product-manager",
    tags: ["Product Management", "Agile", "Strategy"],
    job_types: ["Full-Time"],
    location: "Seattle, WA",
    created_at: new Date("2024-08-06"),
  },
  {
    slug: "marketing-specialist",
    company_name: "MarketMakers",
    title: "Marketing Specialist",
    description: "Develop and implement marketing strategies.",
    remote: true,
    url: "https://marketmakers.jobs/marketing-specialist",
    tags: ["Marketing", "SEO", "Content Creation"],
    job_types: ["Part-Time"],
    location: "San Diego, CA",
    created_at: new Date("2024-08-07"),
  },
  {
    slug: "qa-engineer",
    company_name: "TestersHub",
    title: "QA Engineer",
    description: "Ensure the quality and functionality of software through testing.",
    remote: false,
    url: "https://testershub.jobs/qa-engineer",
    tags: ["Testing", "Automation", "Quality Assurance"],
    job_types: ["Full-Time"],
    location: "Boston, MA",
    created_at: new Date("2024-08-08"),
  },
  {
    slug: "sys-admin",
    company_name: "TechWorks",
    title: "System Administrator",
    description: "Manage and maintain IT systems and infrastructure.",
    remote: false,
    url: "https://techworks.jobs/sys-admin",
    tags: ["SysAdmin", "Networking", "Security"],
    job_types: ["Full-Time"],
    location: "Atlanta, GA",
    created_at: new Date("2024-08-09"),
  },
  {
    slug: "sales-representative",
    company_name: "SalesForce",
    title: "Sales Representative",
    description: "Sell products and services, and manage client relationships.",
    remote: true,
    url: "https://salesforce.jobs/sales-representative",
    tags: ["Sales", "Client Relations", "Negotiation"],
    job_types: ["Full-Time"],
    location: "Philadelphia, PA",
    created_at: new Date("2024-08-10"),
  },
  {
    slug: "graphic-designer",
    company_name: "DesignWorks",
    title: "Graphic Designer",
    description: "Create visual concepts and designs for various media.",
    remote: true,
    url: "https://designworks.jobs/graphic-designer",
    tags: ["Graphic Design", "Adobe Suite", "Creativity"],
    job_types: ["Freelance"],
    location: "Denver, CO",
    created_at: new Date("2024-08-11"),
  },
];

export default mockJobs;
