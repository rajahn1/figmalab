import Skill from "./Skill";

export interface Props {
  icon: string;
  data: string[];
  bgColor: string;
  textColor: string;
  type?: "first" | "second";
}

export default function Card({ icon, data, bgColor, textColor, type = "first" }: Props) {
  const paddings = {
    first: "2xl:pr-44 xl:pr-32 p-8",
    second: "p-16",
  };
  const className = `bg-${bgColor} text-${textColor}`;
  return (
    <div className={`flex flex-col ${paddings[type]} 2xl:gap-8 xl:gap-3 rounded-2xl ${className}`}>
      {data.map((skill, idx) => (
        <Skill icon={icon} key={idx} label={skill} />
      ))}
    </div>
  );
}
