export const site = {
  name: "Alex Sanchez",
  role: "Full-stack engineer building AI & cloud systems",
  location: "Chicago · Trinity College Hartford",
  summary:
    "I build production systems at the intersection of AI, cloud infrastructure, and real-world impact — from municipal video intelligence to cloud-native fitness platforms.",
  github: "https://github.com/Alexsanch3zx",
  // Paste your LinkedIn URL here when you have it:
  linkedin: "https://www.linkedin.com/in/",
  projects: [
    {
      id: "hartford-red-light",
      name: "Red Light Site Selection",
      client: "City of Hartford · AI Video Analytics",
      tagline:
        "Turn intersection footage into searchable traffic intelligence for safer site decisions.",
      description:
        "A Streamlit web app for the City of Hartford that ingests uploaded videos, samples frames with OpenCV, and produces multi-style summaries with NVIDIA Cosmos — capturing pedestrian behavior, vehicle speed patterns, and intersection activity. Summaries are embedded and indexed in Postgres + pgvector so operators can retrieve similar traffic scenarios with natural language.",
      highlights: [
        "End-to-end pipeline: frame extraction → per-frame VLM analysis → scene summarization",
        "Configurable sampling rate and max-frame controls for performance",
        "Semantic search over traffic scenarios via sentence-transformers + Supabase pgvector",
      ],
      stack: [
        "Streamlit",
        "OpenCV",
        "NVIDIA Cosmos",
        "sentence-transformers",
        "Postgres",
        "pgvector",
        "Supabase",
      ],
      image: "/project-hartford.jpg",
      alt: "City traffic corridor at dusk",
    },
    {
      id: "fitness-microservices",
      name: "Fitness Challenge Tracker",
      client: "Cloud-Native Microservices",
      tagline:
        "Seven services. One event-driven platform for workouts, challenges, and live leaderboards.",
      description:
        "A cloud-native fitness tracking platform built as seven microservices — React, Spring Boot, Node.js/Express, PostgreSQL, RabbitMQ, and Kubernetes — covering workout logging, challenge participation, and real-time leaderboards with JWT-secured APIs.",
      highlights: [
        "Event-driven architecture with RabbitMQ for async service communication",
        "JWT auth with Spring Security across microservices",
        "Docker + Kubernetes (ConfigMaps, Ingress) and GitHub Actions CI/CD to Harbor",
      ],
      stack: [
        "React",
        "Spring Boot",
        "Node.js",
        "PostgreSQL",
        "RabbitMQ",
        "Docker",
        "Kubernetes",
        "GitHub Actions",
      ],
      image: "/project-fitness.jpg",
      alt: "Athlete training with focused intensity in a gym",
    },
  ],
} as const;
