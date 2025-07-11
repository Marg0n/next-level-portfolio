import JobCard from "@/components/shared/cards/JobCard";
import React from "react";

const Experience = () => {
  return (
    <div className="flex flex-col gap-10 w-full px-8 bg-gray-50" id="experience">
      <h2
        className="text-4xl lg:text-5xl font-bold text-center text-gray-800"
        data-aos="fade-down"
      >
        Work Experiences
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
        {/* Card 1 */}
        <div
          className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 transition-transform transform hover:scale-[1.02] hover:shadow-xl"
          data-aos="fade-up"
        >
          <div className="mb-3">
            <h3 className="text-2xl font-semibold text-gray-800">
              Software Engineer
            </h3>
            <p className="text-sm text-gray-500">
              Google LLC · Jan 2022 – May 2024 · Remote
            </p>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Worked on frontend architecture and performance optimization of core
            products using React and TypeScript.
          </p>

          <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
            <li>
              Reduced initial load time by 45% by implementing lazy loading and
              code splitting.
            </li>
            <li>
              Led migration of legacy UI components to a modern design system.
            </li>
            <li>
              Collaborated with cross-functional teams across 3 time zones.
            </li>
          </ul>
        </div>

        {/* Card 2 */}
        <JobCard
          jobTitle="Software Engineer"
          company="Google LLC"
          location="Remote"
          period="Jan 2022 – May 2024"
          description="Worked on frontend architecture and performance optimization of core products using React and TypeScript."
          achievements={[
            'Reduced initial load time by 45%',
            'Led UI migration to a design system',
            'Worked with cross-functional teams in 3 time zones'
          ]}
        />

        {/* Card 3 */}
        <div
          className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 transition-transform transform hover:scale-[1.02] hover:shadow-xl"
          data-aos="fade-up"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Job Title 3
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Description of job responsibilities and achievements.
          </p>
        </div>

        {/* Card 4 */}
        <JobCard
          jobTitle="Frontend Developer"
          company="Facebook"
          period="Jun 2020 – Dec 2021"
          description="Focused on feature delivery and developer experience improvements within the News Feed team."
        />

        {/* Card 5 */}
        <JobCard
          jobTitle="Intern"
          company="Netflix"
          location="Los Gatos, CA"
          period="Jan 2020 – May 2020"
          description="Developed internal tools to automate manual QA workflows."
          achievements={[
            'Improved QA automation by 60%',
            'Created dashboards using D3.js'
          ]}
        />
        
      </div>
    </div>
  );
};

export default Experience;
