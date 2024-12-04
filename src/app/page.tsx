import ProjectLadder from "./(components)/ProjectLadder";

export default function Home() {
  return (
    <div>
      <ProjectLadder className="mx-auto mt-48 max-w-[500px] overflow-hidden font-mono md:max-w-[650px]">
        {/* <ProjectLadder.Project projectId="lemon-icedtea" className="ml-60">
          
        </ProjectLadder.Project> */}
        <ProjectLadder.Project projectId="" className="ml-[52%]">
          In progress...
        </ProjectLadder.Project>
        <ProjectLadder.Project
          projectId="personal-website"
          className="ml-[26%]"
        >
          Personal Website
        </ProjectLadder.Project>
        <ProjectLadder.Project projectId="component-market" className="">
          Component-market
        </ProjectLadder.Project>
      </ProjectLadder>
    </div>
  );
}

// TODO list
//  TODO Go back to figma and fix box sizes. They must be equal to each other and everything should look pretty!
