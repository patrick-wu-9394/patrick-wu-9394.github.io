export interface Achievement {
  title: string
  description: string
}

export interface Career {
  id: string
  company: string
  title: string
  years: number
  description?: string
  achievements?: Achievement[]
}

export const careerList: Career[] = [
  {
    id: 'career-1',
    company: 'Apollo Global Management',
    title: 'Sr. Software Engineer',
    years: 1,
    description:
      'Led platform engineering and DevOps initiatives for financial technology systems.',
    achievements: [
      {
        title: 'Azure Platform Migration',
        description:
          'Architected and led migration of legacy applications to Azure AKS, improving deployment efficiency by 40%'
      },
      {
        title: 'CI/CD Pipeline Modernization',
        description:
          'Designed and implemented enterprise CI/CD pipelines using Azure DevOps and GitOps workflows'
      },
      {
        title: 'Infrastructure as Code',
        description:
          'Implemented Terraform-based IaC for reproducible infrastructure across multiple environments'
      }
    ]
  },
  {
    id: 'career-2',
    company: 'Spartan Radar',
    title: 'Sr. Software Engineer',
    years: 3,
    description:
      'Built and maintained core platform systems for defense technology, focusing on scalability and reliability.',
    achievements: [
      {
        title: 'Kubernetes Cluster Management',
        description:
          'Designed and operated production Kubernetes clusters supporting 50+ microservices'
      },
      {
        title: 'Microservices Architecture',
        description:
          'Architected distributed microservices platform using Python and Go, reducing deployment time by 60%'
      },
      {
        title: 'Observability Platform',
        description:
          'Implemented comprehensive monitoring and logging stack using Prometheus, Grafana, and ELK'
      },
      {
        title: 'Team Leadership',
        description:
          'Mentored team of 5+ engineers on DevOps best practices and platform engineering principles'
      }
    ]
  },
  {
    id: 'career-3',
    company: 'Raytheon',
    title: 'Software Engineer 2',
    years: 3,
    description:
      'Contributed to mission-critical systems with focus on automation, testing, and infrastructure reliability.',
    achievements: [
      {
        title: 'Automation Framework Development',
        description:
          'Developed Python-based automation framework for infrastructure provisioning, reducing manual tasks by 70%'
      },
      {
        title: 'Container Orchestration',
        description:
          'Managed Docker and Kubernetes deployments for high-availability systems supporting defense operations'
      },
      {
        title: 'Testing Infrastructure',
        description:
          'Built comprehensive testing infrastructure with TDD practices, increasing code coverage to 85%+'
      },
      {
        title: 'Security Implementation',
        description:
          'Implemented RBAC and security controls across cloud infrastructure deployments'
      }
    ]
  },
  {
    id: 'career-4',
    company: 'Georgia Tech Research Institute',
    title: 'Intern',
    years: 1,
    description: 'Contributed to research initiatives in distributed systems and cloud computing.',
    achievements: [
      {
        title: 'Research Support',
        description:
          'Assisted with research projects in distributed computing and cloud infrastructure optimization'
      },
      {
        title: 'Development Contribution',
        description:
          'Developed tools and utilities in Python to support research data collection and analysis'
      },
      {
        title: 'Infrastructure Setup',
        description:
          'Configured development environments and testing infrastructure for research projects'
      }
    ]
  }
]
