import Skill from "./Skill";

export default function Card() {
  const skills = [
    "Pensar estrategicamente antes de abrir o Figma;",
    "Analisar o briefing com olhar de especialista;",
    "Construir repertório e moodboards inteligentes;",
    "Aumentar seu repertório de estilos de design;",
    "Dominar o Figma do zero ao avançado;",
    "Transformar qualquer referência em arte autoral;",
    "Evoluir junto a uma comunidade de designers criativos.",
  ];
  return (
    <div className="flex flex-col gap-8 bg-bg-black rounded-2xl p-12 mt-16 w-max">
      {skills.map((skill, idx) => (
        <Skill key={idx} label={skill} />
      ))}
    </div>
  );
}
