export default function ModulesBar() {
  const idxs = [1, 2, 3, 4, 5];
  const active = "bg-bg-pink text-bg-white";
  return (
    <div className="flex gap-4 bg-bg-white rounded-full px-8 py-4 text-bg-blacK w-max">
      {idxs.map((idx) => (
        <span key={idx} className={`py-2 px-6 rounded-full ${idx == 1 ? active : "text-bg-black"}`}>
          MÓDULO {idx}
        </span>
      ))}
    </div>
  );
}
