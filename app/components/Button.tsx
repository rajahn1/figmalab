export interface btnProps {
  label: string;
}

export default function Button(props: btnProps) {
  const { label } = props;
  const active = "bg-bg-pink text-bg-white";

  return (
    <button className="w-max font-bold bg-bg-button rounded-full py-4 px-8 text-3xl cursor-pointer">
      {label}
    </button>
  );
}
