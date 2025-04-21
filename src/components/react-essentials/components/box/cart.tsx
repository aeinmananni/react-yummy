type CartProps = {
  icon: React.ReactNode;
  title: string;
  exp: string;
};

export default function Cart({ icon, title, exp }: CartProps) {
  return (
    <div className="  h-max flex-col gap-2 text-white  flex justify-center items-center p-2">
      {icon}
      <div className="flex flex-col gap-2  h-full items-center">
        <span>{title}</span>
        <p>{exp}</p>
      </div>
    </div>
  );
}
