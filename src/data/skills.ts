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
      { id: 'cpp', name: 'C++', proficiency: 'advanced' },
      { id: 'c', name: 'C', proficiency: 'advanced' },
      { id: 'typescript', name: 'TypeScript', proficiency: 'advanced' },
      { id: 'javascript', name: 'JavaScript', proficiency: 'advanced' },
      { id: 'dart', name: 'Dart', proficiency: 'intermediate' },
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
      { id: 'kubernetes', name: 'Kubernetes', proficiency: 'expert' },
      { id: 'docker', name: 'Docker', proficiency: 'expert' },
      { id: 'gcp', name: 'Google Cloud Platform', proficiency: 'intermediate' },
      { id: 'azure-devops', name: 'Azure DevOps', proficiency: 'advanced' }
    ]
  },
  {
    id: 'devops-infrastructure',
    name: 'DevOps & Infrastructure',
    description: 'Infrastructure automation and deployment',
    skills: [
      { id: 'github-actions', name: 'GitHub Actions', proficiency: 'advanced' },
      { id: 'ci-cd', name: 'CI/CD Pipelines', proficiency: 'advanced' },
      { id: 'terraform', name: 'Terraform', proficiency: 'advanced' },
      { id: 'ansible', name: 'Ansible', proficiency: 'intermediate' },
      { id: 'helm', name: 'Helm', proficiency: 'advanced' },
      { id: 'cmake', name: 'CMake', proficiency: 'advanced' },
      { id: 'git', name: 'Git', proficiency: 'expert' }
    ]
  },
  {
    id: 'frameworks-tools',
    name: 'Frameworks & Development Tools',
    description: 'Development frameworks and libraries',
    skills: [
      { id: 'qt', name: 'Qt / PyQt', proficiency: 'advanced' },
      { id: 'flutter', name: 'Flutter', proficiency: 'intermediate' },
      { id: 'ros', name: 'ROS (Robot Operating System)', proficiency: 'intermediate' },
      { id: 'vue', name: 'Vue.js', proficiency: 'advanced' },
      { id: 'react', name: 'React', proficiency: 'intermediate' },
      { id: 'fastapi', name: 'FastAPI / Flask', proficiency: 'advanced' },
      { id: 'webdriverio', name: 'WebDriverIO', proficiency: 'intermediate' }
    ]
  },
  {
    id: 'testing-qa',
    name: 'Testing & Quality Assurance',
    description: 'Testing frameworks and methodologies',
    skills: [
      { id: 'bdd', name: 'Behavior Driven Development (BDD)', proficiency: 'advanced' },
      { id: 'cucumber', name: 'Cucumber / Gherkin', proficiency: 'advanced' },
      { id: 'unit-testing', name: 'Unit Testing', proficiency: 'expert' },
      { id: 'tdd', name: 'Test-Driven Development (TDD)', proficiency: 'advanced' },
      { id: 'integration-testing', name: 'Integration Testing', proficiency: 'advanced' }
    ]
  },
  {
    id: 'platform-engineering',
    name: 'Platform Engineering',
    description: 'Platform and system architecture',
    skills: [
      { id: 'microservices', name: 'Microservices Architecture', proficiency: 'advanced' },
      { id: 'service-mesh', name: 'Service Mesh (Istio, Linkerd)', proficiency: 'intermediate' },
      { id: 'monitoring', name: 'Monitoring & Observability', proficiency: 'advanced' },
      { id: 'prometheus', name: 'Prometheus / Grafana', proficiency: 'advanced' },
      { id: 'foxglove', name: 'Foxglove (Data Visualization)', proficiency: 'intermediate' },
      { id: 'logging', name: 'Centralized Logging (ELK, Loki)', proficiency: 'intermediate' }
    ]
  },
  {
    id: 'databases',
    name: 'Databases & Data',
    description: 'Database technologies and data processing',
    skills: [
      { id: 'postgres', name: 'PostgreSQL', proficiency: 'advanced' },
      { id: 'redis', name: 'Redis', proficiency: 'intermediate' },
      { id: 'protobuf', name: 'Protocol Buffers', proficiency: 'intermediate' },
      { id: 'mqtt', name: 'MQTT / BluFi', proficiency: 'intermediate' },
      { id: 'http', name: 'HTTP / REST APIs', proficiency: 'advanced' }
    ]
  },
  {
    id: 'practices',
    name: 'Practices & Methodologies',
    description: 'Software engineering best practices',
    skills: [
      { id: 'agile', name: 'Agile / Scrum', proficiency: 'advanced' },
      { id: 'security', name: 'Security & RBAC', proficiency: 'intermediate' },
      { id: 'api-design', name: 'REST / API Design', proficiency: 'advanced' },
      { id: 'code-review', name: 'Code Review & Quality', proficiency: 'advanced' },
      { id: 'embedded-systems', name: 'Embedded Systems', proficiency: 'intermediate' }
    ]
  }
]
