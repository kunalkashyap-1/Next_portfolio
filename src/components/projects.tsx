import { getRepos } from "../api";
import ProjectsModal from "./projectModal";
import { Response } from "../../models/configModel";

export default async function projects() {
  const projects: Response[] = await getRepos();
  return (
    <div>
        {projects.map((item:Response, i:number)=>(
            <ProjectsModal key={i} data={item} />
        ))}
    </div>
  );
}
