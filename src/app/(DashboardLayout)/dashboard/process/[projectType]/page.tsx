

import { PROJECT_TYPES } from "@/constants/constants"
import { notFound } from "next/navigation"

interface PageProps {
  params: {
    projectType: string
  }
}

export default function ProjectsInsightsPage({ params }: PageProps) {
  const { projectType } = params

  // Validate route
  const validTypes = Object.values(PROJECT_TYPES)

  if (!validTypes.includes(projectType as "fullstackProjects" | "runningProjects" | "upcomingProjects")) {
    notFound()
  }

  switch (projectType) {
    case PROJECT_TYPES.FULLSTACK:
      return <div>Fullstack Projects Content</div>

    case PROJECT_TYPES.RUNNING:
      return <div>Running Projects Content</div>

    case PROJECT_TYPES.UPCOMING:
      return <div>Upcoming Projects Content</div>

    default:
      return null
  }
}