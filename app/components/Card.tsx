import Skill from "./Skill";

export interface Props {
  icon: string;
  data: string[];
  bgColor: string;
  textColor: string;
}

export default function Card({ icon, data, bgColor, textColor }: Props) {
  const className = `bg-${bgColor} text-${textColor}`;
  return (
    <div className={`flex flex-col gap-8 rounded-2xl p-12 mt-16 w-max ${className}`}>
      {data.map((skill, idx) => (
        <Skill icon={icon} key={idx} label={skill} />
      ))}
    </div>
  );
}
