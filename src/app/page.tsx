import { Metadata } from "next";
import ProjectLadder from "./(components)/ProjectLadder";

export const metadata: Metadata = {
  description: "Home page",
};

export default function Home() {
  return (
    <div id="projects">
      <ProjectLadder className="mx-auto mt-48 max-w-[500px] overflow-hidden font-mono md:max-w-[650px]">
        <ProjectLadder.Project
          projectId=""
          className="ml-[52%]"
          isClickable={false}
        >
          In progress...
        </ProjectLadder.Project>
        <ProjectLadder.Project
          projectId="stock-exchange-sim"
          className="ml-[26%]"
        >
          Stock Exchange Simulator
        </ProjectLadder.Project>
        <ProjectLadder.Project projectId="personal-website">
          Personal website
        </ProjectLadder.Project>
      </ProjectLadder>
    </div>
  );
}
