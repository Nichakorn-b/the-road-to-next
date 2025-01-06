import { LucideMessageSquareWarning } from "lucide-react";
import { cloneElement } from "react";

type PlaceholderProps = {
  label: string;
  icon?: React.ReactElement<any>;
  button?: React.ReactElement<any>;
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
