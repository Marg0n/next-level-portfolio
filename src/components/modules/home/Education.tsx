import InfoCard from "@/components/shared/cards/InfoCard";
import React from "react";

const Education = () => {
  return (
    <div className="flex flex-col gap-10 w-full px-8 bg-gray-50" id="education">
      <h2
        className="text-4xl lg:text-5xl font-bold text-center text-gray-800"
        data-aos="fade-down"
      >
        Education Qualifications
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
        <InfoCard
          title="Bachelor of Technology (B.Tech)"
          subtitle="Indian Institute of Technology (IIT) Delhi · 2016 – 2020"
          description="Major in Computer Science and Engineering. Strong academic focus on algorithms, software systems, and full-stack web development."
          bulletPoints={[
            "Graduated with First Class Honors",
            "Completed capstone project on scalable web architectures",
            "Member of the programming club and Google Summer of Code alum",
          ]}
        />

        <InfoCard
          title="Higher Secondary Education"
          subtitle="Delhi Public School, RK Puram · 2014 – 2016"
          description="Physics, Chemistry, Mathematics (PCM) stream with Computer Science."
          bulletPoints={[
            "Scored 96% in CBSE Board Exams",
            "Ranked top 1% in National Science Olympiad",
            "Led school coding club and mentored junior students",
          ]}
        />

        <InfoCard
          title="Additional Certifications"
          description="Completed multiple online courses in full-stack development, system design, and cloud computing from platforms like Coursera, Udemy, and edX."
        />
      </div>
    </div>
  );
};

export default Education;
