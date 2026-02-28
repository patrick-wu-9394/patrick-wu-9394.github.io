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
    id: 'frameworks-tools',
    name: 'Frameworks & Development Tools',
    description: 'Development frameworks and libraries',
    skills: [
      { id: 'qt', name: 'Qt / PyQt', proficiency: 'advanced' },
      { id: 'flutter', name: 'Flutter', proficiency: 'intermediate' },
      { id: 'ros', name: 'ROS (Robot Operating System)', proficiency: 'intermediate' },
      { id: 'vue', name: 'Vue.js', proficiency: 'advanced' },
      { id: 'react', name: 'React', proficiency: 'intermediate' },
      { id: 'fastapi', name: 'FastAPI', proficiency: 'advanced' },
    ]
  },
  {
    id: 'cloud-platforms',
    name: 'Cloud Platforms',
    description: 'Cloud infrastructure and services',
    skills: [
      { id: 'azure', name: 'Microsoft Azure', proficiency: 'expert' },
      { id: 'aks', name: 'Azure Kubernetes Service (AKS)', proficiency: 'expert' },
      { id: 'kubernetes', name: 'Kubernetes', proficiency: 'expert' },
      { id: 'docker', name: 'Docker', proficiency: 'expert' },
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
      { id: 'cmake', name: 'CMake', proficiency: 'advanced' },
      { id: 'git', name: 'Git', proficiency: 'expert' }
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
