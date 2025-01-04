import ProjectLadder from "./(components)/ProjectLadder";

export default function Home() {
  return (
    <div>
      <ProjectLadder className="mx-auto mt-48 max-w-[500px] overflow-hidden font-mono md:max-w-[650px]">
        <ProjectLadder.Project
          projectId=""
          className="ml-[52%]"
          isClickable={false}
        >
          In progress...
        </ProjectLadder.Project>
        <ProjectLadder.Project
          projectId="personal-website"
          className="ml-[26%]"
        >
          Personal website
        </ProjectLadder.Project>
        <ProjectLadder.Project projectId="component-market">
          Component-market
        </ProjectLadder.Project>
      </ProjectLadder>
    </div>
  );
}
