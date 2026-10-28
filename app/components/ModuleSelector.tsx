"use client";

import { useState } from "react";
import ModuleCard from "./ModuleCard";
import type { CourseModule } from "@/lib/landing/types";

export default function ModuleSelector({ modules }: { modules: CourseModule[] }) {
  const [activeModule, setActiveModule] = useState(1);
  const active = modules[activeModule - 1] ?? modules[0];

  if (!active) return null;

  return (
    <div className="flex min-h-[320px] w-full min-w-0 max-w-[320px] flex-row items-stretch gap-2 md:min-h-0 md:max-w-[720px] md:flex-col md:gap-8 lg:max-w-[1000px] 2xl:max-w-[1010.98px]">
      <div
        className="flex w-auto min-w-0 shrink-0 flex-col justify-center gap-5 overflow-auto rounded-xl bg-white px-2 text-xs text-bg-black md:w-full md:flex-row md:gap-4 md:rounded-full md:px-8 md:py-4 md:text-xl xl:text-sm"
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
              className={`shrink-0 whitespace-nowrap rounded-full px-3 py-1 text-center font-articulat font-medium transition hover:cursor-pointer hover:opacity-90 md:px-6 md:py-2 ${isActive ? "bg-[#c9408f] text-white" : "text-[#313131]"}`}
            >
              MÓDULO {moduleNumber}
            </button>
          );
        })}
      </div>
      <div id="active-module" className="min-w-0 flex-1 md:w-full" role="tabpanel">
        <ModuleCard module={activeModule} classes={active.lessons} title={active.title} />
      </div>
    </div>
  );
}
