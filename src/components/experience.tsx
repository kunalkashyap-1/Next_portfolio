"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Calendar } from "lucide-react";
import config from "@/config";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

export default function Experience() {
  const [activeTab, setActiveTab] = useState(config.experiences[0].companyName);

  return (
    <div className="experience min-h-screen">
      <div className="px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Parallax speed={-5}>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            id="experience"
            className="title-heading text-center py-8 sm:py-16 text-3xl sm:text-4xl font-bold"
          >
            Experience
          </motion.h1>
        </Parallax>

        <Parallax speed={2}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8 sm:mb-16"
          >
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              orientation="vertical"
              className="w-full flex flex-col sm:flex-row"
            >
              <TabsList
                style={{ borderRadius: "8px" }}
                className="w-full sm:w-1/3 min-h-fit flex flex-col justify-start items-center bg-slate-900 p-1 sm:p-2 gap-1 sm:gap-2 rounded-lg"
              >
                {config.experiences.map((exp) => (
                  <TabsTrigger
                    key={exp.companyName}
                    value={exp.companyName}
                    className="w-full text-left text-base sm:text-lg font-semibold p-2 sm:p-4 transition-all duration-200 data-[state=active]:bg-emerald-600 data-[state=active]:text-white hover:bg-green-700/50 hover:text-gray-300 rounded-md"
                    onClick={() => setActiveTab(exp.companyName)}
                    style={{ borderRadius: "6px" }}
                  >
                    {exp.companyName}
                  </TabsTrigger>
                ))}
              </TabsList>

              <div className="w-full sm:w-2/3 mt-4 sm:mt-0 sm:ml-4">
                <div
                  style={{
                    // minHeight: "25rem",
                  }}
                >
                  {config.experiences.map((exp) => (
                    <TabsContent
                      key={exp.companyName}
                      value={exp.companyName}
                      className="rounded-xl"
                    >
                      {exp.roles.map((role, index) => (
                        <Card
                          key={index}
                          className="w-full border-zinc-800 backdrop-blur-sm rounded-xl mb-6"
                        >
                          <CardHeader className="p-4 sm:p-6">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                              <CardTitle className="text-xl sm:text-2xl font-bold text-zinc-100">
                                {role.position}
                              </CardTitle>
                              <Badge
                                variant="secondary"
                                style={{ borderRadius: "7px" }}
                                className="text-xs sm:text-sm bg-emerald-600/20 text-emerald-400 border-emerald-800 w-fit px-2 py-1 rounded-md"
                              >
                                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                                {role.timeDuration}
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent className="p-4 sm:p-6">
                            <ul className="space-y-3 sm:space-y-4">
                              {role.description.map((item, index) => (
                                <li key={index} className="flex items-start">
                                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 mr-2 mt-1 flex-shrink-0 text-emerald-500" />
                                  <p className="text-sm sm:text-base text-zinc-300">
                                    {item}
                                  </p>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      ))}
                    </TabsContent>
                  ))}
                </div>
              </div>
            </Tabs>
          </motion.div>
        </Parallax>
      </div>
    </div>
  );
}
