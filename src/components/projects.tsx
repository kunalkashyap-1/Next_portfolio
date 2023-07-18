import { getRepos } from "../api";
import ProjectsModal from "./projectModal";
import { Response } from "../../models/configModel";

export default async function projects() {
  const projects: Response[] = await getRepos();
  return (
    <div className="container mx-auto">
      <h1 className="title-heading" id="projects">
        Projects
      </h1>
      <hr />
      <div className="grid grid-cols-3">
        {projects.map((item: Response, i: number) => (
          <div key={i} className={`col-span-6 sm:col-span-1 `}>
            <ProjectsModal key={i} data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
