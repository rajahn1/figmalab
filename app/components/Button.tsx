export interface btnProps {
  label: string;
}

export default function Button(props: btnProps) {
  const { label } = props;

  return <button className="font-bold bg-bg-button rounded-full p-4 text-3xl">{label}</button>;
}
