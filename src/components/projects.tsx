"use client";
import axios from "axios";
import ProjectsModal from "./projectModal";
import { Response } from "../../models/configModel";
import { useState, useEffect } from "react";

export default function Projects() {
  const [repos, setRepos] = useState<Response[]>([]);

  useEffect(() => {
    axios
      .get<Response[]>(
        "https://gh-pinned-repos.egoist.dev/?username=kunalkashyap-1"
      )
      .then((response) => {
        setRepos(response.data);
      })
      .catch((error: any) => {
        console.error("ERROR: ", error.message);
        // Handle error if needed
      });
  }, []);

  return (
    <div data-aos="fade-up">
      <h1 className="title-heading" id="projects">
        Projects
      </h1>
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-5">
          {repos.map((item: Response, i: number) => (
            <div
              data-aos="fade-right"
              data-aos-delay={50 + 100 * i}
              data-aos-duration={800}
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
