import { Separator } from "@/components/ui/separator";

type HeadingProps = {
    title: string,
    description: string
}

export const Heading = ({title, description}: HeadingProps) => {
  return (
    <>
      <div>
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        <p className="test-sm-muted-foreground">
          {description}
        </p>
      </div>
      <Separator />
    </>
  );
};
