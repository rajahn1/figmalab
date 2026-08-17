"use client";

import { useState } from "react";
import ModuleCard from "./ModuleCard";

const modules = [
  {
    title: "Boas-vindas e o\n seu compromisso\n como designer",
    classes: [
      "Aula 1: Boas-vindas!",
      "Aula 2: Nossa comunidade de networking",
      "Aula 3: O pacto",
      "Aula 4: Raio-X do caos criativo",
      "Aula 5: Como navegar pelo curso",
    ],
  },
  {
    title: "A bússola\n criativa",
    classes: [
      'Aula 1: A mentira do "dom" da criatividade',
      "Aula 2: Os meus primeiros passos",
      "Aula 3: Decifrando o briefing do cliente",
      "Aula 4: O plano B do briefing",
      "Aula 5: Referência não é cópia!",
      "Aula 6: Refinando seu olhar",
      "Aula 7: Lab prático de referências",
      "Aula 8: Curadoria visual",
      "Aula 9: O fim do CTRL C + CTRL V",
    ],
  },
  {
    title: "O básico que\n funciona",
    classes: [
      "Aula 1: Os fundamentos do design",
      "Aula 2: Estilos de design",
      "Aula 3: Meu arsenal criativo",
    ],
  },
  {
    title: "Dominando\n o Figma",
    classes: [
      "Aula 1: Instalando o software",
      "Aula 2: Licença educacional",
      "Aula 3: Tour pelo queridinho",
      'Aula 4: Um tesouro chamado "Community"',
      "Aula 5: Organização é tempo!",
      "Aula 6: Lab colaborativo",
      "Aula 7: Pen, Pencil e Figma Draw",
      "Aula 8: Textos e funcionalidades",
      "Aula 9: Cores, gradientes e kit de marca",
      "Aula 10: Como exportar um documento em PDF",
    ],
  },
  {
    title: "Técnicas\n avançadas\n no Figma",
    classes: [
      "Aula 1: Plugins",
      "Aula 2: Máscara de corte",
      'Aula 3: "Pathfinder" do Figma',
      "Aula 4: Auto Layout",
      "Aula 5: Constraints",
      "Aula 6: Componentes e Assets",
      "Aula 7: Modos de mesclagem",
      "Aula 8: Efeitos blur e glass",
      "Aula 9: Texto atrás da imagem",
      "Aula 10: Stickers",
      "Aula 11: Mockups",
      "Aula 12: Texto distorcido",
      "Aula 13: Filtros do Photoshop no Figma",
      "Aula 14: Texto em perspectiva",
    ],
  },
  {
    title: "Mão no\n mouse!",
    classes: [
      "Aula 1: Do briefing ao export: me veja criar do zero!",
      "Aula 2: Carrossel na prática 01",
      "Aula 3: Carrossel na prática 02",
      "Aula 4: Carrossel na prática 03",
      "Aula 5: Carrossel na prática 04",
      "Aula 6: Checklist da criatividade",
    ],
  },
  {
    title: "Bônus!",
    classes: [
      "Aulão de alinhamento visual: Tudo o que você precisa saber para adicionar esse serviço na sua esteira!",
    ],
  },
] as const;

export default function ModuleSelector() {
  const [activeModule, setActiveModule] = useState(1);
  const active = modules[activeModule - 1];

  return (
    <div className="flex min-h-[320px] w-full min-w-0 max-w-[320px] flex-row items-stretch gap-2 md:min-h-0 md:max-w-[720px] md:flex-col md:gap-8 lg:max-w-[1000px] 2xl:max-w-[1010.98px]">
      <div
        className="flex w-auto min-w-0 shrink-0 flex-col justify-center gap-5 overflow-auto rounded-xl bg-bg-white px-2 text-xs text-bg-black md:w-full md:flex-row md:gap-4 md:rounded-full md:px-8 md:py-4 md:text-xl xl:text-sm"
        role="tablist"
        aria-label="Módulos do curso"
      >
        {modules.map((_, index) => {
          const moduleNumber = index + 1;
          const isActive = activeModule === moduleNumber;

          return (
            <button
              key={moduleNumber}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls="active-module"
              onClick={() => setActiveModule(moduleNumber)}
              className={`shrink-0 whitespace-nowrap rounded-full px-3 py-1 text-center font-articulat transition hover:cursor-pointer hover:opacity-90 md:px-6 md:py-2 ${isActive ? "bg-[#c9408f] text-white" : "text-[#313131]"}`}
            >
              MÓDULO {moduleNumber}
            </button>
          );
        })}
      </div>
      <div id="active-module" className="min-w-0 flex-1 md:w-full" role="tabpanel">
        <ModuleCard module={activeModule} classes={active.classes} title={active.title} />
      </div>
    </div>
  );
}
