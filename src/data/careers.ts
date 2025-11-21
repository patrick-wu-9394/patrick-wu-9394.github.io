export interface Career {
  id: string
  company: string
  title: string
  years: number
  description?: string
}

export const careerList: Career[] = [
  {
    id: 'career-1',
    company: 'Apollo Global Management',
    title: 'Sr. Software Engineer',
    years: 1,
    description: 'TODO: Add description'
  },
  {
    id: 'career-2',
    company: 'Spartan Radar',
    title: 'Sr. Software Engineer',
    years: 3,
    description: 'TODO: Add description'
  },
  {
    id: 'career-3',
    company: 'Raytheon',
    title: 'Software Engineer 2',
    years: 3,
    description: 'TODO: Add description'
  },
  {
    id: 'career-4',
    company: 'Georgia Tech Research Institute',
    title: 'Intern',
    years: 1,
    description: 'TODO: Add description'
  }
]
