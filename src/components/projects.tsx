import { getRepos } from "../api";
import ProjectsModal from "./projectModal";
import { Response } from "../../models/configModel";

export default async function projects() {
  const projects: Response[] = await getRepos();
  return (
    <div>
      <h1>Projects</h1>
      <hr/>
        {projects.map((item:Response, i:number)=>(
            <ProjectsModal key={i} data={item} />
        ))}
    </div>
  );
}
