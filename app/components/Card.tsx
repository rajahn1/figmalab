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
    first: "2xl:pr-44 xl:pr-32 p-8 md:pb-8 pb-20 px-10",
    second: "md:p-16 p-8",
  };

  const className = `bg-${bgColor} text-${textColor}`;
  return (
    <div
      className={`flex flex-col ${paddings[type]} 2xl:gap-8 xl:gap-3 gap-4 rounded-2xl md:px-8 ${className}`}
    >
      {data.map((skill, idx) => (
        <Skill icon={icon} key={idx} label={skill} type={type} />
      ))}
    </div>
  );
}
