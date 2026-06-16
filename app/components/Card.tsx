import Skill from "./Skill";

export interface Props {
  icon: string;
  data: string[];
  bgColor: string;
  textColor: string;
  type?: "first" | "second";
}

export default function Card({ icon, data, bgColor, textColor, type = "first" }: Props) {
  const className = `bg-${bgColor} text-${textColor}`;
  return (
    <div className={`flex flex-col 2xl:gap-8 xl:gap-3 gap-4 rounded-2xl md:px-8 xl:px-0`}>
      {data.map((skill, idx) => (
        <Skill idx={idx} icon={icon} key={idx} label={skill} type={type} />
      ))}
    </div>
  );
}
