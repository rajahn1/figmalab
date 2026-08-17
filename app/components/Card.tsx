import Skill from "./Skill";

export interface Props {
  icon: string;
  data: string[];
}

export default function Card({ icon, data }: Props) {
  return (
    <div className={`flex flex-col 2xl:gap-8 xl:gap-3 gap-4 rounded-2xl md:px-8 xl:px-0`}>
      {data.map((skill, idx) => (
        <Skill idx={idx} icon={icon} key={skill} label={skill} />
      ))}
    </div>
  );
}
