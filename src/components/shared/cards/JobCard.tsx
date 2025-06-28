import React from "react";

type JobCardProps = {
  jobTitle: string;
  company: string;
  location?: string;
  period: string;
  description: string;
  achievements?: string[];
};

const JobCard: React.FC<JobCardProps> = ({
  jobTitle,
  company,
  location,
  period,
  description,
  achievements,
}) => {
  return (
    <div
      className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 transition-transform transform hover:scale-[1.02] hover:shadow-xl"
      data-aos="fade-up"
    >
      <div className="mb-3">
        <h3 className="text-2xl font-semibold text-gray-800">{jobTitle}</h3>
        <p className="text-sm text-gray-500">
          {company} · {period} {location ? `· ${location}` : ""}
        </p>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {description}
      </p>

      {achievements && achievements.length > 0 && (
        <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
          {achievements.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JobCard;
