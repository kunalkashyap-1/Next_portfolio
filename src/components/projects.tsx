import { getRepos } from "../api";
import ProjectsModal from "./projectModal";
import { Response } from "../../models/configModel";

export default async function projects() {
  const projects: Response[] = await getRepos();
  return (
    <div data-aos="fade-up">
      <h1 className="title-heading" id="projects">
        Projects
      </h1>
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-5">
          {projects.map((item: Response, i: number) => (
            <div
              data-aos="fade-right"
              data-aos-delay={50 + 100 * i}
              key={i}
              className={`col-span-6 sm:col-span-1 `}
            >
              <ProjectsModal key={i} data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
