const defaultProjects = [
  {
    id: 1,
    title: "Industrial IoT Monitoring System",
    domain: "IoT",
    significance: "Reduced downtime by 32%",
    summary:
      "End-to-end IoT system for real-time monitoring of industrial motors using cloud dashboards.",
    skills: ["ESP32", "MQTT", "AWS IoT", "React", "Node.js"],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758",
  },
  {
    id: 2,
    title: "Embedded Control System",
    domain: "Embedded",
    significance: "High-reliability firmware",
    summary:
      "Custom embedded firmware for real-time control applications using STM32.",
    skills: ["STM32", "FreeRTOS", "C", "UART", "SPI"],
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
  },
  {
    id: 3,
    title: "Edge AI Defect Detection",
    domain: "Edge AI",
    significance: "98% detection accuracy",
    summary:
      "Computer vision based defect detection deployed on edge devices.",
    skills: ["Python", "OpenCV", "TensorFlow Lite", "Edge AI"],
    image: "https://images.unsplash.com/photo-1581092334494-3f9dcd8b1f33",
  },
];

export function getProjects() {
  const stored = localStorage.getItem("projects");
  return stored ? JSON.parse(stored) : defaultProjects;
}

export function saveProject(project) {
  const current = getProjects();
  const updated = [...current, project];
  localStorage.setItem("projects", JSON.stringify(updated));
}
