import { FaBug, FaCloud, FaCogs, FaDocker, FaProjectDiagram, FaShieldAlt } from "react-icons/fa";

const ProjectData = [
    {
        title: "CI/CD Pipeline Development & Optimization",
        description:
            "Reduced deployment time by 65% through Jenkins-based CI/CD pipelines, automated testing, and blue-green deployment strategies.",
        icon: <FaCogs />,
        tags: ["Jenkins", "GitHub Actions", "AWS", "GCP"],
        demoLink: "#",
        frontend: "#",
        backend: "#",
    },
    {
        title: "Cloud Security & Compliance for Healthcare SaaS",
        description:
            "Conducted a comprehensive cloud security audit ensuring HIPAA compliance, implemented MFA, and applied OWASP best practices.",
        icon: <FaShieldAlt />,
        tags: ["Cloud", "Security", "HIPAA", "OWASP"],
        demoLink: "#",
        frontend: "#",
        backend: "#",
    },
    {
        title: "Vulnerability Assessment & Penetration Testing",
        description:
            "Performed 200+ penetration tests for global clients, identifying and mitigating 500+ vulnerabilities with risk-based remediation.",
        icon: <FaBug />,
        tags: ["Pentesting", "Security", "Audit"],
        demoLink: "#",
        frontend: "#",
        backend: "#",
    },
    {
        title: "Infrastructure as Code (IaC) & Cloud Provisioning",
        description:
            "Created production-ready IaC using Terraform and CloudFormation. Deployed EKS, GKE, AKS clusters with high availability.",
        icon: <FaCloud />,
        tags: ["Terraform", "AWS", "GCP", "Azure"],
        demoLink: "#",
        frontend: "#",
        backend: "#",
    },
    {
        title: "Cloud Migration for Enterprise IT Infrastructure",
        description:
            "Migrated on-premise systems to AWS & Azure reducing costs by 35%, ensuring PCI-DSS compliance with scalable cloud architecture.",
        icon: <FaProjectDiagram />,
        tags: ["Cloud Migration", "AWS", "Azure", "PCI-DSS"],
        demoLink: "#",
        frontend: "#",
        backend: "#",
    },
    {
        title: "Kubernetes-Based Microservices Deployment",
        description:
            "Automated containerized deployments with Helm and ArgoCD, reducing manual work by 80% and improving scalability.",
        icon: <FaDocker />,
        tags: ["Kubernetes", "Helm", "ArgoCD", "Microservices"],
        demoLink: "#",
        frontend: "#",
        backend: "#",
    },
];
export default ProjectData;