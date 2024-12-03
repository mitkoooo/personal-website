import ProjectLadder from "./(components)/ProjectLadder";

export default function Home() {
  return (
    <div>
      <ProjectLadder className="mt-48 font-mono">
        {/* <ProjectLadder.Project projectId="lemon-icedtea" className="ml-60">
          
        </ProjectLadder.Project> */}
        <ProjectLadder.Project projectId="" className="ml-48">
          In progress...
        </ProjectLadder.Project>
        <ProjectLadder.Project projectId="personal-website" className="ml-24">
          Personal Website
        </ProjectLadder.Project>
        <ProjectLadder.Project projectId="component-market" className="mr-0">
          Component-market
        </ProjectLadder.Project>
      </ProjectLadder>
    </div>
  );
}

// TODO list
//  TODO Go back to figma and fix box sizes. They must be equal to each other and everything should look pretty!
