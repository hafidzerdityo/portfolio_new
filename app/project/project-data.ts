import {
  faPython,
  faReact,
  faAws,
  faGolang,
  faJava,
} from "@fortawesome/free-brands-svg-icons";

export type ProjectTag = {
  name: string;
  icon: any | null;
};

export type ProjectItem = {
  id: number;
  thumbnail: string;
  year: string;
  name: string;
  key: string;
  title: string;
  link: string | null;
  date: string;
  desc: string;
  tag: ProjectTag[];
  is_private?: boolean;
};

export const projectList: ProjectItem[] = [
  {
    id: 0,
    thumbnail: "./static/listprojects/pospay_mobile_new.png",
    year: "2025",
    name: "Pospay Mobile",
    key: "pospay_mobile",
    title: "Superapp Fintech Backend",
    link: null,
    date: "November 2025",
    desc: "Maintained and optimized backend API systems for the Pospay mobile superapp, ensuring high availability and performance. Implemented secure transaction flows and integrated multiple financial services using Java Spring Boot, resulting in faster transaction processing and improved user experience.",
    tag: [
      { name: "Java", icon: faJava },
      { name: "Spring Boot", icon: null },
    ],
    is_private: false,
  },
  {
    id: 1,
    thumbnail: "./static/listprojects/ml_thumbnail.png",
    year: "2023",
    name: "Machine Learning Project",
    key: "ml_project",
    title: "Computer Vision Projects - Face Similarity & Object Detection",
    link: null,
    date: "March 2023",
    desc: "Designed and deployed computer vision models for face similarity and object detection, including a YOLO-based house detection system for social welfare programs. Built end-to-end pipelines using Python, ensuring high accuracy and scalability for real-world datasets.",
    tag: [
      { name: "Python", icon: faPython },
      { name: "PyTorch", icon: null },
      { name: "ML", icon: null },
    ],
    is_private: false,
  },
  {
    id: 2,
    thumbnail: "./static/listprojects/posaja_umkm.png",
    year: "2024",
    name: "PosAja UMKM",
    key: "pos_umkm",
    title: "PosAja UMKM Backend",
    link: null,
    date: "January 2024",
    desc: "Built scalable backend API systems for PosAja UMKM, enabling efficient logistics and courier services. Developed with Go Fiber, implemented RESTful endpoints, and containerized services with Docker for smooth deployment and maintenance, improving operational efficiency.",
    tag: [
      { name: "Go", icon: faGolang },
      { name: "Fiber", icon: null },
      { name: "Docker", icon: null },
    ],
    is_private: false,
  },
  {
    id: 3,
    thumbnail: "./static/listprojects/bjbs_ifos.png",
    year: "2024",
    name: "BJB Syariah - IFOS",
    key: "bjbs_ifos",
    title: "Integrated Financing Originating System",
    link: null,
    date: "May 2024",
    desc: "Developed backend APIs for BJBS Financing app, supporting Murabahah, Qardh, Musyarakah, and Ijarah operations. Built with Python FastAPI, implemented robust authentication and authorization, and ensured high reliability for financial transactions in compliance with Islamic finance principles.",
    tag: [
      { name: "Python", icon: faPython },
      { name: "FastAPI", icon: null },
      { name: "Docker", icon: null },
    ],
    is_private: true,
  },
  {
    id: 4,
    thumbnail: "./static/listprojects/bjbs_bds.png",
    year: "2024",
    name: "BJB Syariah - BDS & CBS",
    key: "bjbs_bds",
    title: "Branch Delivery & Core Banking System",
    link: null,
    date: "January 2024",
    desc: "Developed microservices architecture for BDS & CBS, enabling seamless branch operations and banking workflows. Utilized Python FastAPI for backend services, integrated Docker for containerized deployments, and optimized database interactions for high throughput and reliability.",
    tag: [
      { name: "Python", icon: faPython },
      { name: "FastAPI", icon: null },
      { name: "Docker", icon: null },
    ],
    is_private: true,
  },
  {
    id: 5,
    thumbnail: "./static/listprojects/bjbs_mobile.png",
    year: "2024",
    name: "BJB Syariah - Mobile API",
    key: "bjbs_mobile",
    title: "Mobile Banking API",
    link: null,
    date: "January 2024",
    desc: "Implemented backend API infrastructure for BJB Syariah mobile banking app, handling secure transactions, user authentication, and account management. Built with Python FastAPI and Docker, ensuring performance, scalability, and compliance with banking standards.",
    tag: [
      { name: "Python", icon: faPython },
      { name: "FastAPI", icon: null },
      { name: "Docker", icon: null },
    ],
    is_private: true,
  },
  {
    id: 6,
    thumbnail: "./static/listprojects/bcas_bds.png",
    year: "2023",
    name: "BCA Syariah - BDS & CBS",
    key: "bcas_bds",
    title: "Branch Delivery & Core Banking System",
    link: null,
    date: "April 2023",
    desc: "Developed backend microservices for BCA Syariah's BDS & CBS, using Go and gRPC to handle branch delivery and core banking operations. Optimized for low-latency communication and high reliability, providing a robust foundation for banking transactions and service integrations.",
    tag: [
      { name: "Go", icon: faGolang },
      { name: "gRPC", icon: null },
      { name: "Docker", icon: null },
    ],
    is_private: true,
  },
];
