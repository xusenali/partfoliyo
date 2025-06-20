import { Progress } from 'antd';

const skills = [
    { name: 'HTML', percent: 100 },
    { name: 'CSS', percent: 100 },
    { name: 'TailwindCSS', percent: 100 },
    { name: 'JavaScript', percent: 85 },
    { name: 'React', percent: 80 },
    { name: 'Redux Toolkit', percent: 70 },
    { name: 'React Query', percent: 70 },
    { name: 'Formik', percent: 100 },
    { name: 'API Integration', percent: 88 },
    { name: 'Next.js', percent: 70 },
    { name: 'TypeScript', percent: 70 },
];

export default function SkillList() {
    return (
        <ul className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
                <li
                    key={index}
                    className="shadowStyle p-3 rounded w-[300px] bg-transparent"
                >
                    <div className="mb-2 font-semibold text-sm text-blue-400">
                        {skill.name}
                    </div>
                    <Progress
                        percent={skill.percent}
                        size="small"
                        strokeColor="#1677ff"
                        format={percent => (
                            <span style={{ color: 'white' }}>{percent}%</span>
                        )}
                    />
                </li>
            ))}
        </ul>
    );
}
