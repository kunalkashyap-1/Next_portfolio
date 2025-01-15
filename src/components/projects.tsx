"use client";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useState, useEffect } from "react";
import { ProjectsModal } from "./projectModal";
import { Response } from "@/types/types";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function Projects() {
  const [repos, setRepos] = useState<Response[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
    <div className="projects h-[140dvh] w-full relative">
      <div className="absolute inset-0 h-full my-6 mx-24">
        <h1 className="title-heading" id="projects">
          Projects
        </h1>
        <div className="container mx-auto">
          {isLoading ? (
            <div className="flex items-center justify-center h-20">
              <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-white-900"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
              {repos.map((item: Response, idx: number) => (
                <div
                  key={String(item.url)}
                  className="relative group  block p-2 h-full w-full"
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <AnimatePresence>
                    {hoveredIndex === idx && (
                      <motion.span
                        className="absolute inset-0 h-full w-full bg-slate-600 dark:bg-slate-800/[0.8] block  rounded-3xl"
                        layoutId="hoverBackground"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: 1,
                          transition: { duration: 0.15 },
                        }}
                        exit={{
                          opacity: 0,
                          transition: { duration: 0.15, delay: 0.2 },
                        }}
                      />
                    )}
                  </AnimatePresence>
                  <div key={idx}>
                    <ProjectsModal id={idx} data={item} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
