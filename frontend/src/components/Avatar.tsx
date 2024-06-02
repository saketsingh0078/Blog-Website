export const Avatar = ({ name }: { name: string | "A" }) => {
  return (
    <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-slate-400 rounded-full ">
      <span className="text-sm font-medium text-gray-600">
        {name.charAt(0)}
      </span>
    </div>
  );
};
