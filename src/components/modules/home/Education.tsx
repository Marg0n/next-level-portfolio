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
        {/* Card 1 */}
        <div
          className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 transition-transform transform hover:scale-[1.02] hover:shadow-xl"
          data-aos="fade-up"
        >
          <div className="mb-3">
            <h3 className="text-2xl font-semibold text-gray-800">
              Bachelor of Technology (B.Tech)
            </h3>
            <p className="text-sm text-gray-500">
              Indian Institute of Technology (IIT) Delhi · 2016 – 2020
            </p>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Major in Computer Science and Engineering. Strong academic focus on
            algorithms, software systems, and full-stack web development.
          </p>

          <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
            <li>Graduated with First Class Honors</li>
            <li>Completed capstone project on scalable web architectures</li>
            <li>Member of the programming club and Google Summer of Code alum</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div
          className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 transition-transform transform hover:scale-[1.02] hover:shadow-xl"
          data-aos="fade-up"
        >
          <div className="mb-3">
            <h3 className="text-2xl font-semibold text-gray-800">
              Higher Secondary Education
            </h3>
            <p className="text-sm text-gray-500">
              Delhi Public School, RK Puram · 2014 – 2016
            </p>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Physics, Chemistry, Mathematics (PCM) stream with Computer Science.
          </p>

          <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
            <li>Scored 96% in CBSE Board Exams</li>
            <li>Ranked top 1% in National Science Olympiad</li>
            <li>Led school coding club and mentored junior students</li>
          </ul>
        </div>

        {/* Card 3 (Optional / Placeholder) */}
        <div
          className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 transition-transform transform hover:scale-[1.02] hover:shadow-xl"
          data-aos="fade-up"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Additional Certifications
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Completed multiple online courses in full-stack development, system
            design, and cloud computing from platforms like Coursera, Udemy, and
            edX.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;