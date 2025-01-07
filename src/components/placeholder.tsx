import { LucideMessageSquareWarning } from "lucide-react";
import { cloneElement, ReactElement } from "react";

type PlaceholderProps = {
  label: string;
  icon?: ReactElement<{ className?: string }>;
  button?: ReactElement<{ className?: string }>;
};
//if there's no provided icon from the outside, the default would be <LucideMessageSquareWarning/>
export const Placeholder = ({ label, icon = <LucideMessageSquareWarning/>, button = <div/> }: PlaceholderProps) => {
  return (
    <div className="flex-1 self-center flex flex-col items-center justify-center">
        {cloneElement(icon,{
            className:"w-16 h-16",
        })}
      <h2 className="text-lg text-center">{label}</h2>
      {cloneElement(button,{
            className: "h-10"
        })}
    </div>
  );
};
