"use client";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import ProjectsModal from "./projectModal";
import { Response } from "../../models/configModel";
import { useState, useEffect } from "react";

export default function Projects() {
  const [repos, setRepos] = useState<Response[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPinnedRepos = async () => {
      try {
        const client = new ApolloClient({
          uri: "https://api.github.com/graphql",
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
          },
          cache: new InMemoryCache(),
        });

        const query = gql`
          query {
            user(login: "kunalkashyap-1") {
              pinnedItems(first: 6, types: [REPOSITORY]) {
                nodes {
                  ... on Repository {
                    name
                    url
                    description
                    homepageUrl
                    createdAt
                    languages(first: 10) {
                      nodes {
                        name
                      }
                    }
                    stargazerCount
                    forkCount
                  }
                }
              }
            }
          }
        `;

        const result = await client.query({ query });

        setRepos(result.data.user.pinnedItems.nodes);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching pinned repositories:", error);
        setIsLoading(false);
      }
    };

    fetchPinnedRepos();
  }, []);

  return (
    <section
      className="my-4 mx-6"
      data-aos="fade-up"
    >
      <h1 className="title-heading" id="projects">
        Projects
      </h1>
      <div className="container mx-auto">
        {isLoading ? (
          <div className="flex items-center justify-center h-20">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-white-900"></div>
          </div>
        ) : (
          // md:grid-cols-2 lg:grid-cols-3
          <div className="grid sm:grid-cols-1  gap-9 my-5">
            {repos.map((item: Response, i: number) => {
              // console.log(i);
              return (
                <div
                  data-aos="fade-right"
                  data-aos-delay={50}
                  data-aos-duration={800}
                  key={i}
                  className={`col-span-6 sm:col-span-1 ${i % 2 == 0 ? "ml-4" : "mr-4"}`}
                >
                  <ProjectsModal id={i} data={item} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
