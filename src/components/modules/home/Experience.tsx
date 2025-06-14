
import React from 'react';

const Experience = () => {
    return (
        <div className='flex flex-col gap-6 w-full p-5 relative justify-center items-center ' >
            <h2 className="text-5xl text-center" data-aos="fade-down">Recent Work Experiences</h2>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-3xl" data-aos="fade-up">Job Title 1</h3>
                        <p className="text-base" data-aos="fade-up">
                            Description of job responsibilities and achievements.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-3xl" data-aos="fade-up">Job Title 2</h3>
                        <p className="text-base" data-aos="fade-up">
                            Description of job responsibilities and achievements.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-3xl" data-aos="fade-up">Job Title 3</h3>
                        <p className="text-base" data-aos="fade-up">
                            Description of job responsibilities and achievements.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;