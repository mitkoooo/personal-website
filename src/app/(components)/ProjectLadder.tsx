type ProjectLadderProps = {
  children: React.ReactNode;
  className?: string;
}; /* use `interface` if exporting so that consumers can extend */

const ProjectLadder = ({
  children,
  className,
}: ProjectLadderProps): React.ReactNode => (
  <div className={`${className} relative flex w-full flex-col`}>{children}</div>
);

export default ProjectLadder;

type ProjectProps = {
  children: string;
  className?: string;
};

const Project = ({ children, className }: ProjectProps) => {
  return (
    <div
      className={`w-32 cursor-pointer select-none text-nowrap rounded-sm border-l border-t border-black border-opacity-10 p-2 text-center text-xs transition-[background-color] hover:bg-formal-grey dark:border-formal-grey dark:border-opacity-10 dark:hover:bg-darkmode-active ${className}`}
    >
      {children}
    </div>
  );
};

ProjectLadder.Project = Project;
