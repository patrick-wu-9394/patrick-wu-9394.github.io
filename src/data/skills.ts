export interface Skill {
  id: string
  name: string
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
      { id: 'python', name: 'Python' },
      { id: 'cpp', name: 'C++' },
      { id: 'c', name: 'C' },
      { id: 'cuda', name: 'CUDA' },
      { id: 'typescript', name: 'TypeScript' },
      { id: 'javascript', name: 'JavaScript' },
      { id: 'dart', name: 'Dart' },
      { id: 'bash', name: 'Bash / Shell' },
      { id: 'sql', name: 'SQL' }
    ]
  },
  {
    id: 'frameworks-tools',
    name: 'Frameworks & Development Tools',
    description: 'Development frameworks and libraries',
    skills: [
      { id: 'fastapi', name: 'FastAPI' },
      { id: 'qt', name: 'Qt / PyQt' },
      { id: 'flutter', name: 'Flutter' },
      { id: 'ros', name: 'ROS' },
      { id: 'vue', name: 'Vue.js' },
      { id: 'gh-cli', name: 'GitHub CLI' },
      { id: 'opencode', name: 'OpenCode' },
      { id: 'claude', name: 'Claude' }
    ]
  },
  {
    id: 'platforms',
    name: 'Platforms',
    description: 'Cloud infrastructure and services',
    skills: [
      { id: 'github', name: 'GitHub' },
      { id: 'azure', name: 'Microsoft Azure' },
      { id: 'aks', name: 'Azure Kubernetes Service (AKS)' },
      { id: 'docker', name: 'Docker' }
    ]
  },
  {
    id: 'devops-infrastructure',
    name: 'DevOps & Infrastructure',
    description: 'Infrastructure automation and deployment',
    skills: [
      { id: 'github-actions', name: 'GitHub Actions' },
      { id: 'terraform', name: 'Terraform' },
      { id: 'helm', name: 'Helm' },
      { id: 'cmake', name: 'CMake' },
      { id: 'git', name: 'Git' }
    ]
  }
]
