"use client";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useState, useEffect } from "react";
import { ProjectsModal } from "./projectModal";
import { Response } from "@/types/types";
import { AnimatePresence, motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

export default function Projects() {
  const [repos, setRepos] = useState<Response[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
    <div className="projects min-h-screen w-full py-16 px-4 md:px-8 lg:px-24">
      <Parallax speed={-2}>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="title-heading text-center text-4xl md:text-5xl font-bold"
          id="projects"
        >
          Projects
        </motion.h1>
      </Parallax>

      <div className="container mx-auto">
        {isLoading ? (
          <div className="flex items-center justify-center h-20">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-white-900"></div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5 "
          >
            {repos.map((item: Response, idx: number) => (
              <div
                key={String(item.url)}
                className="relative group h-fit"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.2,
                  }}
                  className="relative z-10 p-2"
                >
                  <ProjectsModal id={idx} data={item} />
                </motion.div>

                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.span
                      className="absolute inset-0 bg-slate-700/80 dark:bg-slate-800/[0.8] rounded-2xl"
                      layoutId="hoverBackground"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.1 },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.1, delay: 0.3 },
                      }}
                      style={{ zIndex: 0 }}
                    />
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
