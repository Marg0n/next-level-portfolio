// components/shared/cards/InfoCard.tsx
import React from "react";

type InfoCardProps = {
  title: string;
  subtitle?: string;
  description?: string;
  bulletPoints?: string[];
  aos?: string;
};

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  subtitle,
  description,
  bulletPoints,
  aos = "fade-up",
}) => {
  return (
    <div
      className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 transition-transform transform hover:scale-[1.02] hover:shadow-xl"
      data-aos={aos}
    >
      <div className="mb-3">
        <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      </div>

      {description && (
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>
      )}

      {bulletPoints && bulletPoints.length > 0 && (
        <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
          {bulletPoints.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InfoCard;