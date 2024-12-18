import Link from "next/link";

type ProjectLadderProps = {
  children: React.ReactNode;
  className?: string;
}; /* use `interface` if exporting so that consumers can extend */

const ProjectLadder = ({
  children,
  className,
}: ProjectLadderProps): React.ReactNode => (
  <div
    className={`${className} relative flex select-none flex-col text-nowrap text-xs md:text-sm`}
  >
    {children}
  </div>
);

export default ProjectLadder;

type ProjectProps = {
  children: string;
  className?: string;
  projectId: string;
  isClickable?: boolean;
};

const Project = ({
  children,
  className,
  projectId,
  isClickable,
}: ProjectProps) => {
  if (isClickable === false)
    return (
      <div
        className={`h-[37px] w-[48%] rounded-sm border-l border-t border-black border-opacity-20 p-2 text-center dark:border-formal-grey dark:border-opacity-10 ${className}`}
      >
        {children}
      </div>
    );

  return (
    <Link
      href={`/${projectId}`}
      className={`w-[48%] cursor-pointer rounded-sm border-l border-t border-black border-opacity-20 p-2 text-center transition-[background-color] hover:bg-formal-grey dark:border-formal-grey dark:border-opacity-10 dark:hover:bg-darkmode-active ${className}`}
    >
      {children}
    </Link>
  );
};

ProjectLadder.Project = Project;
