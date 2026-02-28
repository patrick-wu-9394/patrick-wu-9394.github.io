export interface Skill {
  id: string
  name: string
  proficiency?: 'beginner' | 'intermediate' | 'advanced' | 'expert'
}

export interface SkillCategory {
  id: string
  name: string
  description?: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Programming Languages',
    description: 'Core languages for software development',
    skills: [
      { id: 'python', name: 'Python', proficiency: 'expert' },
      { id: 'typescript', name: 'TypeScript', proficiency: 'advanced' },
      { id: 'javascript', name: 'JavaScript', proficiency: 'advanced' },
      { id: 'go', name: 'Go', proficiency: 'intermediate' },
      { id: 'bash', name: 'Bash / Shell', proficiency: 'advanced' },
      { id: 'sql', name: 'SQL', proficiency: 'advanced' }
    ]
  },
  {
    id: 'cloud-platforms',
    name: 'Cloud Platforms',
    description: 'Cloud infrastructure and services',
    skills: [
      { id: 'azure', name: 'Microsoft Azure', proficiency: 'expert' },
      { id: 'aks', name: 'Azure Kubernetes Service (AKS)', proficiency: 'expert' },
      { id: 'aws', name: 'Amazon Web Services (AWS)', proficiency: 'advanced' },
      { id: 'gcp', name: 'Google Cloud Platform', proficiency: 'intermediate' },
      { id: 'azure-devops', name: 'Azure DevOps', proficiency: 'advanced' }
    ]
  },
  {
    id: 'devops-infrastructure',
    name: 'DevOps & Infrastructure',
    description: 'Infrastructure automation and deployment',
    skills: [
      { id: 'kubernetes', name: 'Kubernetes', proficiency: 'expert' },
      { id: 'docker', name: 'Docker', proficiency: 'expert' },
      { id: 'terraform', name: 'Terraform', proficiency: 'advanced' },
      { id: 'ansible', name: 'Ansible', proficiency: 'intermediate' },
      { id: 'ci-cd', name: 'CI/CD Pipelines', proficiency: 'advanced' },
      { id: 'helm', name: 'Helm', proficiency: 'advanced' },
      { id: 'git', name: 'Git', proficiency: 'expert' }
    ]
  },
  {
    id: 'platform-engineering',
    name: 'Platform Engineering',
    description: 'Platform and internal developer platforms',
    skills: [
      { id: 'idp', name: 'Internal Developer Platforms', proficiency: 'advanced' },
      { id: 'service-mesh', name: 'Service Mesh (Istio, Linkerd)', proficiency: 'intermediate' },
      { id: 'monitoring', name: 'Monitoring & Observability', proficiency: 'advanced' },
      { id: 'prometheus', name: 'Prometheus / Grafana', proficiency: 'advanced' },
      { id: 'logging', name: 'Centralized Logging (ELK, Loki)', proficiency: 'intermediate' }
    ]
  },
  {
    id: 'tools-frameworks',
    name: 'Tools & Frameworks',
    description: 'Development and operations tools',
    skills: [
      { id: 'vue', name: 'Vue.js', proficiency: 'advanced' },
      { id: 'react', name: 'React', proficiency: 'intermediate' },
      { id: 'fastapi', name: 'FastAPI / Flask', proficiency: 'advanced' },
      { id: 'postgres', name: 'PostgreSQL', proficiency: 'advanced' },
      { id: 'redis', name: 'Redis', proficiency: 'intermediate' },
      { id: 'rabbitmq', name: 'RabbitMQ / Message Queues', proficiency: 'intermediate' }
    ]
  },
  {
    id: 'practices',
    name: 'Best Practices & Methodologies',
    description: 'Software engineering practices',
    skills: [
      { id: 'microservices', name: 'Microservices Architecture', proficiency: 'advanced' },
      { id: 'testing', name: 'Test-Driven Development (TDD)', proficiency: 'advanced' },
      { id: 'agile', name: 'Agile / Scrum', proficiency: 'advanced' },
      { id: 'security', name: 'Security & RBAC', proficiency: 'intermediate' },
      { id: 'api-design', name: 'REST / API Design', proficiency: 'advanced' }
    ]
  }
]
