// ./components/SkillGrid.jsx
import React from 'react';
// React Icons importlari
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiRedux, SiReactquery } from 'react-icons/si';
import { BiCodeBlock } from 'react-icons/bi';

function SkillGrid() {
    const skills = [
        { name: 'HTML', icon: FaHtml5 },
        { name: 'CSS', icon: FaCss3Alt },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'JavaScript', icon: FaJsSquare },
        { name: 'OOP', icon: BiCodeBlock },
        { name: 'React', icon: FaReact },
        { name: 'React Redux', icon: SiRedux },
        { name: 'Redux Toolkit', icon: SiRedux },
        { name: 'React Query', icon: SiReactquery },
        { name: 'RTK Query', icon: SiRedux },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'Next.js', icon: SiNextdotjs },
    ];

    return (
        <div id='skill' className=" max-w-270 p-10  sm:px-6 lg:px-8 flex-col rounded  flex justify-center items-center">
            <h1 className='text-center text-4xl text-[#EEEFE0]'>My Skills</h1>
            <div className="
            skils
        rounded-3xl
       h-max
       w-full
       p-10
       gap-5
       flex flex-wrap
       items-center
       justify-center
      ">
                {skills.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                        <div
                            key={index}
                            className=" shadowStyle
  w-30
  rounded-xl
  p-4 
  flex flex-col items-center justify-center
  text-[#EEEFE0]
  text-base sm:text-lg font-medium
  duration-300
  ease-in-out
  cursor-pointer
  whitespace-nowrap
  transform
  hover:-translate-y-1
"

                        >
                            {IconComponent ? (
                                <IconComponent className="w-10 h-10 sm:w-12 sm:h-12 mb-2 sm:mb-3" />
                            ) : (
                                <div className="w-10 h-10 sm:w-12 sm:h-12 mb-2 sm:mb-3 flex items-center justify-center"></div>
                            )}
                            <span>{skill.name}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default SkillGrid;