import Link from "next/link";

type ProjectLadderProps = {
  children: React.ReactNode;
  className?: string;
}; /* use `interface` if exporting so that consumers can extend */

const ProjectLadder = ({
  children,
  className,
}: ProjectLadderProps): React.ReactNode => (
  <div className={`${className} relative flex flex-col`}>{children}</div>
);

export default ProjectLadder;

type ProjectProps = {
  children: string;
  className?: string;
  projectId: string;
};

const Project = ({ children, className, projectId }: ProjectProps) => {
  return (
    <Link
      href={`/${projectId}`}
      className={`w-[48%] cursor-pointer select-none text-nowrap rounded-sm border-l border-t border-black border-opacity-20 p-2 text-center text-xs transition-[background-color] hover:bg-formal-grey md:text-sm dark:border-formal-grey dark:border-opacity-10 dark:hover:bg-darkmode-active ${className}`}
    >
      {children}
    </Link>
  );
};

ProjectLadder.Project = Project;
