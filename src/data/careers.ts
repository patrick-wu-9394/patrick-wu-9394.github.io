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
      'Developed advanced radar perception software and infrastructure, leading cross-platform applications and CI/CD initiatives.',
    achievements: [
      {
        title: 'Python & Flutter Applications',
        description:
          'Built HITL Python/Qt desktop tool and cross-platform Flutter mobile app with real-time radar data streaming and protocol interfaces'
      },
      {
        title: 'Testing & QA Infrastructure',
        description:
          'Implemented WebDriverIO automation framework and Python/Qt regression testing platform with automated reporting'
      },
      {
        title: 'CES 2023 Kubernetes Showcase',
        description:
          'Led Wipro collaboration demonstrating radar perception software in Docker/Kubernetes, resulting in $2M fundraising investment'
      },
      {
        title: 'C++ Platform Modernization',
        description:
          'Converted Python codebase to C++, integrated ROS framework and Foxglove visualization for improved performance'
      },
      {
        title: 'CI/CD Automation',
        description:
          'Implemented company-wide GitHub Actions pipelines automating linting, versioning, builds, and releases'
      }
    ]
  },
  {
    id: 'career-3',
    company: 'Raytheon',
    title: 'Software Engineer 2',
    years: 3,
    description:
      'Contributed to mission-critical radar systems with focus on code quality, testing, and infrastructure optimization.',
    achievements: [
      {
        title: 'BDD Testing Framework',
        description:
          'Created Cucumber-based Behavior Driven Development framework to automate requirements verification for C++ radar stack'
      },
      {
        title: 'Code Optimization & Refactoring',
        description:
          'Redesigned network classes to use common interface (75% code reduction) and optimized CMake build procedures'
      },
      {
        title: 'Test Coverage & Quality',
        description:
          'Implemented comprehensive unit testing increasing code coverage by 15% on 80,000+ line codebase'
      },
      {
        title: 'Docker Containerization',
        description:
          'Created Docker containers packaging complete software stack for resource sharing and behavior simulation'
      }
    ]
  },
  {
    id: 'career-4',
    company: 'Georgia Tech Research Institute',
    title: 'Electrical Engineer Co-op',
    years: 1,
    description: 'Completed three-rotation co-op gaining embedded software development experience while pursuing Bachelor\'s degree.',
    achievements: [
      {
        title: 'USB & Sensor Drivers',
        description:
          'Developed USB CDC driver and I2C drivers for sensor integration with interrupt and command handling'
      },
      {
        title: 'Physiological Monitoring System',
        description:
          'Created skin sensing feature tracking Galvanic Skin Responses and temperature via ADC DMA controller'
      },
      {
        title: 'RTOS Development',
        description:
          'Developed software under RTOS conventions utilizing multithreading, semaphores, and mutexes'
      }
    ]
  }
]
